import { DetailItem } from "@/pages/project/sections/Hero/components/DetailItem";

export const ProjectDetails = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 mb-5 md:gap-x-[30px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[30px] md:mb-10">
      <DetailItem label="Category:" value="Fencing Services" />
      <DetailItem label="Location:" value="Ayrshire" />
      <DetailItem label="Date:" value="December 24, 2024" />
    </div>
  );
};
