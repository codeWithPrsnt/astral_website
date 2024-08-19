import Image from "next/image";
import Link from "next/link";

const Blogs = ({ data, blogs }) => {
  const { blogSubtitle, blogTitle } = data;

  return (
    <section className="flex flex-col gap-4 my-20 px-20" data-aos="fade-up">
      <div className="flex flex-col gap-4 w-[50%]">
        <h4 className="text-lg font-medium">{blogSubtitle}</h4>

        <div className="flex items-center gap-4">
          <h2 className="lg:text-3xl text-xl md:text-2xl font-bold w-fit capitalize">{blogTitle}</h2>
          <Image
            src="/red-spreaded-line.svg"
            alt="about"
            width={100}
            height={100}
            className="w-[40%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {blogs.nodes.map(({ date, slug, title, featuredImage }, index) => (
          <Link
            href={slug}
            style={{
              backgroundImage: `url(${featuredImage.node.sourceUrl})`,
            }}
            className="h-[200px] bg-cover bg-center flex flex-col items-start justify-end p-4 text-white gap-4"
            key={index}
          >
            <p className="italic font-medium">{new Date(date).toISOString().split('T')[0]}</p>
            <p className="text-xl font-semibold">{title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
