import Image from "next/image"
import Navigation from "./Navigation"

export default function Landing(){
    return (
        <>
        <img src="landing-morph-lines.svg" alt="webs" className="-z-50 absolute" />
            <nav className="px-20 py-6 flex bg-none">
                <Image src="inqubate.svg" alt="inqubate" width={250} height={250} className=""/>
                <div className="grow flex gap-5 justify-center">
                    <Navigation href="#home">Home</Navigation>
                    <Navigation href="#who-we-are">Who we are</Navigation>
                    <Navigation href="#ventures">Ventures</Navigation>
                    <Navigation href="#blog">Blog</Navigation>
                </div>
                <a
                href="#contact-us"
                className="w-48 rounded-md text-center px-6 py-4 bg-gradient-to-r from-red-500 to-pink-700 shadow-[2px_5px_20px_grey] hover:-translate-y-1 transition-transform">
                    Contact Us
                </a>
            </nav>
            <Image
            src="tube.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            alt="tube"
            className="absolute -z-10"
            />
            <Image
            src="red-gradient.svg"
            width={900}
            height={700}
            alt="red gradient"
            className="absolute -z-30 top-0"
            />
            <Image
            src="blue-gradient.svg"
            width={1000}
            height={700}
            alt="blue gradient"
            className="absolute -z-30 right-0 top-0"
            />
            <div className="flex h-[80vh] items-center justify-around">
                <div>
                <h1 className="font-bold text-6xl w-96 leading-snug">
                    Queen&apos;s <br/> #1 Incubator
                </h1>
                <p>🚀 Innovate, Collaborate, & Succeed</p>
                </div>
                <div className="grow-1 flex flex-col gap-16">
                    <Image src="innovate.svg" width={500} height={500} alt="INNOVATE"/>
                    <Image src="disrupt.svg" width={500} height={500} alt="DISRUPT"/>
                    <Image src="create.svg" width={500} height={500} alt="CREATE"/>
                </div>
            </div>
        </>
    )
}