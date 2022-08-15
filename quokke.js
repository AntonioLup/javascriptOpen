console.clear();

let marker, map;
function initMap() {
  console.log("inicio");
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });
  const marker = new google.maps.Marker({
    posicion: posicion,
    map,
    title: "Estas aqui",
  });
}
function getPos() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const watchPos = geoLoc.watchPosition(
      centraMapa,
      (error) => console.log(error),
      { timeout: 60000 }
    );
  } else {
    alert("tu navegador no admite esto");
  }
}
function centraMapa(pos) {
  const nuevaPos = {
    lat: pos.coords.latitud,
    lng: pos.coords.longitude,
  };
}
