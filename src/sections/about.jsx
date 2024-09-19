
import { Image } from '../components';

// Images
import AboutImg from '../assets/desktop/image-interactive.jpg';
import AboutImg2 from '../assets/mobile/image-interactive.jpg'

const About = () => {
    const screenWidth = window.innerWidth
    return <>
        <section className='relative px-6 mt-16 md:mt-40 md:px-0 md:flex'>
            <Image source={screenWidth >= '480px' ? AboutImg : AboutImg2} altText='About Image' classes='md:w-[60%]'/>

            <div className='text-black pt-10 md:absolute md:w-[50%] md:pt-20 md:pl-20 bottom-[-10%] right-[0%] bg-white'>
                <h1 className='text-3xl mb-4 md:text-5xl md:mb-7 uppercase text-black'>The Leader In Interactive VR</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque hic, nam libero nobis corrupti iste iusto vel culpa fugiat? Harum tempora impedit consectetur ex atque ullam amet provident quos illo!</p>
            </div>
        </section>
    </>
}

export default About;