const Image = ({ source, altText, width, imgWidth, classes }) => {
    return<>
        <div style={{width:width}} className={classes}>
            <img src={source} alt={altText} className="w-full " />
        </div>
    </>
}

export default Image