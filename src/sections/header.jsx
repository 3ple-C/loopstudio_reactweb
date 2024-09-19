
import { Navbar } from '../components';
import '../assets/css/header.css';

const Header = () => {

    return(
        <>
            <div className="header relative h-screen bg-no-repeat bg-cover bg-top px-[10%]">
                <Navbar />
                <div className="border lg:w-fit pl-5 absolute top-[50%] translate-y-[-50%] pr-16 py-3">
                    <h1 className='uppercase text-[200%] md:text-[350%]'>
                        Immersive <br /> Experiences <br /> That Deliver
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Header;