import { Fragment } from "react/cjs/react.production.min";

const CertificationContainer = (props) => {
    return (
        <Fragment>
            <div className='grid-container'>
                <div className="cert-img"><img className="cert-image" src={props.logo}></img></div>
                <div className="cert-title">{props.title}</div>
                <div className="cert-desc">Description: {props.desc}</div>
                <div className="cert-date">Certified Year: {props.year}</div>
            </div>
        </Fragment>
    )
}

export default CertificationContainer;
