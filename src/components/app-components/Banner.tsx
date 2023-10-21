interface Props {
    paragraph:string;
    title:string;
    button: {
        text:string;
        onClick:boolean;
    }
}

const Banner = (props: Props) => {
    return(
        <div className="Banner-BgImg">
            <div className="text-sec">
                <span>{props.paragraph}</span>
                <h3>{props.title}</h3>
                <button
                    className="btn bgSecondary"
                    onClick={() => {
                        if (props.button.onClick) {
                            console.log('Button clicked');
                        }
                    }}
                >
                    {props.button.text}
                </button>
            </div>
        </div>
    )
}

export default Banner