const socket = io();

const map = L.map("map").setView([0, 0], 16); // Start at a default position

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

const markers = {};

// Request geolocation
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
            
            // Update map view to current position
            map.setView([latitude, longitude], 16);
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    
    // Update or create marker
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
    
    // Center map on this position
    map.setView([latitude, longitude]);
});

socket.on("user-disconnected", (id) =>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }


})