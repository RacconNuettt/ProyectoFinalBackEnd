import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PiX } from "react-icons/pi";

const ContactUs = () => {
    const position = [9.990184, -84.288440];
    const zoom = 15;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Nerko one', color: "#008000"  }}>
            <h1>Puedes encontrarnos en la siguiente direccion</h1>
            <MapContainer
                center={position}
                zoom={zoom}
                style={{ border: 'solid 2px #008000', padding: '5px', height: "300px", width: "80%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Nuestra localizacion
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ContactUs;
