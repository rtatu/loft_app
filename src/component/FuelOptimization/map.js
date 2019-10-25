import React from "react";
import "./map.sass";
import marker from "../../static/icon/svg/marker.svg";
import stops from "../../static/icon/svg/stops.svg";
import marker_second from "../../static/icon/svg/marker_second.svg";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  DirectionsRenderer,
  InfoWindow,
} from "react-google-maps";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMarker: ""
    };
  }

  showMarkerInfo = val => {
    // show marker info
    if (this.state.showMarkerInfo == val) {
      this.setState({ showMarker: "" });
    } else {
      this.setState({ showMarker: val });
    }
  };

  render() {
    return (
      <MapJSX
        data={this.props.data}
        showMarkerInfo={this.showMarkerInfo}
        showMarker={this.state.showMarker}
        directions={this.props.directions}
      />
    );
  }
}

const MapJSX = props => (
  <div className="fuelOp-map">
    <FuelOpMap
      isMarkerShown
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      data={props.data}
      showMarkerInfo={props.showMarkerInfo}
      showMarker={props.showMarker}
      directions={props.directions}
    />
  </div>
);

const FuelOpMap = withGoogleMap(props => ( console.log(props.data) ||
  <GoogleMap
    defaultOptions={{ styles: mapstyle }}
    defaultZoom={8}
    defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
  >
    {props.isMarkerShown &&
      props.data &&
      Object.keys(props.data).map(item =>
        props.data[item].map((station, i) => (
          <Marker
            position={{ lat: station.lat, lng: station.lng }}
            icon={{
              url: station.brand == "LOVES" ? marker : marker_second,
              scaledSize: new window.google.maps.Size(15, 15)
            }}
            key={i}
            onClick={() => props.showMarkerInfo(`${item}${i}`)}
          >
            {props.showMarker == `${item}${i}` && (
              <InfoWindow onCloseClick={() => props.showMarkerInfo(i)}>
                <p>
                  <b>Site Id</b> : {`${station.site_id}`} <br />
                  <b>Address</b> : {`${station.Street}`} <br />
                </p>
              </InfoWindow>
            )}
          </Marker>
        ))
      )}

    {props.directions && (
      <DirectionsRenderer
        directions={props.directions}
        options={{
          markerOptions: {
            icon: {
              url: stops,
              scaledSize: new window.google.maps.Size(25, 25),
              label: "A"
            }
          },
          polylineOptions: {
            strokeColor: "#507DF0", // string - all css colr
            strokeOpacity: 0.6, // number - 0.0 - 1.0
            strokeWeight: 4 // number - stroke width in pixels
          }
        }}
      />
    )}
  </GoogleMap>
));

const mapstyle = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      },
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#333333"
      },
      {
        lightness: 40
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  }
];

export default Map;
