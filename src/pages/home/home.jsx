import '../../App.css';

import React from "react";
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Home = () => {

    return (
        <>
            <Header />
            <main className="inner cover">
                <h2 className="">Welcome to Eugene's Corner.</h2>
 				<h3 className="">A place for software developers infected with machine learning.</h3>
            </main>
            <Footer />
        </>
    )
}