import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from '../../pic/marker.png'

const center = [51.505, -0.09]

const countries = [
  { name: '中国', position: [35.86166, 104.195397] },
  { name: '美国', position: [37.09024, -95.712891] },
  { name: '日本', position: [36.204824, 138.252924] },
  { name: '德国', position: [51.165691, 10.451526] },
  { name: '法国', position: [46.227638, 2.213749] },
]

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
})

function Map () {
  const navigate = useNavigate()

  const handleCountryClick = (country) => {
    navigate(`/home/region/detail?country=${country}`)
  }

  return (
    <MapContainer
      center={center}
      zoom={3} // Set the initial zoom level to 3
      minZoom={2} // Set the minimum zoom level to 2
      maxZoom={3} // Set the maximum zoom level to 3
      style={{ height: '96vh', width: '100%' }}
      maxBounds={[[-90, -180], [90, 180]]} // Set the maximum bounds
      worldCopyJump={false} // Disable world copying (wrapping)
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country) => (
        <Marker
          key={country.name}
          position={country.position}
          icon={customIcon}
          eventHandlers={{
            click: () => handleCountryClick(country.name),
          }}
        >
          <Popup>{country.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
