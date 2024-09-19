
import { Link } from "../components";

const Footer = () => {
    return(
        <>
            <footer className="bg-black  py-20 md:py-6">
                <div className="mx-auto flex justify-between space-y-12 md:space-y-0 flex-col items-center md:w-[75%] md:flex-row">
                    <div className="flex flex-col space-y-6 md:space-y-3">
                        <h1 className="text-2xl">loopstudio</h1>

                        <ul className="flex flex-col justify-center gap-6 md:flex-row">
                            <li><Link text='Home' /></li>
                            <li><Link text='Careers' /></li>
                            <li><Link text='Events' /></li>
                            <li><Link text='Products' /></li>
                            <li><Link text='Support' /></li>
                        </ul>
                    </div>

                    <div className="text-end space-y-4 flex flex-col">
                        <ul className="flex gap-6 justify-center md:justify-end">
                            <li><Link element={<i className="fa-brands fa-instagram"></i>} /></li>
                            <li><Link element={<i className="fa-brands fa-facebook"></i>}/></li>
                            <li><Link element={<i className="fa-brands fa-x-twitter"></i>} /></li>
                            <li><Link element={<i className="fa-brands fa-pinterest"></i>} /></li>
                        </ul>
                        <p >@2021 Loopstudios. All Rights Reserved.</p>
                    </div>
                </div>
                
            </footer>
        </>
    )
}

export default Footer;