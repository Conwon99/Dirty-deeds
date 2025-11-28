import { DetailItem } from "@/pages/project/sections/Hero/components/DetailItem";

interface ProjectDetailsProps {
  slug?: string;
}

export const ProjectDetails = ({ slug }: ProjectDetailsProps) => {
  const isDecking = slug?.includes("decking");
  const category = isDecking ? "Decking Services" : "Fencing Services";
  
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 mb-5 md:gap-x-[30px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[30px] md:mb-10">
      <DetailItem label="Category:" value={category} />
      <DetailItem label="Location:" value="Ayrshire" />
      <DetailItem label="Date:" value="December 24, 2024" />
    </div>
  );
};
