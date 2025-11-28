import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white box-border caret-transparent py-[50px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our projects
          </h2>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[50px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[50px] md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px] lg:grid-cols-[1fr_1fr_1fr]">
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-1.jpg"
              imageAlt="Fencing Project One"
              location="Ayrshire"
              title="Fencing Project One"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-2.jpg"
              imageAlt="Fencing Project Two"
              location="Ayrshire"
              title="Fencing Project Two"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-3.jpg"
              imageAlt="Fencing Project Three"
              location="Ayrshire"
              title="Fencing Project Three"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-4.jpg"
              imageAlt="Decking Project Four"
              location="Ayrshire"
              title="Decking Project Four"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-5.jpg"
              imageAlt="Decking Project Five"
              location="Ayrshire"
              title="Decking Project Five"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
          <div
            role="listitem"
            className="box-border caret-transparent shrink-0"
          >
            <ProjectCard
              href="/projects"
              imageUrl="/projects/project-6.jpg"
              imageAlt="Decking Project Six"
              location="Ayrshire"
              title="Decking Project Six"
              locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              locationIconAlt=""
              shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
              shapeIconAlt="Shape 03"
            />
          </div>
        </div>
        <div className="box-border caret-transparent text-center mt-[60px] mx-auto">
          <a
            href="/projects"
            className="text-gray-900 text-sm font-bold bg-orange-500 box-border caret-transparent inline-block leading-[19.6px] border border-orange-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:decoration-transparent"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};
