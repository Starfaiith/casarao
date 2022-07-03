import logo from '../casarao-bg.jpg'

const sobreInv = () => {
    return (
        <section id="about">
        <div class="about-inverted container">
            <div class="col-left-inverted">
                <div class="about-img-inverted">
                    <img src={logo} alt="Imagem 2" />
                </div>
            </div>
            <div class="col-right-inverted">
                <h1 class="oficina-title">H<span>istória</span></h1>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>consectetur adipiscing elit. Cras mauris odio, feugiat a eleifend
                    quis, commodo quis neque. Ut rutrum rhoncus lacus sed luctus. Etiam vestibulum nunc risus,
                    eget pulvinar tellus dignissim eget, vitae convallis justo nisi fermentum arcu. Aliquam posuere
                    molestie
                    facilisis. Duis porttitor lectus non ullamcorper sodales. Donec ornare posuere lectus a venenatis.
                    Aliquam pellentesque efficitur consequat. Donec mauris metus, eleifend quis elit et, iaculis
                    scelerisque magna. Etiam euismod elementum fermentum. Vivamus ac mi dolor. Nulla in consectetur
                    nibh. Pellentesque mollis erat at lectus dictum.</p>

            </div>
        </div>
    </section>
    )
}

export default sobreInv