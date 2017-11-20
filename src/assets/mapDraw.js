L.mapfit.drawmap('webEmbed', 'day', 'cardsOff', 'zoomPanOn', 'extNavOff', '591dccc4e499ca0001a4c6a41a2ed1be54804856508265221862231b');

function addMarker(id, name, address) {
  var newMarker = [{
    "id": id,
    "location": address,
    "cardData": {
      "title": name,
    },
    "markerUrl": true
  }];

  L.mapfit.addMarkers(newMarker, 'webEmbed', 'day');
}

function removeMarker(id) {

  L.mapfit.deleteMarkers(id, 'webEmbed');
}
