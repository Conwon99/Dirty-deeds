/**
 * Service slug and display data for location-service pages and service grids.
 */

import treeRemovalImageUrl from "../../ImagesPhotos/670068124_18085351625056361_8543755538711337465_n (1).jpg?url";
import stumpGrindingImageUrl from "../../ImagesPhotos/stump grinding.webp?url";
import treePruningImageUrl from "../../ImagesPhotos/tree_pruning.jpg?url";
import hedgeTrimmingImageUrl from "../../ImagesPhotos/hedge_trimming.jpg?url";
import fallenTreeImageUrl from "../../ImagesPhotos/fallen tree.jpg?url";
import emergencyTreeWorkImageUrl from "../../ImagesPhotos/670428133_18087555848056361_2695285749880354502_n.jpg?url";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
};

export const services: Service[] = [
  {
    slug: "roof-steam-cleaning",
    title: "Tree Pruning & Crown Reduction",
    shortDescription:
      "Improve tree health, light and shape with selective pruning, crown thinning and reduction carried out to British Standards.",
    imageUrl: treePruningImageUrl,
  },
  {
    slug: "render-softwashing",
    title: "Tree Removal & Dismantling",
    shortDescription:
      "Safe sectional dismantling and full removals for dangerous, dead or unwanted trees in domestic and commercial spaces.",
    imageUrl: treeRemovalImageUrl,
  },
  {
    slug: "driveway-cleaning",
    title: "Stump Grinding",
    shortDescription:
      "Professional stump removal below ground level to reclaim space, prevent regrowth and prepare areas for landscaping.",
    imageUrl: stumpGrindingImageUrl,
  },
  {
    slug: "gutter-cleaning",
    title: "Hedge Cutting & Maintenance",
    shortDescription:
      "Regular hedge trimming, formative pruning and boundary maintenance to keep hedges neat, healthy and manageable year-round.",
    imageUrl: hedgeTrimmingImageUrl,
  },
  {
    slug: "pvc-white-cleaning",
    title: "Emergency Tree Work 24/7",
    shortDescription:
      "Rapid-response emergency callouts for storm-damaged, fallen or hazardous trees to make your property safe at any hour.",
    imageUrl: emergencyTreeWorkImageUrl,
  },
  {
    slug: "window-cleaning",
    title: "Fallen Tree Removal",
    shortDescription:
      "Safe removal of fallen, storm-damaged or hazardous trees from gardens, driveways, roadsides and commercial properties.",
    imageUrl: fallenTreeImageUrl,
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
