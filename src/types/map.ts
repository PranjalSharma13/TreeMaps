export interface TreeMarker {
    id: string;
    latitude: number;
    longitude: number;
    image: string;
    message: string;
    title: string;
  }




// Sample trees array (replace with your actual data)
// const trees: TreeMarker[] = [
//   {
//     id: '1',
//     latitude: 40.7128,
//     longitude: -74.0060,
//     image: 'image_url_1',
//     message: 'Message 1',
//     title: 'Tree 1',
//   },
//   {
//     id: '2',
//     latitude: 40.7308,
//     longitude: -73.9352,
//     image: 'image_url_2',
//     message: 'Message 2',
//     title: 'Tree 2',
//   }
// ];

// Assuming map is already initialized somewhere in your component (e.g., using useRef)
// const map = useRef<mapboxgl.Map | null>(null);

// // Loop through the trees array and create markers
// trees.forEach((tree) => {
//   const el = document.createElement('div');
//   el.className = 'w-6 h-6 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition-colors';

//   new mapboxgl.Marker(el)
//     .setLngLat([tree.longitude, tree.latitude])
//     .setPopup(
//       new mapboxgl.Popup({ offset: 25 })
//         .setHTML(
//           `<div class="cursor-pointer" data-marker-id="${tree.id}">
//             <h3 class="font-bold">${tree.title}</h3>
//             <p>${tree.message}</p>
//             <img src="${tree.image}" alt="${tree.title}" class="w-24 h-24" />
//           </div>`
//         )
//     )
//     .addTo(map.current!); // Ensure map.current is properly initialized

//   el.addEventListener('click', () => {
//     setActiveMarker(tree); // Ensure setActiveMarker is properly defined and expects a TreeMarker
//   });
// });
