import React from 'react'
import { Link } from "gatsby"

export default () => {

    return (
        <div className='bg-ui-light text-[#515151] flex justify-center'>
            <nav className='flex items-center justify-between font-thin text-[12px] leading-[20px]'>
                <Link to='/'><span className='pr-[10px]'>HOME</span></Link>
                <span className='px-[10px]'>DOG BEDS</span>
                <span className='px-[10px]'>COVERS & KITS</span>
                <span className='px-[10px]'>SIZE GUIDE</span>
                <span className='px-[10px]'>SHIPPING</span>
                <span className='px-[10px]'>CARE & WASHING</span>
                <span className='px-[10px]'>REVIEWS</span>
                <span className='px-[10px]'>VIDEOS</span>
                <span className='px-[10px]'>FAQS</span>
                <span className='px-[10px]'>OUR STORY</span>
                <span className='pl-[10px]'>CONTACT</span>
            </nav>
        </div>
    )
}

