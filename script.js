window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
}

function staticLoadPlaces() {
    return [
        {
            name: 'Spaceport',
            location: {
                lat: 46.998361111,
                lng: 6.9416944444,
            }
        }
    ]
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/dino.glb');
        model.setAttribute('scale', '1 1 1');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}