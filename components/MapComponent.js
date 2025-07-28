"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapComponent() {
  const center = [33.6844, 73.0479]; // Islamabad, Pakistan

  return (
    <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
      <h2 className="text-xl font-semibold mb-4 px-4">Location Map</h2>
      <MapContainer center={center} zoom={12} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Our Main Pickup Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
