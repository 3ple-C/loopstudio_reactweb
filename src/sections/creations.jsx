
import { Button } from '../components';

// Images
import {
    earth,
    nightArcade,
    pocket,
    soccer,
    curiosity,
    fisheye,
    above,
    grid,
    hero,

    earth2,
    nightArcade2,
    pocket2,
    soccer2,
    curiosity2,
    fisheye2,
    above2,
    grid2,
    hero2
} from '../lib'

const images = [
    {key:'img', src: earth, src2: earth2, alt: 'item', text: 'Deep Earth' },
    {key:'img', src: nightArcade, src2: nightArcade2, alt: 'item', text: 'Night Arcade' },
    {key:'img', src: pocket, src2: pocket2, alt: 'item', text: 'Pocket' },
    {key:'img', src: soccer, src2: soccer2, alt: 'item', text: 'Soccer' },
    {key:'img', src: curiosity, src2: curiosity2, alt: 'item', text: 'Curiosity' },
    {key:'img', src: fisheye, src2: fisheye2, alt: 'item', text: 'Fisheye' },
    {key:'img', src: above, src2: above2, alt: 'item', text: 'Above' },
    {key:'img', src: grid, src2: grid2, alt: 'item', text: 'Grid' }
];

const imageItems = images.map((image, i) =>

    <picture key={image.key+i}
        className='relative after:content-[""] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-gradient-to-tr from-[rgba(0,0,0,.2)] to-[rgba(0,0,0,.2)]'
    >
        <source srcSet={image.src2} media="(max-width: 540px)" />
        <img src={image.src} alt="MDN" />
        <p className=' absolute bottom-4 left-[22px] text-white md:text-5xl'>{image.text}</p>
    </picture>
)

const Creation = () => {
    return <>
        <section className='mt-16 px-6  md:px-0 md:mt-40 md:mb-40 relative'>
            <h1 className='text-3xl align-end mb-4 h-fit md:text-5xl md:mb-0 uppercase text-black'>Our Creations</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-[26px] md:gap-[30px] md:mt-16 flex-wrap '>
                {imageItems}
            </div>

            <Button text='See All' classes={'text-white my-8 inline-block md:my-0 md:block bg-black h-fit py-3 px-12 md:absolute md:top-0 md:right-0'} />
        </section>
    </>
}

export default Creation;