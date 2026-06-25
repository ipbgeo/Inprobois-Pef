// Création de la carte, centrée sur la Côte d'Ivoire (à ajuster selon ta zone d'étude)
// L.map('map') fait référence au <div id="map"> de notre HTML
const map = L.map('map').setView([6.5, -5.5], 7);
// [latitude, longitude], niveau de zoom (1 = très éloigné, 18 = très proche)

// Ajout d'un fond de carte (la couche visuelle de base : routes, villes, etc.)
// On utilise OpenStreetMap, gratuit et sans clé API nécessaire
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 19,
}).addTo(map);