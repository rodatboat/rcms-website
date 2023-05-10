import React from 'react';
import emailSvg from "/email.svg";
import phoneSvg from "/phone.svg";

export default function CTA() {
    return (
        <div className="w-full h-16 md:h-10 text-secondary bg-white md:bg-white/0 fixed md:relative bottom-0 md:bottom-auto md:flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-end font-header h-full w-full">
                <div className="inline-flex items-center h-full tracking-wider text-lg uppercase font-header-medium mr-4"><span>Contact us today!</span></div>
                <div className='inline-flex h-full hover:[&>span]:bg-primary hover:[&>span]:text-secondary [&>span]:h-full [&>span]:px-5 [&>*]:transition-all [&>*]:ease-in-out'>
                <span className="font-header-medium">
                    <a href="tel:+13054582987" className="inline-flex items-center h-full w-full">305-458-0000</a>
                    </span>
                <span className="font-header-medium">
                    <a href="mailto:info@rcms.com" className="inline-flex items-center h-full w-full">info@rcms.com</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
