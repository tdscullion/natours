/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGRzY3VsbGlvbiIsImEiOiJja2VsaGNsaHUycWVmMnNsdGo1NDNyandvIn0.xpwiB1FBc1PyFRR3CUisOA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tdscullion/ckeq8jrtc5ltm19qqhsqv6vjd',
    scrollZoom: false,
    // center: [-118.238148, 33.98023],
    // zoom: 8,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup to map
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend the map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
