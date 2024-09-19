
const Link = (props) => {
    const { text, element, click } = props

    return (
        <>
            <a href="" 
                className=" relative after:block after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:w-[50%] hover:after:border-2 after:transition after:duration-1000 after:ease-in-out  hover:after:border-solid hover:after:border-white "

                onClick={click}
            >
                {text ? text : element}
            </a>
        </>
    );
}

export default Link;