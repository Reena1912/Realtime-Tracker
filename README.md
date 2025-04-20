# Real-Time Location Tracker

A real-time location tracking application using Node.js, Socket.io, and Leaflet.js that displays multiple users on an interactive map.

## Features
- Real-time location updates
- Interactive map with OpenStreetMap
- Multiple user tracking
- Automatic cleanup of disconnected users

## Technologies Used
- Node.js
- Express.js
- Socket.io
- Leaflet.js
- OpenStreetMap

This real-time location tracking application is built on a Node.js and Express backend with Socket.io enabling live communication between the server and connected clients. The system utilizes the browser's Geolocation API to capture precise coordinates, which are then transmitted via WebSocket to the server. 

On the frontend, Leaflet.js powers an interactive map with OpenStreetMap tiles, dynamically updating user positions through customizable markers.
