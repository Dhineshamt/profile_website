import CertificationContainer from './CertificationContainer';
import javaImg from '../images/Java.png';
import AWSImg from '../images/AWS.png';

export const Certification = () => {
    const certObject = [{
        title: 'AWS Certified Solutions Architect Associate',
        year: 2021,
        desc: "AWS",
        logo: AWSImg
    },
    {
        title: 'Oracle Certified Java Associate Developer',
        year: 2020,
        desc: "Java",
        logo: javaImg
    }
    ]

    return (
        <>{
            certObject.map((data, key) => {
                return <CertificationContainer {...data} />
            })
        }
        </>
    )
}