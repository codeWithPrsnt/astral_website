import Button from "@/microcomponents/Button";

const BecomeADealer = ({ data }) => {
  const {
    homeJoinBackgroundImage,
    homeJoinButton: { url, title },
    homeJoinDescription,
    homeJoinSubtitle,
    homeJoinTitle,
  } = data;

  return (
    <section
      style={{
        backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
      }}
      className="h-[350px] text-white flex flex-col items-center justify-center gap-4 bg-cover bg-center mt-20"
       data-aos="fade-up"
    >
      <p className="text-lg font-medium">{homeJoinSubtitle}</p>
      <p className="text-3xl font-bold">{homeJoinTitle}</p>
      <div
        dangerouslySetInnerHTML={{ __html: homeJoinDescription }}
        className="flex flex-col gap-2 text-white text-base font-normal text-center w-[60ch]"
      ></div>
      <Button href={url}>{title}</Button>
    </section>
  );
};

export default BecomeADealer;
