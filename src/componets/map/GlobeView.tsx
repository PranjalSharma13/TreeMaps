import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { treeLocations } from './TreeData';

// Set Mapbox token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';
console.log('Mapbox Token:', mapboxgl.accessToken);

export const GlobeView = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);


    // Initialize map when component mounts
    useEffect(() => {
        if (!mapboxgl.accessToken || !mapContainerRef.current) {
            console.error('Mapbox token is missing or invalid');
            return;
        }
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',  // Map style
            center: [0, 20],
            zoom: 1.75,
            projection: 'globe',
            attributionControl: false // Remove 
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');


        // Add markers for each tree location
        treeLocations.forEach((location) => {
            const markerEl = document.createElement('div');
            markerEl.className = 'marker';

            // Create marker element with pin design
            markerEl.innerHTML = `
      <div class="pin">
        <div class="pin-icon">🌳</div>
      </div>
    `;

            const popup = new mapboxgl.Popup({
                offset: [0, -30],
                closeButton: true,
                closeOnClick: true
            }).setHTML(`
      <div class="popup-content">
        <img 
          src="${location.image}" 
          alt="${location.title}" 
          class="popup-image"
        />
        <div class="popup-info">
          <h3 class="popup-title">${location.title}</h3>
          <p class="popup-description">${location.description}</p>
          <div class="popup-coordinates">
            <span>📍 ${location.lat.toFixed(4)}°N, ${location.lng.toFixed(4)}°E</span>
          </div>
        </div>
      </div>
    `);

            new mapboxgl.Marker(markerEl)
                .setLngLat([location.lng, location.lat])
                .setPopup(popup)
                .addTo(map);
        });




        // Clean up on unmount
        return () => map.remove();
    }, []); // Dependency array to re-render on state change

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainerRef} className="absolute inset-0" />




        </div>

    );
};
