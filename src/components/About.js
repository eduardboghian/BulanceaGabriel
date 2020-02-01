import React, { Component } from 'react'
import '../css/About.css'

export default class About extends Component {
    render() {
        return (
            <div className='about-screen' id='about'>
                
                <div className="about-wr">
                    <h1 className='about-title'>About</h1>
                    <p>Gabriel Bulancea, university professor at the Faculty of Arts of the "Dunărea de Jos" University Galati, where he teaches music history and aesthetics. After a successful doctorate with the thesis "Creative and aesthetic thinking of Claude Debussy", Gabriel Bulancea, whose professional career is divided between concert, didactic and research, shows concerns in the field of musical modalities, in the history of arts and aesthetics. . He is a member of the Union of Romanian Composers and Musicologists, being permanently dedicated to the teaching profession, as one of the promoters of the Danube artistic education. To the question: what kind of man are you ?, Gabriel Bulancea responds modestly: "I am a man in search of artistic sincerity, sometimes cramped too much in tradition, I am a neo-classical lost in a post-modern world, I like art, philosophy , spiritualities of all kinds, especially the Christian one, I like flowers, children, discussions with friends, exegetical seminars that I have with them or students, impatience, spontaneity, wisdom of a remark, nature, peace of my home, exact sciences , students who are intelligent and interested in what they do, are concerned about self-improvement ”.
                    </p>
                    <div className='download-btn'><a href="../images/CV Bulancea 2018.doc" download>Download CV</a></div>   
                </div>

                <div className="form-wr">
                    <h1>Contact me:</h1>
                    <form action="https://formspree.io/bulancea_gabriel@yahoo.com" method='POST'>
                        <label className='imp'>
                            <p>Name:</p>
                            <input type="text" name="name"/>
                        </label>
                        <label className='imp'>
                            <p>Email:</p>
                            <input type="email" name="email" />
                        </label>
                        <label className='imp'>
                            <p>Subject:</p>
                            <input type="text" name="name" />
                        </label>
                        <label className='imp'>
                            <p>Message:</p>
                            <textarea type="text" name="message" />
                        </label>
                        <button type="submit" className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
