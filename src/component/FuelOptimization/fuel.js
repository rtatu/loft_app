import React from "react";
import FuelOpDetails from "./details";
import Map from "./map";
import "./fuel.sass";
import { Header } from "../General/Header";

const FuelOptimzationJSX = (props) => (
  <div className="fuel-container">
    <Header label="Fuel Optimization" style={{
      marginTop: '10px',
      marginLeft: '10px',
      marginRight: '10px'
    }} />
    <div className="fuel-op-container">
      <FuelOpDetails handleDirection={props.handleDirection} />
      <Map directions={props.directions} />
    </div>
  </div>
);

class FuelOptimzation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      directions: undefined
    }
  }

  handleDirection = (source, destination, wayPoints) => {

    const DirectionService = new window.google.maps.DirectionsService();


    let wp = []
    for (let item of wayPoints) {
      wp.push({
        location: new window.google.maps.LatLng(item.location.lat, item.location.lng),
        stopover: true
      })
    }

    DirectionService.route({
      origin: new window.google.maps.LatLng(source.location.lat, source.location.lng),
      destination: new window.google.maps.LatLng(destination.location.lat, destination.location.lng),
      waypoints: wp, // middle destination
      travelMode: window.google.maps.TravelMode.DRIVING
    }, (result, status) => {
      console.log(result)
      this.setState({ directions: (status == window.google.maps.DirectionsStatus.OK) ? result : undefined })
    })

  }
  render() {
    return <FuelOptimzationJSX handleDirection={this.handleDirection} directions={this.state.directions} />
  }
}

export default FuelOptimzation;
