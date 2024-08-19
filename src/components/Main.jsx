import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Category from "./Category";
import Services from "./Services";
import Colors from "./Colors";
import BecomeADealer from "./BecomeADealer";
import Blogs from "./Blogs";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Main = ({ homepageData }) => {
  console.log("homeData", homepageData);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <main className={`w-full ${poppins.className}`}>
        <Hero data={homepageData?.pages?.nodes[0]?.homepage?.banners} />
        <About data={homepageData?.pages?.nodes[0]?.homepage} />
        <Category data={homepageData?.pages?.nodes[0]?.homepage} />
        <Services data={homepageData?.pages?.nodes[0]?.homepage} />
        <Colors data={homepageData?.pages?.nodes[0]?.homepage} />
        <BecomeADealer data={homepageData?.pages?.nodes[0]?.homepage} />
        <Blogs
          data={homepageData?.pages?.nodes[0]?.homepage}
          blogs={homepageData?.blogs}
        />
      </main>
      <Footer />
    </>
  );
};

export default Main;
