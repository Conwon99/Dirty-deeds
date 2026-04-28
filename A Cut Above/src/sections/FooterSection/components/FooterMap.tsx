/** Default service area map - used when no location prop is passed */
const DEFAULT_MAP = {
  lat: "56.6227",
  lng: "-3.2296",
  name: "A Cut Above Arborist - Alyth",
};

export type FooterMapProps = {
  /** When provided (e.g. on location pages), show this location. Otherwise show business location. */
  mapLocation?: {
    lat: string;
    lng: string;
    name: string;
  };
};

function getEmbedUrl(lat: string, lng: string): string {
  const latNum = parseFloat(lat);
  const lngNum = parseFloat(lng);
  const delta = 0.02;
  const bbox = [lngNum - delta, latNum - delta, lngNum + delta, latNum + delta].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export const FooterMap = ({ mapLocation }: FooterMapProps) => {
  const { lat, lng, name } = mapLocation ?? DEFAULT_MAP;
  const embedUrl = getEmbedUrl(lat, lng);

  return (
    <div className="box-border caret-transparent w-full mt-10 md:mt-14">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-3 md:text-xl">
        {mapLocation ? `Map – ${name}` : "Our location"}
      </div>
      <div className="box-border caret-transparent rounded-xl overflow-hidden border border-white/20 aspect-[16/9] min-h-[200px] md:min-h-[220px]">
        <iframe
          title={mapLocation ? `Map of ${name}` : "A Cut Above Arborist service area"}
          src={embedUrl}
          className="box-border w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
};
