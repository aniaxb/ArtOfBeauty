import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map(){

  return (
    <div className="h-[40vh] w-[44vw]">
      <MapContainer center={[51.505, -0.09]} zoom={20} style={{ height: '100%', width: '100%', zIndex: 1 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
                       Art of Beauty Salon
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
