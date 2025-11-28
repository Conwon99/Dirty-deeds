import { ProjectCard } from "@/pages/projects/sections/ProjectsGrid/components/ProjectCard";

export const ProjectsGrid = () => {
  return (
    <section className="box-border caret-transparent pb-[70px] md:pb-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
          <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[28.8px] mb-[30px] sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
            Fencing Projects
          </h3>
          <div
            role="list"
            className="box-border caret-transparent gap-x-10 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px]"
          >
            <ProjectCard
              href="/project/wooden-gate-and-fencing"
              imageUrl="/projects/project-1.jpg"
              imageAlt="Wooden Gate and Fencing"
              imageClassName="transform-none md:scale-[1.00989px]"
              location="Ayrshire"
              title="Wooden Gate and Fencing"
            />
            <ProjectCard
              href="/project/fencing-project-two"
              imageUrl="/projects/project-2.jpg"
              imageAlt="Fencing Project Two"
              location="Ayrshire"
              title="Fencing Project Two"
            />
            <ProjectCard
              href="/project/wooden-fencing"
              imageUrl="/projects/project-3.jpg"
              imageAlt="Wooden Fencing"
              location="Ayrshire"
              title="Wooden Fencing"
            />
          </div>
        </div>
        <div className="box-border caret-transparent mt-[50px] md:mt-[70px]">
          <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[28.8px] mb-[30px] sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
            Decking Projects
          </h3>
          <div
            role="list"
            className="box-border caret-transparent gap-x-10 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px]"
          >
            <ProjectCard
              href="/project/decking-project-four"
              imageUrl="/projects/project-4.jpg"
              imageAlt="Decking Project Four"
              location="Ayrshire"
              title="Decking Project Four"
            />
            <ProjectCard
              href="/project/decking-project-five"
              imageUrl="/projects/project-5.jpg"
              imageAlt="Decking Project Five"
              location="Ayrshire"
              title="Decking Project Five"
            />
            <ProjectCard
              href="/project/decking-project-six"
              imageUrl="/projects/project-6.jpg"
              imageAlt="Decking Project Six"
              location="Ayrshire"
              title="Decking Project Six"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

