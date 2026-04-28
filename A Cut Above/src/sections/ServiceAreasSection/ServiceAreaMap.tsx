import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/** Rough polygon [lat, lng] covering Perth and Kinross. */
const SERVICE_AREA_POLYGON: [number, number][] = [
  [56.12, -4.10],   // SW - west of Crieff / Comrie
  [56.16, -3.25],   // SE - Kinross and Glenfarg
  [56.43, -3.03],   // E - Carse of Gowrie / Errol
  [56.67, -3.18],   // NE - Alyth / eastern glens
  [56.83, -3.78],   // N - Pitlochry / Highland Perthshire
  [56.62, -4.05],   // W - Aberfeldy / Loch Tay
  [56.12, -4.10],   // close polygon
];

const MAP_CENTER: [number, number] = [56.45, -3.60];
const MAP_ZOOM = 9;

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        scrollWheelZoom: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const polygon = L.default.polygon(SERVICE_AREA_POLYGON, {
        color: "#0d5c2e",
        weight: 2,
        fillColor: "#0d5c2e",
        fillOpacity: 0.25,
      }).addTo(map);

      map.fitBounds(polygon.getBounds(), { padding: [24, 24] });
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-0 isolate">
      <div
        ref={containerRef}
        className="w-full h-full min-h-[280px] lg:min-h-[320px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 [&_.leaflet-control]:!z-[100] [&_.leaflet-pane]:!z-[1]"
        aria-label="Map showing A Cut Above Arborist service area in Perth and Kinross"
      />
    </div>
  );
}
