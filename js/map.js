var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    center: new google.maps.LatLng(53.072900, 8.801068),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(53.072900, 8.801068), 
    map: map,
    title: "Alte Schnapsfabrik"
});
}

google.maps.event.addDomListener(window, 'load', initialize);