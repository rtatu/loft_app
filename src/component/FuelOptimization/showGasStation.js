import React from "react";
import "./gasStation.sass";
import { Grid, Stack } from "../General/Grid";

import marker from "../../static/icon/svg/marker.svg";
import stops from "../../static/icon/svg/stops.svg";
import marker_second from "../../static/icon/svg/marker_second.svg";

class ShowGasStation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ShowGasStationJSX data={this.props.opRoute} goback={this.props.goback}/>;
  }
}

const ShowGasStationJSX = (props) => (
  <div className="gas-station-route">
    <div className="temp">
      <h1>Route Details</h1>
      <div className="brand_id">
        <img src={marker} style={{ width: "20px", height: "20px" }} />
        <p>Loves</p>
      </div>

      <div className="brand_id">
        <img src={marker_second} style={{ width: "20px", height: "20px" }} />
        <p>Petro Canada</p>
      </div>
    </div>
    <Stack style={{ gridGap: "10px" }}>

      {
        props.data.map( (route, count) =>
          <Stack style={{gridGap: "10px"}} key={count}> 
            <StopDetails str={`${route.start_address} to ${route.end_address}`}/>
            {
              Object.keys(route.gasStation).map( (gs, index) => 
                <GasStation {...route.gasStation[gs]} key={index}/>
              )
            }
          <RouteSummary total_cost={route.totalCost} distance={route.distance}/>
          </Stack>
        )
      }

    <div className="fuel-op-button">
      <button className="optimize-route" onClick={props.goback}>
        Go Back
      </button>
    </div>
    </Stack>
  </div>
);

const GasStation = (props) => ( 
  <div className="gas-station">
    <div className="station-info">
      <img src={marker} style={{ width: "20px", height: "20px" }} />
      <p className="street">{props.Street}</p>
      <span className="distance">{props.distance}</span>
      <span>{props.duration}</span>
    </div>
    <div className="price-detail">
    <span>
      Price Per Liter : <span className="hl">{props.cost_per_lit}</span>
    </span>

    <span>
      Gas Filled : <span className="hl">{props.gasFilled}</span>
    </span>

    <span>
      Total Price : <span className="hl">{props.price_for_gasFilled}</span>
    </span>
    </div>
  </div>
);

const StopDetails = ({str}) => (
  <div className="stop-detail">
    <p>{str}</p>
  </div>
);

const RouteSummary = (props) => (
  <div className="route-summary">
    <span>
      Total Cost : <span className="hl">{`${props.total_cost} CAD`}</span>
    </span>

    <span>
      Total Distance : <span className="hl">{`${props.distance} Km`}</span>
    </span>
  </div>
);

export default ShowGasStation;
