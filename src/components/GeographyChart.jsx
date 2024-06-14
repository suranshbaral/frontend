
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GeographyChart = () => {
  const shopData = [
    { lat: 27.7042, lng: 85.3078, name: 'Shop 1' },
    { lat: 27.7172, lng: 85.324, name: 'Shop 2' },
    { lat: 27.7175, lng: 85.3195, name: 'Shop 3' },
    // Add more shops as needed
  ];

  return (
    <div className="geography-chart-container">
      <MapContainer center={[27.7172, 85.324]} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shopData.map((shop, index) => (
          <Marker key={index} position={[shop.lat, shop.lng]}>
            <Popup>{shop.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GeographyChart;
