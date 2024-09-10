import FeatureCard from "@/components/atom/cards/feature-card";
import application from "@/assets/application.svg";
import governance from "@/assets/goverance.svg";
import funding from "@/assets/funding.svg";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Application",
      description:
        "Seamlessly apply for education loans and grants using our user-friendly platform",
      buttonText: "Apply",
      imageSrc: application,
      altText: "Application Image",
    },
    {
      id: 2,
      title: "Governance",
      description:
        "The community votes on loan and grant proposals, ensuring transparency and fairness.",
      buttonText: "Join DAO",
      imageSrc: governance,
      altText: "Governance Image",
    },
    {
      id: 3,
      title: "Funding",
      description:
        "Receive funding through our decentralized, transparent, and community-driven platform.",
      buttonText: "Funding",
      imageSrc: funding,
      altText: "Funding Image",
    },
  ];

  return (
    <section className="relative grid gap-6 py-16 px-8 bg-gray-50">
      <div className="md:col-span-2 flex flex-col justify-center items-start p-6 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Educational Loans and grants at your fingertips
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gpa-x-4 lg:gap-x-[68px] gap-y-4 lg:gap-y-[68px] mt-[1rem] mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex justify-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-4rem)]"
          >
            <FeatureCard key={feature.id} {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
