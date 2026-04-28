import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        imageAlt="Request a tree work quote"
        title="01. Tell us what you need."
        description="Get in touch with a few details about the tree, hedge or site concern. We'll listen, ask the right questions and arrange a visit or quote at a time that suits you."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        imageAlt="Tree surgeon site assessment"
        title="02. We assess the work."
        description="We'll check access, risks, tree condition and the best method for the job. You'll get clear advice before any pruning, dismantling, stump grinding or emergency work begins."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
        imageAlt="Safe tree work completion"
        title="03. We complete it safely."
        description="Our team carries out the agreed work with care for your property, neighbours and surroundings. We tidy up before leaving and make sure you're happy with the finished result."
      />
    </div>
  );
};
