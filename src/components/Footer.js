import { render } from "@testing-library/react";


const Footer = (props) => {
    return(
        <div>
            <footer className="footer text-center">
                <small className="text-muted m-0 small">© Copyright { (new Date()).getFullYear() }</small>
            </footer>
        </div>
    );
}

export default Footer;