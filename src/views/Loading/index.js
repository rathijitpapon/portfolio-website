import React, { Component } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
// import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

import "./styles.css";

class Loading extends Component {


    state = {
        redirect: false,
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 1500);

        /*
        ReactGa.initialize(process.env.REACT_APP_GA_KEY);
        ReactGa.pageview(process.env.REACT_APP_DOMAIN_NAME + '- Loading Screen');
        */
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Routes> <Route path="*" element={<Navigate replace to="/home"/>} /></Routes>
            : 
            (
                <div>
                    <Helmet>
                            <meta charSet="utf-8" />
                            <title>Rathijit Paul</title>
                            <link rel="canonical" href={process.env.REACT_APP_DOMAIN_NAME} />
                            <meta name="description" content="Rathijit Paul | Full Stack Software Developer" />
                    </Helmet>

                    <div className="loadingHeader">
                        <PuffLoader
                            size={'45vw'}
                            color={"#fff"}
                            loading={true}
                        />
                    </div>
                </div>
            )
    }
}

export default Loading;