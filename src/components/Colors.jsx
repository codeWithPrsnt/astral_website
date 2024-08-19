import Image from "next/image";

const Colors = ({ data }) => {
  const { homeColoursButton, homeColoursSubtitle, homeColoursTitle } = data;

  return (
    <section className="flex flex-col mt-20 px-20" data-aos="fade-up">
      <div className="flex flex-col gap-4 ">
        <h4 className="text-lg font-medium">{homeColoursSubtitle}</h4>

        <div className="flex items-center gap-4">
          <h2 className="lg:text-3xl text-xl md:text-2xl font-bold w-fit capitalize">
            {homeColoursTitle}
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

      <div className="flex flex-row scroll-hi overflow-scroll no-scrollbar pb-10 gap-8">
        <ColorCard backgroundColor="#FAE0B2" />
        <ColorCard backgroundColor="#FBC9C3" />
        <ColorCard backgroundColor="#00C1DE" />
        <ColorCard backgroundColor="#0060AF" />
        <ColorCard backgroundColor="#800404" />
        <ColorCard backgroundColor="#ECA628" />
      </div>
    </section>
  );
};

export default Colors;

const ColorCard = ({ backgroundColor }) => {
  return (
    <div className="flex flex-col min-w-48 min-h-36 items-center gap-4 p-6 hover:shadow-2xl rounded-[20px] group">
      <div className="text-center opacity-0 group-hover:opacity-100">Astral Paints</div>
      <div
        className="w-full h-[160px]"
        style={{
          backgroundColor,
          outline: `${backgroundColor} solid 10px`,
          border: "1px solid white",
        }}
      ></div>

      <p>Color Name</p>
      <p className="text-sm text-[#656565]">Color Code</p>
    </div>
  );
};
