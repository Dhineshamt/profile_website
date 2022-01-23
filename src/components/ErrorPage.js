// export const ErrorPage = () => {
//     return (
//         <div>Page Not Found</div>
//     )
// }

import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorPage extends Component {
    render() {
        return (
            <>
                <div>Error page</div>
                <Link to="/home">Go to Home</Link>
            </>
        )
    }
}