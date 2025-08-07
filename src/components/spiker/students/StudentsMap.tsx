import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";
import countriesData from "./map.json"; 

const getColor = (value: number): string => {
  return value > 90 ? "#08306b" :
         value > 70 ? "#2171b5" :
         value > 50 ? "#6baed6" :
         value > 30 ? "#c6dbef" :
         value > 10 ? "#eff3ff" :
                      "#f7fbff";
};


const style = (feature: any) => {
  const value = feature.properties?.value || 0;
  return {
    fillColor: getColor(value),
    weight: 1,
    color: "white",
    fillOpacity: 0.8,
  };
};

export default function StudentsMap() {
  return (
    <Card className="w-full mt-6">
      <CardContent className="p-0">
        <div className="h-[600px] w-full">
          <MapContainer
            center={[41.3, 69.2]}
            zoom={3}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <GeoJSON
              data={countriesData as any}
              style={style}
              onEachFeature={(feature: any, layer) => {
                const name = feature.properties?.name || "Noma'lum";
                const value = feature.properties?.value || 0;
                const users = feature.properties?.users || 0;

                layer.bindPopup(
                  `<strong>${name}</strong><br>Foydalanuvchilar: ${users}<br>Foiz: ${value}%`
                );
              }}
            />
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
