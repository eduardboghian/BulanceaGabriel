import React, { Component } from 'react'
import '../css/ArtisticActivity.css'

/* === PICS ====*/
import barMask from '../images/1.5x/color-mask.png'
import yearMask from '../images/1.5x/year-box-mask.png'
import img1 from '../../src/images/recitals/09-06-2019.jpg'
import img2 from '../images/recitals/18-05-2019.jpg'
import img3 from '../images/recitals/19-03-2019.jpg'

import Adiemus091218 from '../images/recitals/Adiemus 09.12.18 (3) online.jpg'
import Adiemus081218 from '../images/recitals/Adiemus 08.12.18.jpg'
import inCantus170618 from '../images/recitals/Afis inCantus Bucuresti.jpg'
import sarutManaDoamna from '../images/recitals/Afis  Sarut mana Doamna 2018.jpg'

import inCantus081217 from '../images/recitals/08-12-2017part1.png'
import inCantus081217p2 from '../images/recitals/08-12-2017part2.png'
import R080717 from '../images/recitals/08-07-2017.png'
import inCantus281017 from '../images/recitals/28-10-2017.jpg'
import inCantus180717 from '../images/recitals/Afiș inCANTUS - modificat.jpg'

import ump131216 from '../images/recitals/13-12-2016.png'
import Odata120316 from '../images/recitals/O data ca niciodata 12.03.16.jpg'
import vocIns221016 from '../images/recitals/afis hofstede.jpg'

import musicOfYourLife041215 from '../images/recitals/04-12-2015.jpg'
import afost260915 from '../images/recitals/Afis-Psalterion-100x70cm-RGB-01.jpg'
import despreDragoste260215 from '../images/recitals/AFIS Psalterion febr 2015.jpg'
import nm160515 from '../images/recitals/16-05-2015.png'
import afis290515 from '../images/recitals/Afis.jpg'

import despreDr081114 from '../images/recitals/08-11-2014.jpg'
import despreDr071114 from '../images/recitals/07-11-14.png'
import despreDr190614 from '../images/recitals/13-06-2014.jpg'
import magna110514 from '../images/recitals/11-05-2014.jpg'
import sarut070314 from '../images/recitals/07-03-14.png'

import com261012 from '../images/recitals/26-10-12.png'

import instr031009 from '../images/recitals/03-10-09.png'

import cr191208 from '../images/recitals/19-12-08.png'
import amadeo031008 from '../images/recitals/03-10-08.png'
import amadeo240508 from'../images/recitals/24-05-08.png'

import amadeo070507 from '../images/recitals/07-05-07.png'

import amadeo171006 from '../images/recitals/17-10-06.png'

import amadeo231205 from '../images/recitals/23-12-05.png'
import amadeo290505 from '../images/recitals/29-05-05.png'
import amadeo210505 from '../images/recitals/21-05-05.png'
import amadeo220405 from '../images/recitals/22-04-05.png'
import amadeo170205 from '../images/recitals/17-02-05.png'

import amadeo261204 from '../images/recitals/26-12-04.png'
import amadeo241104 from '../images/recitals/24-11-04.png'
import amadeo071104 from '../images/recitals/07-11-04.png'
import amadeo150704 from '../images/recitals/15-07-04.png'
import amadeo090504 from '../images/recitals/09-05-04.png'

import r211203 from '../images/recitals/21-12-03.png'
import r061203 from '../images/recitals/06-12-03.png'
import r051203 from '../images/recitals/05-12-03.png'
import r071103 from '../images/recitals/07-11-03.png'
import r230503 from '../images/recitals/23-05-03.png'
import r180503 from '../images/recitals/18-05-03_1.png'
import r200403 from '../images/recitals/20-04-03.png'
import r270303 from '../images/recitals/27-03-03.png'
import r220303 from '../images/recitals/22-03-03.png'
import r190203 from '../images/recitals/19-02-03.png'

import rec211202 from '../images/recitals/21-12-02_1.png'
import rec221202 from '../images/recitals/22-12-02_1.png'
import rec231102 from '../images/recitals/23-11-02_1.png'
import rec271002 from '../images/recitals/27-10-02.png'
import rec280402 from '../images/recitals/28-04-02.png'

export default class ArtisticActivity extends Component {
    constructor() {
        super()
        this.state = {
            bgColor: 'inherit'
        }
        this.Scroller = this.Scroller.bind(this)
        this.zoomer = this.zoomer.bind(this)
    }    
    
    componentDidMount() {
        try {
            window.addEventListener('scroll', this.Scroller)        
        }catch(error) {
            console.log(error)
        }
    } 

    zoomer(bookId) {
        document.getElementById('book-bg').style.display = 'block'
        const book = document.getElementById(bookId)
        book.style.width = '550px'
        book.style.height = '650px'
        book.style.position = 'fixed'
        book.style.left = '58%'
        book.style.top = '50%'
        book.style.transform = 'translate( -50%, -50% )'
        book.style.borderRadius = '5px'
        book.style.zIndex = '100'
        book.style.animationName = 'zoomBook'
        book.style.animationDuration = '1s'
    }

    Scroller() {
        const obj = document.getElementById('testbox')

        if( obj.getBoundingClientRect().top < document.documentElement.clientHeight/2 ) {
            this.setState({ bgColor: '#0096cc' })
        }else {
            this.setState({ bgColor: 'inherit' })
        }
    }
    
    render() {
        return (
            <div className='aa-screen' id='artistic-activity'>
                <div className="aa-wrapper">
                    <h1 className="aa-title">Artistic Activity</h1>
                    <h2>Recitals</h2>
                    <div className="color-bar"  style={ { backgroundColor: this.state.bgColor } }></div>


                    <div className="gry-bar" id='testbox'>
                        <div className="year-box year2019">2019</div>
                        <div className="year-box year2018">2018</div>
                        <div className="year-box year2017">2017</div>
                        <div className="year-box year2016">2016</div>
                        <div className="year-box year2015">2015</div>
                        <div className="year-box year2014">2014</div>
                        <div className="year-box year2013">2012</div>
                        <div className="year-box year2012">2009</div>
                        <div className="year-box year2009">2008</div>
                        <div className="year-box year2008">2007</div>
                        <div className="year-box year2007">2006</div>
                        <div className="year-box year2006">2005</div>
                        <div className="year-box year2005">2004</div>
                        <div className="year-box year2004">2003</div>
                        <div className="year-box year2003">2002</div>
                        
                        <div className="bar-mask">
                            
                            <img src={ yearMask } alt="no img" className='mask2019' /> 
                            <img src={ barMask } alt="no img" className='mask1' /> 
                            <img src={ yearMask } alt="no img" className='mask2018' /> 
                            <img src={ barMask } alt="no img" className='mask2' /> 
                            <img src={ yearMask } alt="no img" className='mask2017' /> 
                            <img src={ barMask } alt="no img" className='mask3' /> 
                            <img src={ yearMask } alt="no img" className='mask2016' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2015' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2014' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2013' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2012' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2009' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2008' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2007' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2006' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2005' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2004' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ yearMask } alt="no img" className='mask2003' />
                            <img src={ barMask } alt="no img" className='mask3' />
                            <img src={ barMask } alt="no img" className='masklast' />
                    
                        </div>
                    </div>

                    
                    
                    <div className="recitals-wr">
                        <div className="rwr wr-2019">
                            <div className="rc-slider" id='slider1' >
                                <div className='try' onClick= { e=> this.zoomer('zoom-art1') }>
                                    <a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a>
                                    <img src={ img1 } alt="" id='zoom-art1' />
                                </div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art2') }>
                                    <a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a>
                                    <img src={ img2 } alt="" id='zoom-art2' />
                                </div>
                            </div>
                            
                        </div>
                        <div className="rwr wr-2018">
                            <div className="rc-slider slider2">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art3') }>
                                    <a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a>
                                    <img src={ Adiemus091218 } alt="" id='zoom-art3'/>  
                                </div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art4') }>
                                    <a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a>
                                    <img src={ Adiemus081218 } alt="" id='zoom-art4'/>
                                </div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art5') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ inCantus170618 } alt="" id='zoom-art5'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art6') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ img3 } alt="" id='zoom-art6'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art7') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ sarutManaDoamna } alt="" id='zoom-art7'/></div>                               
                            </div> 
                        </div>
                        <div className="rwr wr-2017">
                                <div className="rc-slider slider3"><div className='try' onClick= { e=> this.zoomer('zoom-art57') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ inCantus081217 } alt="" id='zoom-art57'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art9') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ inCantus081217p2  } alt="" id='zoom-art8'/></div>
                               
                                <div className='try' onClick= { e=> this.zoomer('zoom-art9') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ inCantus281017  } alt="" id='zoom-art9'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art10') }><a href="../images/Prezentare recital.docx" download className='infobtn'><p>Download Info</p></a><img src={ R080717 } alt="" id='zoom-art10' /></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art11') }><a href="../images/Prezentare recital.docx"  download className='infobtn'><p>Download Info</p></a><img src={ inCantus180717 } alt="" id='zoom-art11'/></div>                              
                            </div> 
                        </div>
                        <div className="rwr wr-2016">
                            <div className="rc-slider slider4">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art12') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ ump131216 } alt="" id='zoom-art12'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art13') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ Odata120316 } alt="" id='zoom-art13'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art14') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ vocIns221016 } alt="" id='zoom-art14'/></div>                              
                            </div> 
                        </div>
                        <div className="rwr wr-2015">
                             <div className="rc-slider slider5">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art15') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ musicOfYourLife041215 } alt="" id='zoom-art15'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art16') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ afost260915 } alt="" id='zoom-art16'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art17') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ afis290515 } alt="" id='zoom-art17'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art18') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ nm160515 } alt="" id='zoom-art18'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art19') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ despreDragoste260215 } alt="" id='zoom-art19'/></div>                              
                            </div> 
                        </div> 
                        <div className="rwr wr-2014 slider6">
                            <div className="rc-slider" >
                                <div className='try' onClick= { e=> this.zoomer('zoom-art20') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ despreDr081114 } alt="" id='zoom-art20'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art21') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ despreDr071114 } alt="" id='zoom-art21'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art22') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ despreDr190614 } alt="" id='zoom-art22'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art23') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ magna110514 } alt="" id='zoom-art23'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art24') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ sarut070314 } alt="" id='zoom-art24'/></div>                                
                            </div> 
                        </div>
                        <div className="rwr wr-2012">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art25') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ com261012 } alt="" id='zoom-art25'/></div>                              
                            </div> 
                        </div>
                        <div className="rwr wr-2009">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art26') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ instr031009 } alt="" id='zoom-art26'/></div>                              
                            </div> 
                        </div>
                        <div className="rwr wr-2008">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art27') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ cr191208 } alt="" id='zoom-art27'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art28') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo031008 } alt="" id='zoom-art28'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art29') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo240508 } alt="" id='zoom-art29'/></div>                               
                            </div> 
                        </div>
                        <div className="rwr wr-2007">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art30') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo070507 } alt="" id='zoom-art30'/></div>                               
                            </div> 
                        </div>
                        <div className="rwr wr-2006">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art31') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo171006 } alt="" id='zoom-art31'/></div>                              
                            </div> 
                        </div>
                        <div className="rwr wr-2005">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art32') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo231205 } alt="" id='zoom-art32'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art33') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo290505 } alt="" id='zoom-art33'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art34') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo210505 } alt="" id='zoom-art34'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art35') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo220405 } alt="" id='zoom-art35'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art36') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo170205 } alt="" id='zoom-art36'/></div>                               
                            </div> 
                        </div>
                        <div className="rwr wr-2004">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art37') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo261204 } alt="" id='zoom-art37'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art38') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo241104 } alt="" id='zoom-art38'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art39') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo071104 } alt="" id='zoom-art39'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art40') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo150704 } alt="" id='zoom-art40'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art41') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ amadeo090504 } alt="" id='zoom-art41'/></div>                                
                            </div> 
                        </div>
                        <div className="rwr wr-2003">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art42') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r211203 } alt="" id='zoom-art42'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art43') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r061203 } alt="" id='zoom-art43'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art44') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r051203 } alt="" id='zoom-art44'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art45') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r071103 } alt="" id='zoom-art45'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art46') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r230503 } alt="" id='zoom-art46'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art47') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r180503 } alt="" id='zoom-art47'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art48') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r200403 } alt="" id='zoom-art48'/></div> 
                                <div className='try' onClick= { e=> this.zoomer('zoom-art49') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r270303 } alt="" id='zoom-art49'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art50') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r220303 } alt="" id='zoom-art50'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art51') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ r190203 } alt="" id='zoom-art51'/></div>                               
                            </div> 
                        </div>
                        <div className="rwr wr-2002">
                            <div className="rc-slider">
                                <div className='try' onClick= { e=> this.zoomer('zoom-art52') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ rec221202 } alt="" id='zoom-art52'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art53') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ rec211202 } alt="" id='zoom-art53'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art54') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ rec231102 } alt="" id='zoom-art54'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art55') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ rec271002 } alt="" id='zoom-art55'/></div>
                                <div className='try' onClick= { e=> this.zoomer('zoom-art56') }><a href="#" className='infobtn'><p>Download Info</p></a><img src={ rec280402 } alt="" id='zoom-art56'/></div>                                
                            </div> 
                        </div>

                    </div>
                </div> 
            </div>
        )
    }
}
