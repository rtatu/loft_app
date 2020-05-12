import React from "react";
import FuelOpDetails from "./details";
import Map from "./map";
import "./fuel.sass";
import { Header } from "../General/Header";
import nearByMarker from "./nearbyMarkers";
import data from "./../../static/jsonFuel.json";
import getMinCostRoute from "./getMinCostRoute";
import ShowGasStation from "./showGasStation";

const FuelOptimzationJSX = props => (
  <div className="fuel-container">
    <Header
      label="Fuel Optimization"
      style={{
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "10px"
      }}
    />
    <div className="fuel-op-container">
      <FuelOpDetails handleDirection={props.handleDirection} hide={props.opRoute.length != 0}/>
      {
        (props.opRoute.length != 0)
        ? <ShowGasStation opRoute={props.opRoute} goback={props.goback}/>
        : null
      }
      <Map directions={props.directions} data={props.data}/>
    </div>
  </div>
);

class FuelOptimzation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: undefined,
      data_points: data,
      optimizingData: false,
      opRoute: []
    };
  }

  goback = () => {
    this.setState({opRoute : []});
  }

  handleDirection = (props) => {

    this.setState({optimizingData : true})

    let {source, destination} = props;
    let wayPoints = props.via

    let {offRoadDistance,
      tankCapacity,
      truckAverage,
      initFuel,
      fuelRateList,
      reserve,
      pricelist} = props;

    const DirectionService = new window.google.maps.DirectionsService();

    let wp = [];
    for (let item of wayPoints) {
      wp.push({
        location: new window.google.maps.LatLng(
          item.location.lat,
          item.location.lng
        ),
        stopover: true
      });
    }

    this.testDirection(source, destination, wp, offRoadDistance, pricelist, initFuel, tankCapacity, truckAverage)

    

    DirectionService.route(
      {
        origin: new window.google.maps.LatLng(
          source.location.lat,
          source.location.lng
        ),
        destination: new window.google.maps.LatLng(
          destination.location.lat,
          destination.location.lng
        ),
        waypoints: wp, // middle destination
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status == window.google.maps.DirectionsStatus.OK) {
          this.setState({ directions: result });
          let data = nearByMarker(offRoadDistance, result);
          this.setState({data_points: data})
        }
      }
    );
  };

  getDirection = (source, destination, od, priceList) => {


    const DirectionService = new window.google.maps.DirectionsService();

    return new Promise( (resolve, reject) => DirectionService.route({
      origin: source.location,
      destination: destination.location,
      travelMode: window.google.maps.TravelMode.DRIVING
    },
      (result, status) => {
        if(status == window.google.maps.DirectionsStatus.OK){
          this.getDistance(source.location, nearByMarker(od, result).gasStation).then(
            res => resolve({
              distance: result.routes[0].legs[0].distance.value / 1000,
              unit: 'km',
              source: source.location,
              gasStation: res,
              start_address: result.routes[0].legs[0].start_address,
              end_address: result.routes[0].legs[0].end_address
            }
              ) // getting markers
          )
        } else {
          reject(status)
        }
      }
    ))
  }


  testDirection = (source, destination, wps, od, pricelist, initFuel, tankCapacity, truckAverage) => {

    // gas station data

    let result = []

    let wp = [...wps]

    source = {
      location: new window.google.maps.LatLng(
      source.location.lat,
      source.location.lng
    )};

    destination =  {
      location: new window.google.maps.LatLng(
      destination.location.lat,
      destination.location.lng
    )};

    wp.unshift(source);
    wp.push(destination);

    for (let index = 0; index < wp.length - 1; index++) {
      this.getDirection(wp[index], wp[index+1], od)
      .then(res => {
        let gs = this.getPriceList(res.gasStation, pricelist)
        res.gasStation = gs;
        res.distance += 100

        res.currentFuel = parseFloat((index == 0) ? initFuel : 100 / truckAverage);
        res.tankCapacity = parseFloat(tankCapacity);
        res.truckAverage = parseFloat(truckAverage);

        let result = getMinCostRoute(res);

        if(result == -1){
          return 0
        }

        res.gasStation = result[0]
        res.totalCost = result[1]

        this.setOpRoute(res)

        if(index == wp.length - 2){
          this.setState({optimizingData : false}, () => {
            if(this.state.opRoute.length == 0) {
              alert("Error in Optimization");
            }
          })
        }
      })
    }
  }


  setOpRoute = (route) => {
    let r = [...this.state.opRoute];
    r.push(route);
    this.setState({opRoute : r})
  }


  getDistance = (source, stops) => {
    return new Promise((resolve, reject) => {

      let destinations = stops.map(item=>{return({lat:item.lat,lng:item.lng})})

      let split_destination = []

      let all = [];

      while(destinations.length) {
        split_destination.push(destinations.splice(0,25))
      }

      for(let i=0;i<split_destination.length;i++){
        all.push(this.getSingleInstanceDistance(source, split_destination[i]))
      }

      Promise.all(all).then((res,status) => {
        let total_stops = []

        res.map( (item, index) => total_stops.push(...item.rows[0].elements))
        total_stops.map( (stop, i) =>{
          // console.log(stop);
          stops[i]["distance"] = stop.distance.value / 1000;
          stops[i]["duration"] = stop.duration.text;

        })
        resolve(stops);

      }).catch(err => reject(err))

    })
  }

  getPriceList = (gasStation, priceList) => {
    console.log(gasStation, 'check 123');
    let data = []
    gasStation.map( item => {
      priceList.map( price_item => {
        if(parseInt(price_item["Site"].trim()) == parseInt(item["site_id"])){
          item["per_lit_price"] = parseFloat(price_item["Your Price"])
          data.push(item)
        }
      })
    })


    data.sort(function(a,b){
      return a["distance"] - b["distance"]
    })

    return data
  }


  getSingleInstanceDistance = ( source, destinations) => {
    let distanceService = new window.google.maps.DistanceMatrixService()

    return new Promise( (resolve, reject) => {
      distanceService.getDistanceMatrix({
        origins: [source], 
        destinations: destinations, 
        travelMode: window.google.maps.TravelMode.DRIVING
      }, (res, status) => {
        if(status == "OK"){
          resolve(res,status)
        } else {
          reject(res, status)
        }
      })
    })
  }


  render() {
    return (
      <FuelOptimzationJSX
        handleDirection={this.handleDirection}
        directions={this.state.directions}
        data={this.state.data_points}
        opRoute={this.state.opRoute}
        goback={this.goback}
      />
    );
  }
}

export default FuelOptimzation;
