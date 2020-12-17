import React, {Component} from 'react';
import { Quote, Author } from "./quoteArray";
import "./quote.css";



class RenderedQuote extends Component {
    render() {
        return (
            <div className ="col-sm-auto offset-sm-1" >
                <h3>Motivational Quote</h3>
                <h3>{Quote}</h3>
                <h4 className = "author">{Author}</h4>

            </div>
        )
    }
}

export default RenderedQuote;