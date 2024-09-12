import Image from "next/image"
import Navigation from "./Navigation"

export default function Landing(){
    return (
        <>
            <nav className="px-20 py-6 flex">
                <Image src="inqubate.svg" alt="inqubate" width={250} height={250} className=""/>
                <div className="grow flex gap-10 justify-center">
                    <Navigation href="#home">Home</Navigation>
                    <Navigation href="#who-we-are">Who we are</Navigation>
                    <Navigation href="#ventures">Ventures</Navigation>
                    <Navigation href="#blog">Blog</Navigation>
                </div>
                <a href="#contact-us" className="">Contact us</a>
            </nav>
            <Image
            src="tube.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            alt="tube"
            className="absolute"
            />
            <Image
            src="red-gradient.svg"
            width={900}
            height={700}
            alt="red gradient"
            className="absolute -z-10 top-0"
            />
            <Image
            src="blue-gradient.svg"
            width={1000}
            height={700}
            alt="blue gradient"
            className="absolute -z-10 right-0"
            />
        </>
    )
}