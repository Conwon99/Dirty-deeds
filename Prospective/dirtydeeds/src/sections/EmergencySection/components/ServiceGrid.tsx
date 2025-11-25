import type { LucideIcon } from "lucide-react";
import {
  Brush,
  ChevronRight,
  Droplets,
  Leaf,
  Package,
  Trash2,
  Waves,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: ServiceItem[] = [
  {
    title: "Driveway & Patio Cleaning",
    description:
      "Restore block paving, concrete, and stone with powerful jet washing that lifts moss, oil, and grime.",
    Icon: Waves,
  },
  {
    title: "Decking & Wall Cleaning",
    description:
      "Soft- and pressure-wash options tailored to timber, render, and brick for a refreshed finish.",
    Icon: Brush,
  },
  {
    title: "Gutter & Fascia Cleaning",
    description:
      "Clear debris, brighten fascias, and prevent water damage with eco-friendly cleaning methods.",
    Icon: Droplets,
  },
  {
    title: "Garden Tidy-Ups",
    description:
      "Sweep, clear, and refresh outdoor areas so families, pets, and guests can enjoy every corner.",
    Icon: Leaf,
  },
  {
    title: "Waste Removal & Uplifts",
    description:
      "Responsible disposal for green waste, bulky items, and load-outs with peace of mind guaranteed.",
    Icon: Trash2,
  },
  {
    title: "Appliance Removals",
    description:
      "Lift and haul unwanted appliances for recycling or safe disposal—no heavy lifting needed from you.",
    Icon: Package,
  },
];

export const ServiceGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid grid-cols-[1fr] max-w-[1200px] gap-y-[30px] mb-20 mx-auto sm:grid-cols-[repeat(2,1fr)] md:gap-x-[30px] md:grid-cols-[repeat(3,1fr)] md:gap-y-10">
      {services.map(({ title, description, Icon }) => (
        <a
          key={title}
          href="https://www.facebook.com/profile.php?id=100090370285579"
          className="bg-white shadow-[rgb(0,0,0)_10px_10px_0px_0px] box-border caret-transparent block text-center overflow-hidden px-[15px] py-5 rounded-[15px] md:px-5 md:py-[30px] hover:shadow-[rgb(0,0,0)_15px_15px_0px_0px]"
        >
          <Icon
            className="mx-auto mb-5 h-[76px] w-[76px] text-orange-500"
            aria-hidden="true"
          />
          <h3 className="text-[32px] box-border caret-transparent leading-9 uppercase mb-[15px] font-bebas_neue md:text-[44px] md:leading-[45px]">
            {title}
          </h3>
          <p className="text-sm font-medium box-border caret-transparent leading-5 max-w-[260px] mb-[15px] mx-auto md:text-base md:leading-[22px]">
            {description}
          </p>
          <div className="items-center box-border caret-transparent flex justify-center opacity-70 mt-2.5">
            <ChevronRight className="h-5 w-5 text-stone-900" aria-hidden="true" />
          </div>
        </a>
      ))}
    </div>
  );
};
