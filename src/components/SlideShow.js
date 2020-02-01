import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'
import '../css/SlideShow.css'
import img1 from '../images/img1.jpg'
import img3 from '../images/img3.jpg'
import sshow1 from '../images/slideshow/slideshow1.jpg'
import sshow2 from '../images/slideshow//slideshow2.JPG'
import sshow3 from '../images/slideshow/newone.jpg'
import sshow4 from '../images/slideshow/IMG-20181208-WA0002.jpg'
import sshow5 from '../images/slideshow/sshow6.jpg'
import sshow8 from '../images/slideshow/sshow8.jpg'
import sshow6 from '../images/slideshow/sshow7.jpg'
import sshow9 from '../images/slideshow/sshow9.jpg'
import { TimelineLite, Back } from "gsap/TweenMax"


export default class SlideShow extends Component {
    componentDidMount() {
        let tl = new TimelineLite()

        tl.from('.abt-me-txt', 1, { opacity: 0, y: '200px', ease: Back.easeOut.config(1.7) }) 
        tl.from('.abt-me-data', 1   , { opacity: 0, y: '200px', ease: Back.easeOut.config(1.7)})
        tl.from('.slider', 1, { opacity: 0, y: '200px', ease: Back.easeOut.config(1.7) })
    }

    render() { 
        const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
        }

        //SLIDESHOW WITH react-slideshow-image
        return (
            <div className='slider'>
                <Slide {...properties}>
                    <div className="each-slide">
                        <div>
                            <img src={sshow1} alt='' ></img>
                            <img src={sshow4} alt='' ></img>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img3} alt=''></img>
                            <img src={img1} alt=''></img>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={sshow9} alt=''></img>
                            <img src={sshow2} alt=''></img>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={sshow6} alt=''></img>
                            <img src={sshow3} alt=''></img> 
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={sshow8} alt=''></img>
                            <img src={sshow5} alt=''></img>
                        </div>
                    </div>
                </Slide>
            </div>
        )
         
    }
}

