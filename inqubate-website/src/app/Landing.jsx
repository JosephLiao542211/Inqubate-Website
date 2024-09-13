import Image from "next/image"
import Navigation from "./Navigation"

export default function Landing(){
    return (
        <>
            <nav className="px-20 py-6 flex">
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
            className="absolute -z-50 top-0"
            />
            <Image
            src="blue-gradient.svg"
            width={1000}
            height={700}
            alt="blue gradient"
            className="absolute -z-50 right-0"
            />
        </>
    )
}