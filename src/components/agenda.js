import React from 'react'
import logo from '../assets/code.jfif';
const agenda = () => {


    return(
        <section id="agenda">
        <div className="agendas container">
            <div className="agenda-header">
                <h1 className="oficina-title">Agenda de <span>Eventos</span></h1>
            </div>
            <div className="allprojects">
                
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
        <div className="project-item">
            <div className="project-info">
                <h1>Evento 1</h1>
                <h2>30/06</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris odio, feugiat a eleifend
                    quis, commodo quis neque. Ut rutrum rhoncus lacus sed luctus. Etiam vestibulum nunc risus,
                    eget pulvinar tellus dignissim eget.
                    </p>
            </div>
            <div className="project-img">
            <img src={logo} alt="project" />
            </div>
        </div>
            
    )
}

export default agenda;