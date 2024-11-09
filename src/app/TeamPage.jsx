import Navigation from "./Navigation";
import Image from "next/image";
import TeamSlider from "./components/TeamSlider";

export default function Team() {
  return (
    <div className="mb-36">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="landing-morph-lines.svg"
        alt="webs"
        className="-z-50 absolute w-full"
      />
      <nav className="px-48 py-6 flex bg-none">
        <Image
          src="inqubate.svg"
          alt="inqubate"
          width={250}
          height={250}
          className=""
        />
        <div className="grow flex gap-5 justify-center">
          <Navigation href="#home">Home</Navigation>
          <Navigation href="#about">Who we are</Navigation>
          <Navigation href="#about">Ventures</Navigation>
          <Navigation href="#contact">Blog</Navigation>
        </div>
        <a
          href="#contact"
          className="w-48 rounded-md text-center px-6 py-4 bg-gradient-to-r from-red-500 to-pink-700 shadow-[2px_5px_20px_grey] hover:-translate-y-1 transition-transform"
        >
          Contact Us
        </a>
      </nav>

      <Image
        src="red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-[800px]"
      />
      <Image
        src="blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0"
      />

      <div className="flex flex-col ml-80 mt-20">
        <h1 className="text-6xl font-bold ml-10 mb-4">Our Team</h1>
        <p className="mb-8 ml-10 mt-6 font-thin">
          Indulge in the ultimate expression of sophistication with Luxe
          Reserve, <br />
          where every sip embodies the essence of luxury. Indulge in the <br />
          ultimate expression of sophistication ..
        </p>
      </div>

      <div className="mt-6">
        <TeamSlider />
      </div>
    </div>
  );
}
