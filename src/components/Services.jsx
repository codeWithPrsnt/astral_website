import Button from "@/microcomponents/Button";
import Image from "next/image";

const Services = ({ data }) => {
  const { homeServicesSubtitle, homeServicesTitle } = data;

  return (
    <section className="flex flex-col gap-4 mt-20 px-20" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-medium">{homeServicesSubtitle}</h4>

        <div className="flex items-center gap-4">
          <h2 className="lg:text-3xl text-xl md:text-2xl font-bold w-fit capitalize">
            {homeServicesTitle}
          </h2>
          <Image
            src="/red-spreaded-line.svg"
            alt="about"
            width={100}
            height={100}
            className="w-[40%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImageComponent
          src="/services-1.png"
          alt="services"
          title="Wall Painting"
          subTitle="Lorem ipsum dolor sit amet consectetur."
        />
        <ImageComponent
          src="/services-2.png"
          alt="services"
          title="Water Solution"
          subTitle="Lorem ipsum dolor sit amet consectetur."
        />
        <ImageComponent
          src="/services-3.png"
          alt="services"
          title="Painting"
          subTitle="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
    </section>
  );
};

export default Services;

const ImageComponent = ({ src, alt, title, subTitle }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
      <div className="flex flex-col gap-2 absolute bottom-0 left-0 bg-[#FFE71099] backdrop-filter backdrop-blur-md p-4 w-full">
        <p className="text-sm md:text-lg lg:text-xl font-semibold line-clamp-1">{title}</p>
        <p className="line-clamp-1">{subTitle}</p>
        <Button href="#" textColor="black" className="hover:text-[#FF911999] text-sm md:text-lg lg:text-xl line-clamp-1">
          Read More
        </Button>
      </div>
    </div>
  );
};
