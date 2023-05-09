import React from 'react';
import CTA from './CTA';

export default function Nav() {
    return (
        <>
        <CTA />
        <nav className={`mt-12 fixed flex-col top-0 min-w-screen w-full inline-flex justify-center min-h-[100px] max-h-[100px] h-[100px] font-header`}>
            <div className="inline-flex justify-between w-full h-full items-center self-center px-4 md:px-12 overflow-hidden">
                <img className="h-full py-5" src="/rclark_logo2b.png" />
                <div className="inline-flex gap-8 items-center">
                    <a href="#">Why Us?</a>
                    <a href="#">Our Services</a>
                    <button className="bg-primary text-secondary rounded-full px-5 py-2">
                        <a href="#">Contact Us</a>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}
