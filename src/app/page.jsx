import ImageSliders from '../../components/ImageSlider';
import TestIndicators from '../../components/test';
import Button from '../../components/button';
import "tailwindcss/tailwind.css"


export default function Home() {
  const images = [
  { URL: '/images/image1.svg' },
  { URL: '/images/image2.svg' },
  { URL: '/images/image3.svg' },
  { URL: '/images/Cone1.svg' },
  { URL: '/images/Cone2.svg' },
  { URL: '/images/Cone23.svg' },
  { URL: '/images/Vector1.svg' },

  ];

  return (
    <div className=" min-h-screen max-w-[1440px]">
  

    {/* Main content */}
    <h1 className="relative left-[200px] text-6xl font-bold mb-4">About Us</h1>
    <div className="relative left-[200px] pt-0 pb-4 pl-0 pr-30 rounded-md shadow-sm w-1/2 h-full">
      <p className="text-left text-[13px] font-arial text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae inventore asperiores ducimus, ipsam cupiditate quisquam optio officia tenetur culpa, illo similique voluptates totam, at nihil delectus ab hic explicabo earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>

    <div className="relative left-[200px] flex justify-start pt-4">
      <Button className="text-white border border-white rounded-[12px] hover:bg-gray-100 px-4 py-2"/>
    </div>

    


    <div className="relative pt-16 max-w-[1440px] max-h-[1000px] items-start overflow-visible ">

    <div className="relative top-[60px]"> 
      <ImageSliders className="relative" />
    </div>

        <div className="absolute  top-[40px] -z-10  w-[1440px] h-[800px] ">
      <img
        src="/images/Vector1.svg"
        alt="Image"
        className=" object-cover overflow-visible"
      />
    </div>
      
    
      <div className="absolute  w-[230px] h-[140px] top-[460px] left-[1000px] bg-white/10 backdrop-blur-xs pl-4 pt-4 pb-4 rounded-lg overflow-visible ">
        <p className=" pr-4 pb-4 text-left w-[230px] text-[13px] font-arial text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae inventore asperiores ducimus, ipsam cupiditate quisquam optio officia tenetur culpa,
        </p>
      </div>

      


      <div className=" absolute top-[340px] left-[620px] overflow-visible  -z-10" >
        <img
          src="/images/Cone1.svg"
          alt="Image"
          className="w-[85%] h-[85%] object-cover"
        />
      </div>

      <div className=" absolute top-[240px] left-[800px] overflow-visible -z-10"  >
        <img
          src="/images/Cone2.svg"
          alt="Image"
          className="w-[85%] h-[85%] object-cover"
        />
      </div>

      <div className=" absolute top-[175px] left-[980px] overflow-visible  -z-10" >
        <img
          src="/images/Cone3.svg"
          alt="Image"
          className="w-[300px] h-[300px] object-cover"
        />
      </div>

     


      <div className=" absolute  w-[230px] h-[140px] top-[240px] left-[650px] overflow-visible">
        <h1 className="text-center text-2.5xl font-bold font-arial text-white text-colour from-blue-500 via-purple-500 to-pink-500 p-8">
            10+<br />
          Ventures
        </h1>
      </div>

      <div className="absolute  w-[260px] h-[133px] top-[175px] left-[825px] overflow-visible">
        <h1 className="text-center text-2.5xl font-bold font-arial text-white">
          500+<br />
          Members
        </h1>
      </div>

      <div className="absolute  w-[400px] h-[133px] top-[110px] left-[975px] overflow-visible">
        <h1 className="text-center text-2.5xl font-bold font-arial text-white">
          300K+ in<br />
          seed funding
        </h1>
      </div>
    </div>


  </div>
  
  );
}