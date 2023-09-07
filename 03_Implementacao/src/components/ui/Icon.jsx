import "./Icon.scss"

const Icon = ({img, ...rest}) => {
    return (
        <div className={"img-icon"} {...rest}>
            <img src={img}/>
        </div>
    )
}

export default Icon;
