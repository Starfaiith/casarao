import React from 'react'

const oficinas = () => {

    return (
    <section id="oficinas">
        <div className="oficinas container">
            <div className="oficina-top">
                <h1 className="oficina-title">Ofic<span>i</span>nas</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum aliquam,
                    tortor neque consequat nibh, vitae convallis justo nisi fermentum arcu. Aliquam posuere molestie
                    facilisis. Duis porttitor lectus non ullamcorper sodales. Donec ornare posuere lectus a venenatis.
                    Aliquam pellentesque efficitur consequat. Donec mauris metus, eleifend quis elit et, iaculis
                    scelerisque magna. Etiam euismod elementum fermentum. Vivamus ac mi dolor. Nulla in consectetur
                    nibh. Pellentesque mollis erat at lectus dictum, id tincidunt libero porta!</p>
            </div>
            <div className="oficina-bottom">
                <Oficinaitem />
                <Oficinaitem />
                <Oficinaitem />
                <Oficinaitem />
            </div>
        </div>
    </section>
    )
}

const Oficinaitem = () => {

    return(
    <div className="oficina-item">
            <div className='icon'>
                <img src="https://img.icons8.com/bubbles/50/000000/gear.png" alt='gear img' />
            </div>
            <h2>Oficinas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum
                aliquam,
                tortor neque consequat nibh, vitae convallis justo nisi fermentum arcu.</p>
    </div>
    )}

export default oficinas;