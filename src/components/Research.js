import React, { Component } from 'react'
import '../css/Reasearch.css'
import book1 from '../images/book/book1.jpg'
import book2 from '../images/book/2. Istoria muzicii (2009).gif'
import book3 from '../images/book/1. Gandirea creatoare a lui Debussy  (2008).jpg'
import book4 from '../images/book/5. Prolegomene la o estetica  (2016).jpg'
import book5 from '../images/book/6. Istoria muzicii - Din Grecia  antica pana la Beethoven vol. I.jpg'
import book6 from '../images/book/4. Insurgenta esteticului  (2014).jpg'

export default class Research extends Component {
    constructor() {
        super()
        this.zoomer = this.zoomer.bind(this)
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
        book.style.boxShadow= '5px 5px 7px rgba(20, 20, 20, .6)'
        book.style.zIndex = '100'
        book.style.animationName = 'zoomBook'
        book.style.animationDuration = '1s'
    }

    render() {
        return (
            <div className='research-screen' id='research'>
                <div className="books-wrapper" id='books'>
                    <p className='resrch'>RESEARCH</p>
                    <p className='books-title'>BOOKS</p>

                    <div className="book-container b5 left">
                        <p className="book-txt">
                           Cultura şi civilizaţia greacă şi-au înfipt adânc rădăcinile în solul Europei fertilizând  curente,tendinţe  şi  idei  majore  care  vor  sta  la  baza  întregului  destin istoric al acesteia, oferindu-se ca o paradigmă la care gânditori din diverse epoci vor reveni pentru a câştiga voinţa de expresie materializată în noi edificii creatoare. Acţiunea  colonizatoare  a  Greciei  va  răspândi  cultura  ei  în  vastul  bazin  al Mediteranei,  iar  cuceririle  întreprinse  de  Alexandru  cel  Mare  fac  ca  la  sfârşitul secolului IV î.Hr. lumea greacă să se întindă la est până la graniţele cu India, iar la sud să înglobeze tot Egiptul şi mai ales imensul Imperiu Persan. 
                        </p>
                        <div className="book-pic bp-right" onClick={ e => this.zoomer('zoom-book1') }>
                            <img src={ book5 } alt='' id='zoom-book1'></img>
                        </div>
                        <h3 className='book5'>Editura G.U.P.</h3>
                    </div>


                    <div className="book-container b4 right">
                        <p className="book-txt">
                            "Prin titlu, <i> Prolegomene la o estetică a artelor</i>, cartea lui Gabriel Bulancea este una îndrăzneaţă şi plină de modestie. Grecescul <i>pro-legómena</i>, adică <i>înainte-spus</i>, în cazul de faţă la o estetică a artelor, ţinteşte spre Immanuel Kant, cu ale sale <i>Prolegomene   la  orice   metafizică   viitoare  care  se   va  putea înfăţişa drept ştiinţă</i>. În cazul termenului „prolegomenă”, ca specie a textului ştiinţific, Kant a rămas de referinţă pentru definirea  ori înţelesul   său fundamental,   mai  ales  că  studiul gânditorului german se aşeza pe câmpul introducerii publicului la unul din cele mai dificile şi inaccesibile texte ale filosofiei universale, lucrarea <i>Critica raţiunii pure</i>." - <b>Prof. Univ. Dr. Ivan Ivlampie</b>
                        </p>
                        <div className="book-pic bp-left" onClick={ e => this.zoomer('zoom-book2') }>
                            <img src={ book4 } alt='' id='zoom-book2'></img>
                        </div>
                        <h3 className='book4'>Editura G.U.P.</h3>
                    </div>

                    <div className="book-container b6 left">
                        <p className="book-txt">
                            Plecând de la o definiție simplificată, stilul reprezintă un concept specific esteticii sau teoriei artei, care exprimă un raport de unitate în ansamblul diversităţii fenomenelor artistice. Prin acest concept sunt vizate elementele de limbaj artistic caracteristice unei anumite perioade din istoria umanităţii (curent artistic), unui spaţiu geografic definit printr-o anumită cultură şi mentalitate, unei grupări de artişti mânaţi de aceleaşi idealuri estetice (şcoală de creaţie) sau a creației unui singur artist.
                        </p>
                        <div className="book-pic bp-right" onClick={ e => this.zoomer('zoom-book3') }>
                            <img src={ book6 } alt='' id='zoom-book3'></img>
                        </div>
                        <h3 className='book6'>Editura G.U.P.</h3>
                    </div>


                    <div className="book-container b1 right">
                        <p className="book-txt">
                            "Cele aproape patruzeci de crochiuri – ca adevărate eseuri – se bazează fiecare pe câte o reflexie ideogramică asupra motivului în dezbatere, scoţând în relief fie importanţa lui <i>sine die</i>, fie coexistenţa sa relaţională cu alte gânduri, alte fenomene mai apropiate sau mai îndepărtate, mai consonante sau mai disonante cu el însuşi.<br/>   
                            &nbsp;&nbsp; &nbsp;&nbsp; Sunt grăitoare promptitudinile imaginare plasticizante şi cugetările revelatorii – precum Blaga îşi caracteriza metaforele poetice – în şi prin care autorul <br/>prestabileşte pentru  cititor pista reflexivă a gândirilor pe mai departe lecturate aici." - <b>Prof. Univ. Dr. Ştefan Angi</b>
                        </p>
                        <div className="book-pic bp-left" onClick={ e => this.zoomer('zoom-book4') }>
                            <img src={ book1 } alt='no pic' id='zoom-book4'></img>
                        </div>
                        <h3 className='book1'>Editura Artes</h3>
                    </div>

                    <div className="book-container b2 left">
                        <p className="book-txt">
                            Cultura şi civilizaţia greacă şi-au înfipt adânc rădăcinile în solul Europei fertilizând  curente,  tendinţe  şi  idei  majore  care  vor  sta  la  baza  întregului  destin istoric al acesteia, oferindu-se ca o paradigmă la care gânditori din diverse epoci vor reveni pentru a câştiga voinţa de expresie materializată în noi edificii creatoare. Acţiunea  colonizatoare  a  Greciei  va  răspândi  cultura  ei  în  vastul  bazin  al Mediteranei,  iar  cuceririle  întreprinse  de  Alexandru  cel  Mare  fac  ca  la  sfârşitul secolului IV î.Hr. lumea greacă să se întindă la est până la graniţele cu India, iar la sud să înglobeze tot Egiptul şi mai ales imensul Imperiu Persan. 
                        </p>
                        <div className="book-pic bp-right" onClick={ e => this.zoomer('zoom-book5') }>
                            <img src={ book2 } alt='' id='zoom-book5'></img>
                        </div>
                        <h3 className='book2'>Editura G.U.P.</h3>
                    </div>

                    <div className="book-container b3 right">
                        <p className="book-txt">
                            "<i>Debussy demeure!</i>, pentru a parafraza un titlu al lui Boulez privindu-l pe Stravinski! Este uimitor ce persistenţă are încă în reprezentările noastre Claude Debussy. Şi aceasta nu numai că i se potriveşte ca un etalon al perenităţii, al duratei neştirbite, pe care chiar şi numai simpla înşiruire, statistic  privind lucrurile, a numelui Debussy în programele de concert sau în exegezele istoric-stilistice i-o asigură, ci şi pentru că el, Claude Debussy, desparte manifest secolul romantismului de modernitate, marcând prin muzica sa, dacă nu şi prin impresionismul acesteia, începuturile noului, căutat dincolo de orizonturile moştenite." - <b>Prof. Univ. Dr. Gheorghe Firca</b>
                        </p>
                        <div className="book-pic bp-left" onClick={ e => this.zoomer('zoom-book6') }>
                            <img src={ book3 } alt='' id='zoom-book6'></img>
                        </div>
                        <h3 className='book3'>Editura Media Musica</h3>
                    </div>

                </div>

                { /* ============ ARTICLES ================== */ }    


                <div className="articles-wrapper">
                    <div className="art-bg"></div>
                    <p className='isi-title' id='isi'>ARTICLES published in ISI</p>

                    <div className="isi-wrapper">
                    <div className='isi-box 01'>
                            <p className='art-title'>The augmented tonality in the first half of the 20th century music</p>
                            <p className='isi-desc'>The appeal to the tonality from the first half of the 20th century occurs in the cultural areas where the contact with the tradition is tighter and there is no stress on the originality of the artistic expression, originality that in the Eastern European music tends to substitute the artistic through the underestimationor deconstruction of the already existing musical languages.</p>
                            <div className='btn-wr'><button><a href='http://ifiasa.org/gallery/3rd.36-2018mcdsare-benteacristina.pdf' target='_blank' rel="noopener noreferrer">Read More</a></button></div>
                        </div>

                        <div className='isi-box 02'>
                            <p className='art-title'>A Mathematical model of analyzing heptachordal chromatic modes</p>
                            <p className='isi-desc'>The current study carries further the research initiated in another article published in 2010, entitled Mathematical models for analysing diatonic modes. This research naturally completes the other by the supplementary approach of the chromatic musical modes. Only one of the two analysis models presented then will be selected, the latter one. The former model employed in the previous study does not display any applicability when it comes to chromatic modes.</p>
                            <div className='btn-wr'><button> <a href="https://www.sgemsocial.org/index.php/elibrary?view=publication&task=show&id=1376" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                        </div>

                        <div className='isi-box 03'>
                            <p className='art-title'>Feminine Typologies in Wagnerian's Opera </p>
                            <p className='isi-desc'>By the total work of art (gesamtkunstwerk) Wagner brings the myth back into focus by illud tempus hoping that in doing so he will re-sacralise the present time and space. Within the framework of the myths he approaches, the present paper deals with the feminine characters whose role is decisive in the unfolding of the Wagnerian drama. Every female character fits a conventional typologies, the present study bringing into question more than twenty such characters. </p>
                            <div className='btn-wr'><button> <a href="https://sgemsocial.org/ssgemlib/spip.php?article4988" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                        </div>

                        <div className='isi-box 04'>
                            <p className='art-title'>Stylistic Types in the History of Arts</p>
                            <p className='isi-desc'>There are classifications in the theory of styles which might help create a unitary vision upon styles by giving up the rigid nature of the notion of style and make its significance more fluid. This text is based on the idea that humans relate to the world in three ways: through senses, intellect and sensibility. The shape they give to their perception of the world depends on the mixture of these three. </p>
                            <div className='btn-wr'><button> <a href="https://www.sciencedirect.com/science/article/pii/S187704281403907X" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                        </div>

                        <div className='isi-box 05'>
                            <p className='art-title'>Set Theory Elements Applied in the Analysis of Olivier Messiaen's Modes of Limited Transposition </p>
                            <p className='isi-desc'>This paper starts from Anatol Vieru's hypothesis that the human ear perceives modes as sets. Hence the necessity to analyse Messiaen's modes with the operations known from the set theory field: inclusion, intersection, union, set difference etc. and to extract the results from such an analysis.</p>
                            <div className='btn-wr'><button> <a href="https://www.sciencedirect.com/science/article/pii/S1877042813033272" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                        </div>

                        <div className='isi-box 06'>
                            <p className='art-title'>Mathematical models for analysing diatonic modes</p>
                            <p className='isi-desc'>The study herein aims to present two mathematical models for analysing heptachordic diatonic modes. We chose to approach the issue through a structuralist method, the first mathematical model being based on permuting some structures inside the octavian structures as this fact in itself allows a better visualisation of the characteristics of the modes; while the second model is based on...</p>
                            <div className='btn-wr'><button> <a href="http://www.wseas.us/e-library/conferences/2010/Iasi/AMTA/AMTA-13.pdf" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                        </div>

                    </div>


                   
                    <div className="bdi-wrapper" id='bdi'>
                        <p className='bdi-title'>ARTICLES published in BDI</p>
                        <div className='bdi-grid-wr'>

                            <div className='bdi-box 01'>
                                <p className='bdi-art-title'>Emil Cioran and Music</p>
                                <p className='bdi-desc'>Cioran est l’homme des aventures abyssales, on le retrouve comme tel lorsqu’on expérimente la solitude, car il n’y a aucun philosophe qui soit tellement séduit par la transcendance, en refusant totalement en même temps d’y croire. Par un caprice ludique déterminé peut-être de sa lucidité rationnelle, Cioran joue avec les arguments de son salut, il transforme les expériences religieuses internes dans un jeu de la promotion de ses propres doutes, et c’est ainsi que nous risquons d’abolir notre propre dimension.</p>
                                <div className='btn-wr'><button> <a href="https://www.ceeol.com/search/article-detail?id=601396" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                            </div>
                            
                            <div className='bdi-box 02'>
                                <p className='bdi-art-title'>Connections and divergences between Claude Debussy’s thinking and the impressionistic and symbolist aesthetics</p>
                                <p className='bdi-desc'>El punto central del pensamiento de Claude Debussy se basa en la idea de que el arte tiene que ser modernizado por la restauración de los sentimientos, que podrían encontrarse recursos por la contemplación de la naturaleza, por la profunda filiación que se encuentra entre el alma del hombre y el alma de la naturaleza. Debussy exprime sus convicciones estéticas por escrito.</p>
                                <div className='btn-wr'><button> <a href="http://www.filomusica.com/filo83/conexiones.html" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                            </div>
                            
                            <div className='bdi-box 03'>
                                <p className='bdi-art-title'>The pictorial music or the musical painting – the characteristics of Claude Debussy’s art </p>
                                <p className='bdi-desc'>Aunque Debussy siempre ha rechazado la calificación de impresionismo, y el impresionismo no puede reivindicar el conjunto de su música porque no esta presente en todas sus obras y no es el elemento fundamental de su arte, una fuente importante de su inspiración se halla en la naturaleza. Aunque las intenciones del músico no sean esencialmente descriptivas, hay sin embargo lazos estrechos entre su música y los recuerdos de las impresiones sentidas delante de la naturaleza.</p>
                                <div className='btn-wr'><button> <a href="http://www.filomusica.com/filo78/debussy.html" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                            </div>
                            
                            <div className='bdi-box 04'>
                                <p className='bdi-art-title'>Claude Debussy’s attitude towards the impressionism of his art </p>
                                <p className='bdi-desc'>Una de las dudas mas claras sobre la pertenencia de Claude Debussy a la corriente impresionista es su misma actitud frente a esta, sabiendo que le repugnaba el epíteto impresionismo. Este argumento es aun mas claro cuando en una de sus cartas a su editor, escribiendo sobre la segunda serie de Imágenes: “Intento hacer algo diferente, realidades, por así decirlo: eso que los imbéciles llaman impresionismo".</p>
                                <div className='btn-wr'><button> <a href="http://www.filomusica.com/filo70/impresionismo.html" target='_blank' rel="noopener noreferrer">Read More</a> </button></div>
                            </div>
                            
                        </div> 
                    </div>

                    {/* ////////////   CNCSIS \\\\\\\\\\\\\\ */}

                    <div className="cncsis-screen" id='cncsis'>
                        <h1 className='cncsis-tit'>Articles published in C.N.C.S.I.S.</h1>
                        <div className="cncsis-box" >
                            <h1 className='sg'>2009</h1>
                            <p className='cncsis-title'>The musical symbol and the Renaissance’s eidetic dynamics </p>
                            <p className='cncsis-txt' >Original title: Simbolul muzical şi dinamica eidetică a Renaşterii, published in the proceedings of the symposium Problems of education in the 3rd millennium, Galaţi: Galaţi University Press, pp. 58 - 66, ISSN 2065-3522, 2009</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='sg'>2009</h1>
                            <p className='cncsis-title-right'>Hermeneutical itineraries in Rossini’s Credo</p>
                            <p className='cncsis-txt'>Original title: Trasee hermeneutice în Credo-ul rossinian, published in the proceedings of the symposium Research and History, Galați: Partener, pp. 203-210, ISBN 7819-901-12, 2009</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='sg'>2009</h1>
                            <p className='cncsis-title'>Aspects of chromaticism in the Lamentationis genre (Lamentation or on the piety of rediscovering Beauty)</p>
                            <p className='cncsis-txt'>Original title: Aspecte ale cromatismului în genul Lamentationis (Lamentatio sau despre pietatea redecoperirii Frumuseţii), published in Artes, vol. 8, Iaşi: Artes, the Science of Music Research Centre, ISSN: 1224-6646, 2009</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='sg'>2008</h1>
                            <p className='cncsis-title-right'>Gilbert Durand re-interpreting the Wagnerian aesthetics</p>
                            <p className='cncsis-txt'>Original tile: Gilbert Durand reinterpretând estetica wagneriană, published in Artes, vol. 6, Iaşi: Artes, the Science of Music Research Centre, ISSN: 1224-6646, 2008, pp. 109-119, 2008</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='sg'>2007</h1>
                            <p className='cncsis-title'> Philosophic and symbolic valences of Indian Hindu music </p>
                            <p className='cncsis-txt'>Original tile: Valenţe filosofico-simbolice ale muzicii hinduse indiene, published in the Annals of “Dunărea de Jos” University of Galați, Issue XVIII, Philosophy, Year IV, no. 7, pp. 73-78, ISSN: 1583-512X, 2007</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='sg'>2007</h1>
                            <p className='cncsis-title-right'>Wagnerian art and psychology in the context of Gilbert Durand’s theory of mythemes</p>
                            <p className='cncsis-txt'>Original title:  Psihologie şi artă wagneriană în contextul teoriei mitemelor a lui Gilbert Durand delivered at the symposium Problems of education in the 3rd millennium on 17.06.2006 and published at “Dunărea de Jos” University Foundation, pp. 78-84, ISBN: 978-973-627-382-7, 2007</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='sg'>2006</h1>
                            <p className='cncsis-title'>Claude Debussy’s thinking and the philosophy of intuition</p>
                            <p className='cncsis-txt'>Original title: Gândirea lui Claude Debussy şi filosofia intuiţiei, published in the Annals of “Dunărea de Jos” University of Galați, Issue XVIII, Philosophy, Year III, no. 6, pp. 41-59, ISSN: 1583-512X, 2006</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='sg'>2006</h1>
                            <p className='cncsis-title-right'>The psychology of modern art</p>
                            <p className='cncsis-txt'>Original title: Psihologia artei moderne, published in the Annals of “Dunărea de Jos” University of Galați, Issue XXI, Psychology and Education Sciences, Year I, no. 1, pp. 71-80, ISBN: 1842-1318, 2006</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='sg'>2006</h1>
                            <p className='cncsis-title'>Structures of the human souls in the context of the art styles history</p>
                            <p className='cncsis-txt'>Published in the Annals of “Dunărea de Jos” University of Galați, Issue XXI, Psychology and Education Sciences, Year I, no. 2, Galaţi: Galați University Press, pp. 55-59, ISSN: 1842 – 1318, 2006</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='duble'>2006</h1>
                            <p className='cncsis-title-right'>Methodological perspectives on approaching styles in western art</p>
                            <p className='cncsis-txt'>Original title: Perspective metodologice în abordarea stilurilor din arta occidentală, delivered at the international conference Promoting European art and culture through education on 29.10.2005 and published in the volume Promoting European art and culture through education, Galaţi: “Dunărea de Jos” University Foundation, pp. 426-433, ISBN (10) 973-627-318-0, 2006</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='duble'>2005</h1>
                            <p className='cncsis-title'>The artistic Wagnerian universe between agape and eros</p>
                            <p className='cncsis-txt'>Original title: Universul artistic wagnerian între agape şi eros, published in the Annals of “Dunărea de Jos” University of Galați, Aletheia, Galaţi, Issue XVIII (3), Philosophy, Year II, no. 5, pp. 56-71, ISSN: 1583-512X, 2005</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='duble'>2005</h1>
                            <p className='cncsis-title-right'>Means of optimizing the musical education in art high schools</p>
                            <p className='cncsis-txt'>Original title: Mijloace de optimizare a învăţământului muzical în liceele de artă, delivered at the international conference Directions of optimizing the educational activity on 6.11.2004 and published in the volume Directions of optimizing the educational activity, Galaţi: “Dunărea de Jos” University Foundation, pp. 283-287, ISBN: 973-627-227-3, 2005</p>
                        </div>

                        <div className="cncsis-box">
                            <h1 className='duble'>2004</h1>
                            <p className='cncsis-title'>The Aesthetics of the Viennese school</p>
                            <p className='cncsis-txt'>Original title: Estetica şcolii vieneze, published in  the Annals of “Dunărea de Jos” University of Galați, Galaţi, Issue XVIII (4), Philosophy, Year II, pp. 153-169, ISSN: 1583 – 512X, 2004</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='duble'>2004</h1>
                            <p className='cncsis-title-right'>Empathy and music</p>
                            <p className='cncsis-txt'>Original title: Empatie şi muzică, presented at the national conference “Education in the 3rd millennium”, Galaţi: “Dunărea de Jos” University Foundation, pp. 185-193, ISBN: 973-627-151-X, 2004</p>
                        </div>
                        
                        <div className="cncsis-box">
                            <h1 className='duble'>2003</h1>
                            <p className='cncsis-title'>Expressionistic aspects in Johann Sebastian Bach’s work</p>
                            <p className='cncsis-txt'>Original title: Aspecte expresioniste în creaţia lui Johann Sebastian Bach, published in the Annals of “Dunărea de Jos” University of Galați, Issue XVIII (1), Philosophy, Year I, pp. 21-25, ISSN: 1583 – 512X, 2003</p>
                        </div>

                        <div className="cncsis-box-right">
                            <h1 className='duble'>2003</h1>
                            <p className='cncsis-title-right'>Eduard Hanslick’s non-emotional aesthetics and the destiny of music</p>
                            <p className='cncsis-txt'>Original title: Estetica nonemoţională a lui Eduard Hanslick şi destinul muzicii, published in the Annals of “Dunărea de Jos” University of Galați, Issue XVIII (2), Philosophy, Year I, pp. 35-39, ISSN: 1583 – 512X, 2003</p>
                        </div>
                        
                        <div className="cncsis-box">
                            <h1 className='duble'>2003</h1>
                            <p className='cncsis-title'>Methods of improving the pre-school and primary education</p>
                            <p className='cncsis-txt'>Original title: Metode de îmbunătăţire a învăţământului muzical preşcolar şi primar, presented at the national conference “Innovation and change in education”, Galaţi: “Dunărea de Jos” University Foundation, pp. 216-224, ISBN: 973-627-048-3, 2003</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
