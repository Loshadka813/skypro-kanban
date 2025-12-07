const Loader = ({ width, height = 13, borderRadius = 0 }) => {
    return (
        <div
            className="loader"
            style={{
                width: width ? width + "px" : "auto",
                height: height + "px",
                borderRadius: borderRadius + "px"
            }}
        ></div >
    )
}
export default Loader;