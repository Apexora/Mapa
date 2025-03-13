// Inicializar el mapa
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3
});

// Cargar la imagen del mapa
const bounds = [[0, 0], [1000, 1000]]; // Ajustar según las dimensiones de tu mapa
const image = L.imageOverlay('/img/Apexora.svg', bounds).addTo(map);

// Ajustar la vista inicial
map.fitBounds(bounds);

// Añadir marcadores para ciudades (ejemplo)
const capitalIcon = L.icon({
    iconUrl: 'icons/capital.png',
    iconSize: [32, 32]
});

L.marker([500, 500], {icon: capitalIcon}).addTo(map)
    .bindPopup('Capital del Reino');

// Función para animar ríos y mares (simplificado)
function animateWater() {
    // Aquí irá el código para animar agua
    // Podría involucrar manipulación de SVG o efectos CSS
}

// Iniciar animaciones
animateWater();