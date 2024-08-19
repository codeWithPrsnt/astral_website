import Button from "@/microcomponents/Button";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: function (currentSlide, nextSlide) {
      setCurrentSlide(nextSlide);
    },
    afterChange: function (currentSlide) {},
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} className="w-full" ref={sliderRef}>
        {data.map(
          (
            {
              bannerImage,
              bannersTitle,
              bannerDescription,
              bannerButton: { url, title },
            },
            index
          ) => (
            <div key={index} className="relative">
              <Image
                src={bannerImage.node.sourceUrl}
                alt={bannersTitle}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100vw" }}
              />

              <div className="absolute z-[2] top-[15%] lg:top-[35%] left-20 text-white flex flex-col gap-6">
                <h2 className="text-3xl lg:text-6xl font-bold w-[5ch] lg:w-[10ch]">{bannersTitle}</h2>
                <p className="text-base italic">{bannerDescription}</p>
                <Button href={url} textColor="text-[#5E4D7A]">
                  {title}
                </Button>
              </div>
            </div>
          )
        )}
      </Slider>

      <div className="absolute z-[2] top-[35%] right-20 flex flex-col gap-2">
        {data.map((_, i) => (
          <li
            className="bg-white list-none w-[5px] h-8 rounded-xl cursor-pointer"
            onClick={() => sliderRef.current.slickGoTo(i)}
            style={{
              opacity: currentSlide === i ? 1 : 0.5,
            }}
            key={i}
          ></li>
        ))}
      </div>
      <div className="absolute w-full h-24 lg:h-48 z-20" >
      <Image
        src="/rainbow.svg"
        alt="rainbow"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto',marginTop:'-30%' }}
      />
      </div>
    </div>
  );
};

export default Hero;
