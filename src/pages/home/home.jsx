import '../../App.css';

import React from "react";
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Home = () => {

    return (
        <>
            <Header />

            <main className="py-5 text-center container">
                <h2 className="">Welcome to Eugene's Corner.</h2>
 				<h3 className="">A place for software developers infected with the AI bug.</h3>
            </main>
            
            <Footer />
        </>
    )
}