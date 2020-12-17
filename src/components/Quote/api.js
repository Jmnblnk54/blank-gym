// import { render } from "@testing-library/react";
import * as axios from "axios";
import React from 'react';
import "./quote.css";


    // const api = {
    // // method: 'GET',
    // url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
    // params: {id: '731', t: 'Wisdom', maxR: '1', size: 'medium'},
    // headers: {
    //     'x-rapidapi-key': '3d890c64e6msh679b155ac4c06f7p1ba7fajsnbb29913a85ff',
    //     'x-rapidapi-host': 'healthruwords.p.rapidapi.com'
    // }
    // };

    // axios.request(api).then(function (response) {
	//     console.log(response.data);
    // }).catch(function (error) {
	//     console.error(error);
    // });
    


export default class Api extends React.Component {
    state = {
        quote: ""
    }
    async componentDidMount() {
        await axios.get('https://healthruwords.p.rapidapi.com/v1/quotes/',
            {
                headers: {
                'x-rapidapi-key': '3d890c64e6msh679b155ac4c06f7p1ba7fajsnbb29913a85ff',
                'x-rapidapi-host': 'healthruwords.p.rapidapi.com'
                }
            }
            
        ).then(res => {
            console.log(res);
            this.setState({quote: res.data[0]});
            console.log(this.state.quote);
        }) 
    }
    render() {
        return (
            <div>
                <img src = { this.state.quote.media } alt = "motivational img" className = "quoteText"/>
            </div>
        )
    }
}