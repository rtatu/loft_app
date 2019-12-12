import RouteBoxer from "./RouterBox";
import data from "./../../static/jsonFuel.json";

export default function nearByMarker(distance, directions) {
  let containsMarker = [];

  let routeBoxer = new RouteBoxer();

  let gmarkers = getMarkers(data);
  
  let path = directions.routes[0].overview_path;

  let boxes = routeBoxer.box(path, distance);

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < gmarkers.length; j++) {
      if (boxes[i].contains(gmarkers[j].getPosition())) {
        containsMarker.push({
          lat: gmarkers[j].getPosition().lat(),
          lng: gmarkers[j].getPosition().lng(),
          Street: gmarkers[j].Street,
          site_id: gmarkers[j].site_id,
          brand: gmarkers[j].title
        });
      }
    }
  }

  return {
    "gasStation" : containsMarker
  }
}

const getMarkers = location => {
  let gmarker = [];

  Object.keys(location).map((key, i) => {
    location[key].map((gasStation, index) => {
      let marker = new window.google.maps.Marker({
        title: gasStation.brand,
        position: new window.google.maps.LatLng(
          parseFloat(gasStation.lat),
          parseFloat(gasStation.lng)
        ),
        site_id: gasStation.site_id,
        Street: gasStation.Street
      });

      gmarker.push(marker);
    });
  });

  return gmarker;
};

export { getMarkers };
