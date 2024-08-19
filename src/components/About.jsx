import Button from "@/microcomponents/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = ({ data }) => {
  const {
    homeAboutSubtitle,
    homeAboutTitle,
    homeAboutDescription,
    homeAboutButton: { url, title },
    homeAboutVideoImage,
  } = data;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between -mt-2 px-20" data-aos="fade-up">
      <div className="flex flex-col gap-4 lg:w-[60%] w-full lg:self-center self-end p-5 ">
        <h4 className="text-lg font-medium lg:mt-8 mt-5 ">
          {homeAboutSubtitle}
        </h4>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold w-fit capitalize">
            {homeAboutTitle}
          </h2>
          <Image
            src="/red-spreaded-line.svg"
            alt="about"
            width={100}
            height={100}
            className="w-[40%]"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: homeAboutDescription }}
          className="flex flex-col gap-2 text-[#656565] text-base font-normal"
        ></div>

        <Button
          href={url}
          style={{
            border: "1px solid #E70000",
          }}
          textColor="text-[#E70000]"
          className="mt-4"
        >
          {title}
        </Button>
      </div>

      <Image
        src={homeAboutVideoImage.node.sourceUrl}
        alt="about"
        width={0}
        height={0}
        sizes="100vw"
        className="lg:w-[40%] w-full"
      />
    </section>
  );
};

export default About;
