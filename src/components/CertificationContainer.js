import { Fragment } from "react/cjs/react.production.min";

const CertificationContainer = (props) => {
    return (
        <Fragment>
            <div className='grid-container'>
                <Fragment>
                    {
                        (() => {
                            return imgPicker(props.imgName);
                        }
                        )()
                    }
                </Fragment>
                <div className="cert-title">{props.title}</div>
                <div className="cert-desc">Description: {props.desc}</div>
                <div className="cert-date">Certified Year: {props.year}</div>
            </div>
        </Fragment>
    )
}

const imgPicker = (imgName) => {
    if (imgName === 'AWS') {
        return (
            <div className="cert-img"><img className="cert-image" src={require('../images/AWS.png')}></img></div>
        )
    }
    else if (imgName === "Java") {
        return (
            <div className="cert-img"><img className="cert-image" src={require('../images/Java.png')}></img></div>
        )
    }
}

export default CertificationContainer;