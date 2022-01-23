import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div>
                        <div className="footer-info-title">Phone</div>
                        <div>9944991706</div>
                    </div>
                    <div>
                        <div className="footer-info-title">Email</div>
                        <div>dhineshamt@gmail.com</div>
                    </div>
                    <div>
                        <div className="footer-info-title">Follow Me</div>
                        <div>dhinesh@linkedin</div>
                    </div>
                    <div>
                        <button className="download-button">Download Profile</button>
                    </div>
                </div>
            </>
        )
    }
}