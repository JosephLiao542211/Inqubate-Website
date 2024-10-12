'use client'

import Image from 'next/image'
import { useEffect,} from 'react'
import Parallax from 'parallax-js';

export default function Tube(){
    // useEffect(()=>{
    //     const container = document.querySelector('.tube-container');
    //     const parralaxInstance = new Parallax(container);
    //     console.log("Parallax instance", parralaxInstance);
    // }, [])

    return (
        <div className='absolute -z-10 tube-container'>
            <Image
            src="tube.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            alt="tube"
            data-depth="-0.05"
            />
        </div>
    )
}