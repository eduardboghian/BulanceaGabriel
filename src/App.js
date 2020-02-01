import React, { Component } from 'react'
import Sidebar from './components/sidebar'
import Home from './components/HomeScreeen'
import Research from './components/Research'
import ArtisticActivity from './components/ArtisticActivity'
import About from './components/About'


export default class App extends Component {
  constructor() {
    super()
    this.zoomOut = this.zoomOut.bind(this)
  }

  zoomOut() {
      document.getElementById('book-bg').style.display = 'none'
      document.getElementById('zoom-book1').style.cssText = null
      document.getElementById('zoom-book2').style.cssText = null
      document.getElementById('zoom-book3').style.cssText = null
      document.getElementById('zoom-book4').style.cssText = null
      document.getElementById('zoom-book5').style.cssText = null
      document.getElementById('zoom-book6').style.cssText = null
      document.getElementById('zoom-art1').style.cssText = null
      document.getElementById('zoom-art2').style.cssText = null
      document.getElementById('zoom-art3').style.cssText = null
      document.getElementById('zoom-art4').style.cssText = null
      document.getElementById('zoom-art5').style.cssText = null
      document.getElementById('zoom-art6').style.cssText = null
      document.getElementById('zoom-art7').style.cssText = null
      document.getElementById('zoom-art8').style.cssText = null
      document.getElementById('zoom-art9').style.cssText = null
      document.getElementById('zoom-art10').style.cssText = null
      document.getElementById('zoom-art11').style.cssText = null
      document.getElementById('zoom-art12').style.cssText = null
      document.getElementById('zoom-art13').style.cssText = null
      document.getElementById('zoom-art14').style.cssText = null
      document.getElementById('zoom-art15').style.cssText = null
      document.getElementById('zoom-art16').style.cssText = null
      document.getElementById('zoom-art17').style.cssText = null
      document.getElementById('zoom-art18').style.cssText = null
      document.getElementById('zoom-art19').style.cssText = null
      document.getElementById('zoom-art20').style.cssText = null
      document.getElementById('zoom-art21').style.cssText = null
      document.getElementById('zoom-art22').style.cssText = null
      document.getElementById('zoom-art23').style.cssText = null
      document.getElementById('zoom-art24').style.cssText = null
      document.getElementById('zoom-art25').style.cssText = null
      document.getElementById('zoom-art26').style.cssText = null
      document.getElementById('zoom-art27').style.cssText = null
      document.getElementById('zoom-art28').style.cssText = null
      document.getElementById('zoom-art29').style.cssText = null
      document.getElementById('zoom-art30').style.cssText = null
      document.getElementById('zoom-art31').style.cssText = null
      document.getElementById('zoom-art32').style.cssText = null
      document.getElementById('zoom-art33').style.cssText = null
      document.getElementById('zoom-art34').style.cssText = null
      document.getElementById('zoom-art35').style.cssText = null
      document.getElementById('zoom-art36').style.cssText = null
      document.getElementById('zoom-art37').style.cssText = null
      document.getElementById('zoom-art38').style.cssText = null
      document.getElementById('zoom-art39').style.cssText = null
      document.getElementById('zoom-art40').style.cssText = null
      document.getElementById('zoom-art41').style.cssText = null
      document.getElementById('zoom-art42').style.cssText = null
      document.getElementById('zoom-art43').style.cssText = null
      document.getElementById('zoom-art44').style.cssText = null
      document.getElementById('zoom-art45').style.cssText = null
      document.getElementById('zoom-art46').style.cssText = null
      document.getElementById('zoom-art47').style.cssText = null
      document.getElementById('zoom-art48').style.cssText = null
      document.getElementById('zoom-art49').style.cssText = null
      document.getElementById('zoom-art50').style.cssText = null
      document.getElementById('zoom-art51').style.cssText = null
      document.getElementById('zoom-art52').style.cssText = null
      document.getElementById('zoom-art53').style.cssText = null
      document.getElementById('zoom-art54').style.cssText = null
      document.getElementById('zoom-art55').style.cssText = null
      document.getElementById('zoom-art56').style.cssText = null
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Home />
        <Research />
        <ArtisticActivity />
        <About />
        <div className="book-bg" id='book-bg' onClick={ e=> this.zoomOut() }></div>
      </div>
    )
  }
  
}

