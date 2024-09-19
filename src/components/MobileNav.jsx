
import Link from "./link";

const MobileNav = ({ isNavbarOpen, toggleNavbarOpen }) => {
    return <>
        <div className="block sm:hidden relative">
            <button
                onClick={toggleNavbarOpen}
                className="z-2 relative"
                aria-label="Toggle navigation menu"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className={`
                fixed top-0 right-0 h-full w-4/5 max-w-xs bg-black
                transform transition-transform duration-700 ease-in-out
                ${isNavbarOpen ? 'translate-x-full' : 'translate-x-0'}
                flex flex-col items-center justify-center
                z-10
            `}>
                <button
                    onClick={toggleNavbarOpen}
                    className="absolute top-4 right-4"
                    aria-label="Close navigation menu"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <ul className="flex flex-col items-center gap-6">
                    <li><Link text='Home' /></li>
                    <li><Link text='Careers' /></li>
                    <li><Link text='Events' /></li>
                    <li><Link text='Products' /></li>
                    <li><Link text='Support' /></li>
                </ul>
            </nav>
        </div>
    </>
};

export default MobileNav;