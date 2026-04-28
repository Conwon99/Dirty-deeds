/**
 * Location data for location landing pages and area-served schema.
 */

export type Location = {
  slug: string;
  name: string;
  /** For schema and meta */
  addressLocality?: string;
  /** Optional lat/lng for LocalBusiness geo */
  geo?: { latitude: string; longitude: string };
  /** Nearby areas for meta description and content */
  neighborhoods?: string[];
};

export const locations: Location[] = [
  {
    slug: "perth",
    name: "Perth",
    addressLocality: "Perth",
    geo: { latitude: "56.3969", longitude: "-3.4370" },
    neighborhoods: ["Scone", "Bridge of Earn", "Luncarty", "Almondbank"],
  },
  {
    slug: "scone",
    name: "Scone",
    addressLocality: "Scone",
    geo: { latitude: "56.4190", longitude: "-3.4058" },
    neighborhoods: ["Perth", "Guildtown", "Balbeggie", "Luncarty"],
  },
  {
    slug: "blairgowrie",
    name: "Blairgowrie",
    addressLocality: "Blairgowrie",
    geo: { latitude: "56.5916", longitude: "-3.3405" },
    neighborhoods: ["Rattray", "Alyth", "Coupar Angus", "Meigle"],
  },
  {
    slug: "rattray",
    name: "Rattray",
    addressLocality: "Rattray",
    geo: { latitude: "56.5952", longitude: "-3.3274" },
    neighborhoods: ["Blairgowrie", "Rosemount", "Alyth", "Coupar Angus"],
  },
  {
    slug: "pitlochry",
    name: "Pitlochry",
    addressLocality: "Pitlochry",
    geo: { latitude: "56.7051", longitude: "-3.7297" },
    neighborhoods: ["Moulin", "Killiecrankie", "Blair Atholl", "Ballinluig"],
  },
  {
    slug: "aberfeldy",
    name: "Aberfeldy",
    addressLocality: "Aberfeldy",
    geo: { latitude: "56.6210", longitude: "-3.8668" },
    neighborhoods: ["Weem", "Kenmore", "Grandtully", "Dull"],
  },
  {
    slug: "crieff",
    name: "Crieff",
    addressLocality: "Crieff",
    geo: { latitude: "56.3724", longitude: "-3.8380" },
    neighborhoods: ["Comrie", "Muthill", "Gilmerton", "Monzie"],
  },
  {
    slug: "comrie",
    name: "Comrie",
    addressLocality: "Comrie",
    geo: { latitude: "56.3681", longitude: "-3.9932" },
    neighborhoods: ["Crieff", "St Fillans", "Muthill", "Braco"],
  },
  {
    slug: "auchterarder",
    name: "Auchterarder",
    addressLocality: "Auchterarder",
    geo: { latitude: "56.2961", longitude: "-3.7069" },
    neighborhoods: ["Gleneagles", "Blackford", "Dunning", "Aberuthven"],
  },
  {
    slug: "kinross",
    name: "Kinross",
    addressLocality: "Kinross",
    geo: { latitude: "56.2047", longitude: "-3.4214" },
    neighborhoods: ["Milnathort", "Crook of Devon", "Scotlandwell", "Glenfarg"],
  },
  {
    slug: "milnathort",
    name: "Milnathort",
    addressLocality: "Milnathort",
    geo: { latitude: "56.2261", longitude: "-3.4186" },
    neighborhoods: ["Kinross", "Orwell", "Mawcarse", "Crook of Devon"],
  },
  {
    slug: "dunkeld",
    name: "Dunkeld",
    addressLocality: "Dunkeld",
    geo: { latitude: "56.5650", longitude: "-3.5860" },
    neighborhoods: ["Birnam", "Inver", "Bankfoot", "Ballinluig"],
  },
  {
    slug: "birnam",
    name: "Birnam",
    addressLocality: "Birnam",
    geo: { latitude: "56.5578", longitude: "-3.5767" },
    neighborhoods: ["Dunkeld", "Inver", "Murthly", "Bankfoot"],
  },
  {
    slug: "coupar-angus",
    name: "Coupar Angus",
    addressLocality: "Coupar Angus",
    geo: { latitude: "56.5458", longitude: "-3.2673" },
    neighborhoods: ["Blairgowrie", "Alyth", "Meigle", "Burrelton"],
  },
  {
    slug: "alyth",
    name: "Alyth",
    addressLocality: "Alyth",
    geo: { latitude: "56.6227", longitude: "-3.2296" },
    neighborhoods: ["Blairgowrie", "Rattray", "Meigle", "Bridge of Cally"],
  },
  {
    slug: "bridge-of-earn",
    name: "Bridge of Earn",
    addressLocality: "Bridge of Earn",
    geo: { latitude: "56.3486", longitude: "-3.4073" },
    neighborhoods: ["Perth", "Forgandenny", "Dunbarney", "Abernethy"],
  },
  {
    slug: "aberuthven",
    name: "Aberuthven",
    addressLocality: "Aberuthven",
    geo: { latitude: "56.3278", longitude: "-3.6637" },
    neighborhoods: ["Auchterarder", "Dunning", "Blackford", "Muthill"],
  },
  {
    slug: "dunning",
    name: "Dunning",
    addressLocality: "Dunning",
    geo: { latitude: "56.3129", longitude: "-3.5868" },
    neighborhoods: ["Auchterarder", "Aberuthven", "Forteviot", "Forgandenny"],
  },
  {
    slug: "stanley",
    name: "Stanley",
    addressLocality: "Stanley",
    geo: { latitude: "56.4859", longitude: "-3.4512" },
    neighborhoods: ["Luncarty", "Bankfoot", "Murthly", "Perth"],
  },
  {
    slug: "bankfoot",
    name: "Bankfoot",
    addressLocality: "Bankfoot",
    geo: { latitude: "56.5006", longitude: "-3.5175" },
    neighborhoods: ["Stanley", "Murthly", "Dunkeld", "Luncarty"],
  },
  {
    slug: "errol",
    name: "Errol",
    addressLocality: "Errol",
    geo: { latitude: "56.3927", longitude: "-3.2117" },
    neighborhoods: ["St Madoes", "Inchture", "Glencarse", "Rait"],
  },
];

/** All location slugs for getStaticPaths and sitemap */
export const locationSlugs = locations.map((loc) => loc.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
