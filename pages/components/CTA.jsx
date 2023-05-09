import React from 'react';
import emailSvg from "/email.svg";
import phoneSvg from "/phone.svg";

export default function CTA() {
    return (
        <div className="w-full h-12 text-secondary flex justify-center">
            <div className="inline-flex items-center justify-end font-header h-full w-full hover:[&>span]:bg-secondary hover:[&>span]:text-primary [&>span]:h-full [&>span]:px-5 [&>*]:transition-all [&>*]:ease-in-out">
                <div className="inline-flex items-center h-full text-xl tracking-wider uppercase font-header-medium mr-4"><span>Contact us today!</span></div>
                <span className="font-header-medium">
                    <a href="#" className="inline-flex items-center h-full w-full">305-458-0000</a>
                    </span>
                <span className="font-header-medium">
                    <a href="#" className="inline-flex items-center h-full w-full">info@rcms.com</a>
                    </span>
            </div>
        </div>
    )
}
