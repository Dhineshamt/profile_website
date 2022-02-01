import CertificationContainer from './CertificationContainer'

export const Certification = () => {
    const awsObject = {
        title: 'AWS Certified Solutions Architect Associate',
        year: 2021,
        desc: "AWS",
        imgName: 'AWS'
    }

    const javaObject = {
        title: 'Oracle Certified Java Associate Developer',
        year: 2020,
        desc: "Java",
        imgName: 'Java'
    }
    return (
        <>
            <CertificationContainer {...awsObject} />
            <CertificationContainer {...javaObject}/>
        </>
    )
}