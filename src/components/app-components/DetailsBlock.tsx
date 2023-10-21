interface PropType {
    title:string;
    mainTitle:string;
    paragraph:string;
    image:string;
}


const DetailsBlock = (props: PropType) =>{
    return(
        <div className="DetailsBlock">
        <div className="wrap-80">
        <div className="Left-Side">
                <span className="about">{props.title}</span>
                <h3 className="mainTitle">{props.mainTitle}</h3>
                <p>{props.paragraph}</p>
                <p>{props.paragraph}</p>
            </div>
            <div className="Right-side">
                <img src={props.image} alt="" />
            </div>
        </div>
        </div>
    )
}

export default DetailsBlock
