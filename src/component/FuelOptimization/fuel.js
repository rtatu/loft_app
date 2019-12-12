import React from "react";
import FuelOpDetails from "./details";
import Map from "./map";
import "./fuel.sass";
import { Header } from "../General/Header";
import nearByMarker from "./nearbyMarkers";
import data from "./../../static/jsonFuel.json";
import getMinCostRoute from "./getMinCostRoute";

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
      <FuelOpDetails handleDirection={props.handleDirection} />
      <Map directions={props.directions} data={props.data} />
    </div>
  </div>
);

class FuelOptimzation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: undefined,
      data_points: data
    };
  }

<<<<<<< HEAD
  handleDirection = (props) => {

    let {source, destination} = props;
    let wayPoints = props.via

    let {offRoadDistance,
      tankCapacity,
      truckAverage,
      initFuel,
      fuelRateList,
      reserve,
      pricelist} = props;
=======
  handleDirection = (source, destination, wayPoints) => {
>>>>>>> c7cb31288d4122cdd209cb65628b8b4ef200936c

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
<<<<<<< HEAD
          let data = nearByMarker(offRoadDistance, result);
          this.setState({data_points: data})
=======
          let data = nearByMarker(5, result); // getting nearby marker

          this.setState({ data_points: data }) // changing the state


>>>>>>> c7cb31288d4122cdd209cb65628b8b4ef200936c
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
              gasStation: res
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
        // console.log('init', res)
        let gs = this.getPriceList(res.gasStation, pricelist)
        // console.log('pl', gs)
        res.gasStation = gs;
        res.currentFuel = parseFloat(initFuel);
        res.tankCapacity = parseFloat(tankCapacity);
        res.truckAverage = parseFloat(truckAverage);
        // console.log('pl data', res)

        getMinCostRoute(res)
      })
    }
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
          stops[i]["distance"] = stop.distance.value / 1000;

        })
        resolve(stops);

      }).catch(err => reject(err))




    })
  }

  getPriceList = (gasStation, priceList) => {
    let data = []
    gasStation.map( item => {
      priceList.map( price_item => {
        if(parseInt(price_item["Site"].trim()) == parseInt(item["site_id"])){
          item["per_lit_price"] = parseFloat(price_item["Your Price"].trim())
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
      />
    );
  }
}

export default FuelOptimzation;
