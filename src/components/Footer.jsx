import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div
        style={{ backgroundImage: "url(/footer-background.png)" }}
        className="text-white px-20 p-10 flex flex-col items-center gap-12 bg-cover bg-no-repeat"
      >
        <p className="text-3xl font-bold">Group Company</p>

        <div className="flex items-center overflow-scroll no-scrollbar justify-between gap-4">
          {[
            "company-icon-1.svg",
            "company-icon-2.svg",
            "company-icon-3.svg",
            "company-icon-4.svg",
            "company-icon-5.svg",
          ].map((icon, index) => (
            <Image key={index} src={`/${icon}`} alt="company icon" />
          ))}
        </div>

        <span className="h-[1px] w-full bg-white"></span>

        <div className="flex items-center justify-between gap-20">
          <div className="flex flex-col gap-4 w-[40%]">
            <Image src="/logo.svg" alt="logo" className="w-[200px]" />

            <div className="flex flex-col gap-4">
              <p className="font-bold text-[#EEDCB2]">Reach Us</p>

              <ContactItem
                icon="location-icon.svg"
                text="#417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058"
              />
              <ContactItem
                icon="phone-icon.svg"
                text="+91 &#8209; 80 &#8209; 42552555"
              />
              <ContactItem icon="phone-icon.svg" text="info@gem-paints.com" />
            </div>
          </div>

          <div className="flex flex-col gap-16 w-[60%]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[#EEDCB2] capitalize">
                  Sign up to our newsletter
                </p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <div
                className="bg-transparent rounded-full pl-8 py-4 flex items-center justify-between w-[300px] lg:w-[400px] relative"
                style={{ border: "1px solid white" }}
              >
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-transparent outline-none text-white"
                />
                <button className="bg-[#0060AF] p-2 px-8 rounded-full w-fit h-[110%] absolute -right-[4px]">
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4">
              {["About", "Category", "Services", "Downloads"].map(
                (section, index) => (
                  <FooterSection
                    key={index}
                    title={section}
                    items={footerItems[section]}
                  />
                )
              )}
              <div className="flex flex-col gap-4 col-start-4">
                <div className="flex gap-4">
                  {[
                    "facebook.svg",
                    "instagram.svg",
                    "youtube.svg",
                    "twitter.svg",
                  ].map((icon, index) => (
                    <Image
                      key={index}
                      src={`/${icon}`}
                      alt={`${icon.split(".")[0]} icon`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0060AF] flex items-center justify-between w-full p-4 px-20 text-white">
        <p>Terms & Conditions</p>
        <p>ALL RIGHTS RESERVED</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <Image src={`/${icon}`} alt="icon" />
    <p className="text-xs">{text}</p>
  </div>
);

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <p className="font-bold text-[#EEDCB2]">{title}</p>
    {items.map((item, index) => (
      <p key={index} className={item.bold ? "font-bold text-[#EEDCB2]" : ""}>
        {item.text}
      </p>
    ))}
  </div>
);

const footerItems = {
  About: [
    { text: "About astrals" },
    { text: "paint journey" },
    { text: "Group Companies" },
  ],
  Category: [
    { text: "interior paints" },
    { text: "exterior paints" },
    { text: "undercoats" },
    { text: "painting tools" },
    { text: "water proofing" },
  ],
  Services: [
    { text: "wall painting" },
    { text: "water Solution" },
    { text: "painting" },
    { text: "colour shades" },
  ],
  Downloads: [
    { text: "Become a dealer", bold: true },
    { text: "Blogs", bold: true },
    { text: "Contact", bold: true },
  ],
};

export default Footer;
