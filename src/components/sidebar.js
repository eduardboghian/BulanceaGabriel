import React, { Component } from 'react'
import  gbpic from '../images/backgroundGB.jpg'
import '../css/sidebar.css'
import googleSchool from '../images/google-scholar-logo.png'
import academiaEdu from '../images/academia .edu.png'
import ScrollMagic from 'scrollmagic'
import { TimelineLite } from "gsap/TweenMax"

export default class Sidebar extends Component {
    constructor() {
        super()
        this.state= {
            isExtended: false
        }
    }

    handleToggle(e) {
        e.preventDefault(e)
        this.setState({
            isExtended: !this.state.isExtended
        })
    }

    componentDidMount() {
        let tl = new TimelineLite()
        tl.from('#sidebar', 2, { opacity: 0, top: '-800px' })

        const scene = new ScrollMagic.Scene({
            triggerElement: '#sidebar'
        })

        window.addEventListener('click', (event)=>{
            if( this.state.isExtended && event.x > 320 && event.y > 70){
                this.setState({
                    isExtended: !this.state.isExtended
                })
            }
        }) 
    }
    
    render() {
        const {isExtended} = this.state
        return (
            <div className="sidebar-wrapper">
                <div className="mobile-bar">
                    <h1>Bulancea Gabriel</h1>
                    <div className="container" onClick={ e => this.handleToggle(e)}>
                        <div className={`bar1 ${isExtended ? 'changebar1' : ''}`}></div>
                        <div className={`bar2 ${isExtended ? 'changebar2' : ''}`}></div>
                        <div className={`bar3 ${isExtended ? 'changebar3' : ''}`}></div>
                    </div>
                </div>
                <div className={ `sidebar ${isExtended ? 'show-sidebar' : 'hide-sidebar'}`} id='sidebar'>
                    <div className='gbpic-cont'><img src={gbpic} alt='' className='gbpic'></img></div>
                    <h2>Bulancea Gabriel</h2>
                    <ul className='menu'>
                        <li><a href='#home'>HOME</a></li>
                        <li className='research-sidebar-btn'><a href='#research'>RESEARCH</a>
                            <ul className='sub-research'>
                                <li><a href="#books">Books</a></li>
                                <li><a href="#isi">Publoshed in ISI</a></li>
                                <li><a href="#bdi">Published in BDI</a></li>
                                <li><a href="#cncsis">Published in C.N.C.S.I.S</a></li>
                            </ul>
                        </li>
                        <li><a href='#artistic-activity'>ARTISTIC ACTIVITY</a></li>
                        <li><a href='#about'>ABOUT</a></li>
                    </ul>
                    <div className='footer'>
                        <ul>
                            <li><a href='https://www.facebook.com/bulancea.gabriel'><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href='http://gabrielbulancea.academia.edu/'><img src= {academiaEdu} className='fab academia-edu' alt=''></img></a></li>
                            <li><a href='https://www.linkedin.com/in/gabriel-bulancea-1982b563/'><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href='https://scholar.google.ro/citations?user=mLlEUesAAAAJ&hl=en'><img src= {googleSchool} className='fab google-scholar' alt=''></img></a></li>
                            <li><a href='https://www.youtube.com/channel/UCBkd-c3uUz-jHIEbAitFJXQ'><i className="fab fa-youtube"></i></a></li>
                        </ul>
                        <h3 className='copyright'>© 2019 by JohnnyCode</h3>   
                    </div>   
                
                </div>
            </div>
            
        )
    }
}
