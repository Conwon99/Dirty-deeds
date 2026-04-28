/**
 * Per-service content for location+service pages (Why Choose, Process, FAQ).
 * Used by tree surgery service pages.
 */

export type ServiceDetailContent = {
  heroDescription: string;
  whyChoose: {
    title: string;
    points: { title: string; description: string }[];
  };
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetailContent> = {
  "roof-steam-cleaning": {
    heroDescription:
      "Professional tree pruning and crown reduction to improve shape, light, safety and long-term tree health across Perth and Kinross and Angus.",
    whyChoose: {
      title: "Why Choose Our Tree Pruning?",
      points: [
        {
          title: "Tree Health First",
          description:
            "We prune with the structure and health of the tree in mind, removing problem branches while preserving a natural shape.",
        },
        {
          title: "Safer Spaces",
          description:
            "Crown reductions, thinning and deadwood removal can reduce risk around gardens, driveways, buildings and public areas.",
        },
        {
          title: "Qualified Workmanship",
          description:
            "Tree work is carried out with professional equipment, safe methods and experience across domestic and commercial sites.",
        },
      ],
    },
    processSteps: [
      { title: "Assess the tree", description: "We inspect the tree, access and surrounding area before recommending the right pruning approach." },
      { title: "Carry out safe pruning", description: "Work is completed using suitable climbing, cutting and lowering methods where required." },
      { title: "Tidy and clear", description: "Branches and green waste can be removed, chipped, or left on site if requested." },
    ],
    faqs: [
      { question: "When is the best time to prune trees?", answer: "It depends on the species and the work required. Many trees can be pruned outside nesting season, while some need more specific timing. We can advise after seeing the tree." },
      { question: "What is crown reduction?", answer: "Crown reduction reduces the overall height or spread of a tree while maintaining a balanced, natural shape." },
      { question: "Will pruning harm my tree?", answer: "Correct pruning should support tree health. We avoid unnecessary heavy cutting and recommend the most suitable approach for the tree." },
    ],
  },
  "render-softwashing": {
    heroDescription:
      "Safe tree removal and sectional dismantling for dead, dangerous or unwanted trees where controlled work is required.",
    whyChoose: {
      title: "Why Choose Our Tree Removal?",
      points: [
        {
          title: "Controlled Dismantling",
          description:
            "Trees can be dismantled in sections using ropes and lowering techniques to protect nearby buildings, fences and gardens.",
        },
        {
          title: "Hazard Reduction",
          description:
            "We remove dead, storm-damaged, leaning or unsuitable trees with a safety-first approach.",
        },
        {
          title: "Tidy Finish",
          description:
            "Waste can be cleared from site, chipped, or cut into manageable logs depending on what you prefer.",
        },
      ],
    },
    processSteps: [
      { title: "Survey access and risk", description: "We assess the tree, surrounding hazards, access and the safest removal method." },
      { title: "Dismantle or fell", description: "The tree is felled or dismantled in sections using suitable equipment and techniques." },
      { title: "Clear the site", description: "We tidy the area and remove or process timber and brash as agreed." },
    ],
    faqs: [
      { question: "Can you remove trees in confined spaces?", answer: "Yes. Where access is tight or buildings are nearby, trees can often be dismantled in sections using ropes and rigging." },
      { question: "Do I need permission to remove a tree?", answer: "Some trees are protected by a Tree Preservation Order or conservation area rules. We can advise what to check before work starts." },
      { question: "Can you leave the logs?", answer: "Yes. We can leave timber in manageable pieces or remove it from site as part of the job." },
    ],
  },
  "driveway-cleaning": {
    heroDescription:
      "Professional stump grinding to remove unwanted stumps below ground level and make your garden or site easier to use.",
    whyChoose: {
      title: "Why Choose Our Stump Grinding?",
      points: [
        {
          title: "Reclaim Space",
          description:
            "Grinding removes the visible stump so the area can be replanted, landscaped or returned to lawn.",
        },
        {
          title: "Prevents Regrowth",
          description:
            "Removing the stump below ground level helps reduce unwanted regrowth and trip hazards.",
        },
        {
          title: "Efficient Equipment",
          description:
            "We use suitable stump grinding equipment for domestic gardens, driveways and commercial spaces.",
        },
      ],
    },
    processSteps: [
      { title: "Check the stump", description: "We assess stump size, access and nearby obstacles before work begins." },
      { title: "Grind below ground", description: "The stump is ground down to a practical depth for the intended finish." },
      { title: "Leave tidy", description: "Arisings can be left as mulch or removed by arrangement." },
    ],
    faqs: [
      { question: "How deep do you grind a stump?", answer: "Depth depends on what the area will be used for. We normally grind below ground level enough for soil, turf or landscaping." },
      { question: "Will stump grinding remove the roots?", answer: "Stump grinding removes the main stump and surface roots where accessible, but it does not excavate the full root system." },
      { question: "Can you grind stumps in back gardens?", answer: "Often yes, provided there is suitable access for the grinder. Send photos and access details and we can confirm." },
    ],
  },
  "gutter-cleaning": {
    heroDescription:
      "Hedge cutting and maintenance to keep boundaries neat, healthy and manageable throughout the year.",
    whyChoose: {
      title: "Why Choose Our Hedge Cutting?",
      points: [
        {
          title: "Neat Finish",
          description:
            "We trim and shape hedges to keep gardens, driveways and boundaries looking tidy.",
        },
        {
          title: "Healthy Growth",
          description:
            "Regular maintenance helps keep hedges dense, manageable and in better condition.",
        },
        {
          title: "Domestic and Commercial",
          description:
            "We work on garden hedges, boundary hedges and larger maintenance jobs across the local area.",
        },
      ],
    },
    processSteps: [
      { title: "Agree the finish", description: "We confirm the height, shape and level of maintenance you want." },
      { title: "Cut and shape", description: "Hedges are trimmed using suitable equipment and safe working methods." },
      { title: "Clear clippings", description: "Cuttings can be cleared from site or left for composting if preferred." },
    ],
    faqs: [
      { question: "When should hedges be cut?", answer: "Most hedges benefit from trimming once or twice a year. Timing can depend on species, nesting birds and how formal you want the hedge to look." },
      { question: "Can you reduce the height of a tall hedge?", answer: "Yes, where it is safe and practical. We can advise on what reduction is suitable for the hedge." },
      { question: "Do you take away hedge cuttings?", answer: "Yes. We can remove cuttings from site or leave them with you if you prefer." },
    ],
  },
  "pvc-white-cleaning": {
    heroDescription:
      "24 hour emergency tree work for storm-damaged, fallen or hazardous trees that need urgent attention.",
    whyChoose: {
      title: "Why Choose Our Emergency Tree Work?",
      points: [
        {
          title: "Rapid Response",
          description:
            "Call 07860 203475 for urgent help with dangerous, fallen or storm-damaged trees.",
        },
        {
          title: "Make Safe First",
          description:
            "The priority is to make the area safe and prevent further damage where possible.",
        },
        {
          title: "Experienced Under Pressure",
          description:
            "We are used to dealing with hazardous tree work and difficult access safely and methodically.",
        },
      ],
    },
    processSteps: [
      { title: "Call immediately", description: "Phone 07860 203475 and explain what has happened, where the tree is and whether anything is blocked or damaged." },
      { title: "Assess and make safe", description: "We assess the hazard and carry out urgent work to make the site safe." },
      { title: "Clear or schedule follow-up", description: "Where possible we clear the tree, or arrange follow-up work if further dismantling is needed." },
    ],
    faqs: [
      { question: "What counts as emergency tree work?", answer: "A fallen tree, storm-damaged limbs, a tree blocking access, or any tree that poses an immediate risk to people, property or roads." },
      { question: "Are you available out of hours?", answer: "Yes. We offer 24 hour emergency tree work. Call 07860 203475 for urgent assistance." },
      { question: "Can you help after storm damage?", answer: "Yes. We can make storm-damaged trees safe and remove fallen branches or trees where access allows." },
    ],
  },
  "window-cleaning": {
    heroDescription:
      "Safe removal of fallen, storm-damaged or hazardous trees from gardens, driveways, roadsides and commercial properties.",
    whyChoose: {
      title: "Why Choose Our Fallen Tree Removal?",
      points: [
        {
          title: "Safe Clearance",
          description:
            "We remove fallen trees carefully, especially where they are resting on fences, sheds, vehicles or buildings.",
        },
        {
          title: "Access Restored",
          description:
            "Fallen trees can block driveways, paths and access routes. We work to clear the obstruction efficiently.",
        },
        {
          title: "Waste Managed",
          description:
            "Timber and branches can be removed, cut into logs, chipped or left on site depending on your preference.",
        },
      ],
    },
    processSteps: [
      { title: "Send details", description: "Call or message with photos, location and whether the tree is causing damage or blocking access." },
      { title: "Cut and clear", description: "The fallen tree is cut into manageable sections and removed safely." },
      { title: "Final tidy", description: "We clear the immediate work area and deal with arisings as agreed." },
    ],
    faqs: [
      { question: "Can you remove a tree that has fallen onto a fence or shed?", answer: "Yes. We can assess the loading and remove it carefully to reduce further damage where possible." },
      { question: "Do you clear all the branches?", answer: "Yes. We can clear branches and logs from site, or leave logs for firewood if you want to keep them." },
      { question: "Is fallen tree removal an emergency?", answer: "It can be if the tree blocks access, damages property or creates a safety risk. Call 07860 203475 if it is urgent." },
    ],
  },
};

export function getServiceDetail(serviceSlug: string): ServiceDetailContent | undefined {
  return serviceDetails[serviceSlug];
}
