import React from 'react'

const contatos = () => {
return (
<section id="contact">
<div className="contato container">
    <div>
        <h1 className="oficina-title">Cont<span>a</span>to </h1>
    </div>

    <div className="contact-items">
        <div className="contact-item">
            <div className='icon'><img src="https://img.icons8.com/bubbles/100/000000/apple-phone.png" alt='phone' /></div>
            <div className="contact-info">
                <h1>Telefone</h1>
                <h2>+55 XX XXXXX-XXXX</h2>
                <h2>+55 XX XXXXX-XXXX</h2>
            </div>
        </div>
        <div className="contact-item">
            <div className='icon'><img src="https://img.icons8.com/bubbles/100/000000/sent.png" alt='sent' /></div>
            <div className="contact-info">
                <h1>Email</h1>
                <h2>xxxxxxx@xxxxx.com</h2>
                <h2>xxxxxxx@xxxxx.com</h2>
            </div>
        </div>
        <div className="contact-item">
            <div className='icon'><img src="https://img.icons8.com/bubbles/100/000000/map-pin.png" alt='gps' /></div>
            <div className="contact-info">
                <h1>Localização</h1>
                <h2>Praça Oscar Silva, Vila Guilherme</h2>
                <h2>Brasil, São Paulo</h2>
            </div>
        </div>
    </div>
</div>
</section>
)
}


export default contatos;