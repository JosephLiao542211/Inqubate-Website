import ImageSliders from './components/ImageSlider';
import Button from './components/button';
import 'tailwindcss/tailwind.css';

const About = () => {
    const images = [
        { URL: '/images/inqubate_photo.png' },
        { URL: '/images/image2.png' },
        { URL: '/images/image4.png' },
        { URL: '/images/Cone1.svg' },
        { URL: '/images/Cone2.svg' },
        { URL: '/images/Cone23.svg' },
        { URL: '/images/Vector1.svg' },
        { URL: '/images/Vector0.svg' },
    ];

    return (
        <div className=" min-h-screen mb-36 overflow-hidden">
            {/* Main about US top section */}
            <h1
                className="relative max-w-[1000px] left-[180px] text-6xl font-bold mb-4"
                id="about"
            >
                About Us
            </h1>
            <div className="relative left-[180px] pt-0 pb-4 pl-0 pr-30 rounded-md shadow-sm w-1/2 h-full">
                <p className="text-left text-[13px] font-arial text-white">
                    inQUbate is the premier product-incubator at Queen&apos;s
                    University, dedicated to developing the next generation of
                    innovators. inQUbate has grown to a community of 50+
                    entrepreneurial-minded members with over 20+ ventures.
                </p>
            </div>

            <div className="absolute max-w-[1000px] left-[180px] flex justify-start pt-4 overflow-visible z-10 ">
                <Button />
            </div>

            {/*Bottom sections */}

            <div className="relative pt-16 right-[0px] bottom-[-20px] max-w-[1536px]  items-start  ">
                {/*image slider */}

                <div className="absolute top-[115px] left-[-20px]  ">
                    <div className="absolute left-[194px] bottom-[187px]  w-[397px] h-[517px] bg-white/30 backdrop-lg pl-4 pt-4 pb-4 rounded-[15px] "></div>
                    <ImageSliders className="relative" />
                </div>

                {/*vector on the background*/}
                <div className="absolute  left-[425px] top-[-400px] z-2  w-[1000px] h-[800px] ">
                    <img
                        src="/images/Vector0.svg"
                        alt="Image"
                        className=" object-cover brightness-115"
                    />
                </div>

                {/*vector on the background*/}
                <div className="absolute  top-[15px] -z-10  w-[1536px] h-[710px] ">
                    <img
                        src="/images/Vector 11.svg"
                        alt="Image"
                        className=" object-cover w-[1536px] h-[715px]"
                    />
                </div>

                {/*text over lay on the sides*/}
                <div className="flex justify-center items-center absolute  w-[240px] z-30 h-[190px] top-[425px] left-[1025px] bg-white/10 backdrop-blur-sm pl-4 pt-4 pb-4 rounded-[20px] overflow-visible ">
                    <p className=" pr-4 pb-4 text-left w-[230px] text-[14px] font-arial text-white">
                        Each of our ventures are supported through our dedicated
                        team of executives, ensuring ventures have access to
                        funding, mentorship, and external opportunities.
                    </p>
                </div>

                {/*cone images on the side*/}
                <div className=" absolute top-[335px] left-[575px]  z-10">
                    <img
                        src="/images/Cone1.svg"
                        alt="Image"
                        className="w-[300px] h-[300px] object-cover"
                    />
                </div>

                <div className=" absolute top-[255px] left-[810px] z-10">
                    <img
                        src="/images/Cone2.svg"
                        alt="Image"
                        className="w-[310px] h-[310px] object-cover"
                    />
                </div>

                <div className=" absolute top-[155px] left-[1010px]  z-10">
                    <img
                        src="/images/Cone3.svg"
                        alt="Image"
                        className="w-[220%] h-[220%] object-cover"
                    />
                </div>

                {/*Words on top of the cones*/}

                <div className="absolute w-[230px] h-[140px] top-[228px] left-[655px] overflow-visible">
                    <h1 className="text-center text-4xl font-bold font-arial text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[#FF7A85] p-8">
                        10+
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-[#FF7A85]">
                            Ventures
                        </span>
                    </h1>
                </div>

                <div className="absolute  w-[260px] h-[133px] top-[173px] left-[864px] overflow-visible">
                    <h1 className="text-center text-4xl font-bold font-arial text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8132B1] via-white/70 p">
                        50+
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-[#8132B1] via-white/80">
                            Members
                        </span>
                    </h1>
                </div>

                <div className="absolute  w-[400px] h-[133px] top-[90px] left-[1040px] overflow-visible">
                    <h1 className="text-center text-4xl font-bold font-arial text-white">
                        100K+ in
                        <br />
                        seed funding
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;
