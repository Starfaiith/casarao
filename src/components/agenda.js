import logo from '../code.jfif';
const agenda = () => {


    return(
        <section id="agenda">
        <div class="agendas container">
            <div class="agenda-header">
                <h1 class="oficina-title">Agenda de <span>Eventos</span></h1>
            </div>
            <div class="allprojects">
                
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            
            </div>
        </div>
    </section>
    )
}


const ProjectItem = () => {

    return (
        <div class="project-item">
            <div class="project-info">
                <h1>Evento 1</h1>
                <h2>30/06</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris odio, feugiat a eleifend
                    quis, commodo quis neque. Ut rutrum rhoncus lacus sed luctus. Etiam vestibulum nunc risus,
                    eget pulvinar tellus dignissim eget.
                    </p>
            </div>
            <div class="project-img">
            <img src={logo}alt="project img" />
            </div>
        </div>
            
    )
}

export default agenda;