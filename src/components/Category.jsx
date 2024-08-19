import Button from "@/microcomponents/Button";
import Image from "next/image";
import Link from "next/link";

const Category = ({ data }) => {
  const { homeCategorySubtitle, homeCategoryTitle, categories } = data;

  return (
    <section className="flex flex-col gap-4 mt-20 px-20" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-medium">{homeCategorySubtitle}</h4>

        <div className="flex items-center gap-4">
          <h2 className="lg:text-3xl text-xl md:text-2xl font-bold max-w-[60%] capitalize">
            {homeCategoryTitle}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative">
          <Link href={categories[0].link}>
            <Image
              src={categories[0].image.node.sourceUrl}
              alt="category"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              objectFit="cover"
            />
          </Link>
          <div className="absolute bottom-0 left-0 z-10 bg-[#FF911999] p-4 w-full backdrop-filter backdrop-blur-md text-white flex items-center justify-between">
            <p className="text-white text-lg lg:text-xl font-semibold">
              {categories[0].title}
            </p>
            <Button href="#" className="hover:text-[#FF911999] text-sm md:text-lg lg:text-xl">
              Read More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-full">
          {categories.slice(1, 5).map(({ title, link, image }, index) => (
            <Link href={link} className="relative hover:bg-[#FF911999]" key={index}>
              <Image
                src={image.node.sourceUrl}
                alt="category"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 z-10 h-20 hover:bg-[#FF911999] hover:backdrop-filter hover:backdrop-blur-md p-4 w-full text-white flex items-center justify-between">
              <p className="absolute bottom-4 left-4 text-white text-lg lg:text-xl  font-semibold">
                {title}
              </p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
