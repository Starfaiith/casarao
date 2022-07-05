import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acervo from "../pages/acervo"

const hero = () => {



    return (
        <section id="hero">
        <div className="hero container">
            <div>
                <h1>Casarão<span></span></h1>
                <h1>Vila Guilherme<span></span></h1>
                <RouteIndexButton />
            </div>
        </div>
    </section>
    )
}

const RouteIndexButton = () => {

    return(

        <Router>
            <Link to="../pages/Acervo"> <IndexButton /></Link>
            <Routes>
                <Route exact path="../pages/acervo" element={<Acervo />} />
            </Routes>
        </Router>
    )
}

const IndexButton = () => {

    return(

            <a href={Acervo} type="button" className="cta">Acervo</ a>

    )
}

export default hero;
