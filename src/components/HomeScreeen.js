import React, { Component } from 'react'
import Slideshow from './SlideShow'
import '../css/HomeScreen.css'

export default class HomeScreeen extends Component {
    render() {
        return (
            <div className='home-screen' id='home'>
                <Slideshow />
                <p className='abt-me'>ABOUT ME</p>
                <div className='wrapper'>
                    <div className='abt-me-txt'> 
                        <p> ''Dr. Prof. Bulancea Gabriel is a university professor at the Faculty of Arts of the "Dunărea de Jos" University Galati where, since 200, he teaches Music History, Aesthetics, and Folklor to the students. Since 1998, he is a classical guitar teacher within the art highschool 'D.Cuclin'. Gabriel graduated art university 'George Enescu' Iasi in 1998.  He also became a member of  The Union of Composers and Musicologists of Romania.  In 2004 he created the musical ensemble PSALTERION witch he leads even today in diverse classical music recitals''<br/> <br/> <b>Angela Ribinciuc - Viata Libera</b>
                        </p>
                    </div>
                    
                     <ul className='abt-me-data'>
                         <h2 className='mobule-txt'>General Info:</h2>
                        <li>Name: <span>Bulancea Gabriel</span></li>
                        <li>Mail: <span>bulancea_gabriel@yahoo.com</span></li>
                        <li>Degree: <span>Doctor</span></li>
                        <li>Profession: <span>University Professor</span></li>
                        <li>Birthday: <span>07.16.1974</span></li>
                        <li>Linkedin: <span>/bulanceagabriel</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
