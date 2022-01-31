import CertificationContainer from './CertificationContainer'

export const Certification = () => {
    return (
        <>
            <div className='grid-container'>
                <div className="cert-img"><img className="cert-image" src={require('../images/AWS.png')}></img></div>
                <div className="cert-title">AWS Certified Solutions Associate</div>
                <div className="cert-desc">Description</div>
                <div className="cert-date">Certified Year: 2021</div>
            </div>

            <div className='grid-container'>
                <div className="cert-img"><img className="cert-image" src={require('../images/Java.png')}></img></div>
                <div className="cert-title">Oracle Certified Associate Developer</div>
                <div className="cert-desc">Description</div>
                <div className="cert-date">Certified Year: 2020</div>
            </div>

            <CertificationContainer title="AWS Certified Solutions Associate" year="2021" desc="AWS" image-name="AWS"/>

        </>
    )
}