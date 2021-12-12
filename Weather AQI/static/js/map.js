const params = new URLSearchParams(window.location.search);

const city = params.get('city');
// const city = cityData['stations'][0]['city'];
// const state = cityData['stations'][0]['state'];

// fetch(`/getCityWeather?city=${city}`, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//   }).then((response) => {
//         response.json().then((data)=>{
//             data = JSON.stringify(data);
//             console.log(data)
//         })
//   });


mapboxgl.accessToken = 'pk.eyJ1IjoibWVsZG9uLWRjdW5oYSIsImEiOiJja3gzMW16MjMwcmw0MzB1cWZ1amMzbnd4In0._gh2X7Jzwjqf3PiQ3TItKw';
const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
    .forwardGeocode({
        query: `${city}, India`,
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
        }
        const feature = response.body.features[0];

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: feature.center,
            zoom: 10
        });

        // Create a marker and add it to the map.
        new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
    });