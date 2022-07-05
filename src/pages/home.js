//components

import Hero from '../components/hero';
import Oficinas from '../components/oficinas';
import Agenda from '../components/agenda';
import Sobre from '../components/sobre';
import SobreInv from '../components/sobreInv';
import Contatos from '../components/contatos';
import Footer from '../components/footer';


import React from 'react'

const home = () => {
  return (
    <div>
        <Hero />
        <Oficinas />
        <Agenda />
        <Sobre />
        <SobreInv />
        <Contatos />
        <Footer />
    </div>
  )
}

export default home