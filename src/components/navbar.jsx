
import { MobileNav,Link } from '../components';

// Use state
import { useState } from "react";

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const toggleNavbarOpen = () => setIsNavbarOpen((state) => !state)

    return <>
        <div className="flex items-center  justify-between py-5 overflow-hidden">
            <h1 className="text-2xl">loopstudio</h1>

            <ul className="hidden top-0 sm:flex gap-6">
                <li><Link text='Home' /></li>
                <li><Link text='Careers' /></li>
                <li><Link text='Events' /></li>
                <li><Link text='Products' /></li>
                <li><Link text='Support' /></li>
            </ul>

            <MobileNav isNavbarOpen={isNavbarOpen} toggleNavbarOpen={toggleNavbarOpen}/>
        </div>
    </>
}

export default Navbar;