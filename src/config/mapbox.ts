export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

if (!MAPBOX_TOKEN) {
  console.error('Mapbox token is not set. Please set VITE_MAPBOX_TOKEN in your environment variables.');
}