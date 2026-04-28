/**
 * Unique intro copy for each location + service page.
 * Variants per service so pages don’t repeat the same line; placeholders filled with location + neighborhoods.
 */

import type { Location } from "./locations";
import type { Service } from "./services";

export type LocationServiceIntro = {
  heading: string;
  paragraphs: string[];
};

/** Intro variants per service slug. Use {location}, {n1}, {n2} for placeholders. */
const introVariants: Record<
  string,
  { heading: string; paragraphs: string[] }[]
> = {
  "roof-steam-cleaning": [
    {
      heading: "Tree pruning in {location}",
      paragraphs: [
        "We carry out tree pruning and crown reduction across {location}, {n1} and {n2}, helping trees stay safer, healthier and better shaped for their surroundings.",
        "Whether you need deadwood removed, branches lifted away from buildings or a crown reduced for light and safety, we’ll assess the tree and recommend a sensible approach.",
      ],
    },
    {
      heading: "Crown reduction in {location}",
      paragraphs: [
        "Trees in {location} often need careful management around gardens, driveways, roads and neighbouring properties. We reduce, thin and reshape crowns with the long-term health of the tree in mind.",
        "We cover {n1}, {n2} and nearby areas. Get in touch for practical advice and a free quote.",
      ],
    },
    {
      heading: "{location} tree pruning and maintenance",
      paragraphs: [
        "From light formative pruning to larger crown work, we help customers in {location}, {n1} and {n2} keep trees manageable without unnecessary heavy cutting.",
        "We’ll check access, tree condition and timing before work starts so the job is planned properly.",
      ],
    },
  ],
  "render-softwashing": [
    {
      heading: "Tree removal in {location}",
      paragraphs: [
        "If a tree in {location} is dead, dangerous, storm-damaged or simply in the wrong place, we can remove it safely using the right method for the site.",
        "We work across {n1}, {n2} and the surrounding area, including confined gardens and sites where sectional dismantling is needed.",
      ],
    },
    {
      heading: "Sectional dismantling in {location}",
      paragraphs: [
        "Tree removals around {location} often need controlled dismantling to protect fences, sheds, buildings and neighbouring gardens. We plan the work before cutting begins.",
        "Tell us what needs removing and we’ll arrange a site check or quote for {location}, {n1}, {n2} and nearby.",
      ],
    },
    {
      heading: "{location} tree felling and removals",
      paragraphs: [
        "We remove unwanted and hazardous trees in {location} with a safety-first approach, choosing felling or sectional dismantling depending on space and risk.",
        "Timber and branches can be removed, chipped or left on site as agreed.",
      ],
    },
  ],
  "driveway-cleaning": [
    {
      heading: "Stump grinding in {location}",
      paragraphs: [
        "Old stumps can get in the way of lawns, paths, landscaping and replanting. We provide stump grinding in {location}, {n1} and {n2} to remove stumps below ground level.",
        "Send us photos and access details for a quick quote, and we’ll advise what finish is practical for the area.",
      ],
    },
    {
      heading: "{location} stump removal",
      paragraphs: [
        "We grind stumps in gardens, driveways and commercial spaces around {location}, helping you reclaim usable ground without digging out the full root system.",
        "We cover {n1}, {n2} and nearby areas. Arisings can be left as mulch or removed by arrangement.",
      ],
    },
    {
      heading: "Remove unwanted stumps in {location}",
      paragraphs: [
        "If you have a stump left after tree work in {location}, we can grind it down so the area is safer, tidier and easier to reuse.",
        "We’ll check access, nearby services and the intended finish before setting up the grinder.",
      ],
    },
  ],
  "gutter-cleaning": [
    {
      heading: "Hedge cutting in {location}",
      paragraphs: [
        "We cut and maintain hedges across {location}, {n1} and {n2}, from regular boundary trimming to height reductions and seasonal tidy-ups.",
        "We’ll agree the shape, height and finish with you before work begins, then clear the cuttings unless you’d prefer to keep them.",
      ],
    },
    {
      heading: "{location} hedge maintenance",
      paragraphs: [
        "Regular hedge cutting keeps boundaries neat, healthy and manageable. We work on domestic and commercial hedges throughout {location} and nearby areas.",
        "For taller or overgrown hedges around {n1} and {n2}, we’ll assess access and safe working before confirming the plan.",
      ],
    },
    {
      heading: "Hedge trimming in and around {location}",
      paragraphs: [
        "If your hedge in {location} needs shaping, lowering or routine maintenance, we can help keep it under control without leaving a mess behind.",
        "We cover {n1}, {n2} and the surrounding area. Get in touch for a quote.",
      ],
    },
  ],
  "pvc-white-cleaning": [
    {
      heading: "Emergency tree work in {location}",
      paragraphs: [
        "Storm-damaged, fallen or dangerous trees need a quick, careful response. We provide emergency tree work in {location}, {n1} and {n2} to help make sites safe.",
        "Call 07860 203475 if a tree is blocking access, threatening property or creating an immediate safety risk.",
      ],
    },
    {
      heading: "24 hour tree surgeon in {location}",
      paragraphs: [
        "When a tree becomes hazardous in {location}, we prioritise making the area safe and preventing further damage where possible.",
        "We cover {n1}, {n2} and nearby areas for urgent storm damage, fallen branches and dangerous tree callouts.",
      ],
    },
    {
      heading: "{location} emergency tree callouts",
      paragraphs: [
        "If bad weather has left a tree unsafe in {location}, get in touch straight away. We’ll ask for photos if safe to take, assess the risk and advise the next step.",
        "Emergency work is available across {n1}, {n2} and the wider area.",
      ],
    },
  ],
  "window-cleaning": [
    {
      heading: "Fallen tree removal in {location}",
      paragraphs: [
        "We remove fallen and storm-damaged trees from gardens, driveways, roadsides and commercial sites across {location}, {n1} and {n2}.",
        "We’ll assess tension, weight and access before cutting so the tree can be cleared safely.",
      ],
    },
    {
      heading: "{location} fallen tree clearance",
      paragraphs: [
        "A fallen tree can block access or cause further damage if it is cut incorrectly. We clear fallen trees around {location} with the right equipment and a careful plan.",
        "Branches and timber can be removed, chipped or left as logs depending on what you need.",
      ],
    },
    {
      heading: "Clear fallen trees in and around {location}",
      paragraphs: [
        "If a tree has come down in {location}, {n1} or {n2}, we can section it safely and restore access to gardens, driveways and work areas.",
        "For urgent hazards, call 07860 203475 so we can advise quickly.",
      ],
    },
  ],
};

/** Simple numeric hash from string for picking a variant. */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Returns unique intro content for a location + service page.
 * Uses location name and up to 2 neighborhoods; picks a variant so different pages get different copy.
 */
export function getLocationServiceIntro(
  location: Location,
  service: Service
): LocationServiceIntro {
  const variants = introVariants[service.slug];
  const n = (variants?.length ?? 1);
  const index = n > 0 ? hash(location.slug + service.slug) % n : 0;
  const template = variants?.[index] ?? {
    heading: `${service.title} in {location}`,
    paragraphs: [
      `We offer ${service.title.toLowerCase()} in {location} and the surrounding areas, including {n1} and {n2}. Get in touch for a free quote.`,
    ],
  };

  const n1 = location.neighborhoods?.[0] ?? "the surrounding area";
  const n2 = location.neighborhoods?.[1] ?? "nearby";

  const replace = (s: string) =>
    s
      .replace(/\{location\}/g, location.name)
      .replace(/\{n1\}/g, n1)
      .replace(/\{n2\}/g, n2);

  return {
    heading: replace(template.heading),
    paragraphs: template.paragraphs.map(replace),
  };
}
