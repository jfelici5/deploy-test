import React from 'react'
import './CSS/App.css';
import './CSS/People.css';
import './CSS/Albums.css';
import './CSS/Styles.css';
import './CSS/images.css';
import './CSS/Videos.css'
import logo from './imagesmisc/finallogopng.png';
import $ from "jquery";
import {Navbar, Nav} from 'react-bootstrap'
import {HashLink} from 'react-router-hash-link'


export default function Main(){
  
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".et-hero-tabs-container");
      var $nav2 = $(".container-holder");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(window).scroll(function() {
		var scrollDistance = $(document).scrollTop();

		$('.scroller').each(function(i) {
				if ($(this).position().top <= scrollDistance +10) {
						$('.et-hero-tabs-container a').removeClass('active');
            $('.et-hero-tabs-container a').eq(i).addClass('active');
            $('.bsnavbar a').removeClass('active');
						$('.bsnavbar a').eq(i).addClass('active');
				}
		});
  }).scroll();


    return(

<div data-spy="scroll" data-target=".nav">

<div className = "scroller"> 
<Navbar className = "bsnavbar" sticky = "top" expand = "sm">
  <Navbar.Toggle className = "nav-conts"/>
  <Navbar.Collapse className = ".collapse"id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/#"data-toggle="collapse"data-target=".navbar-collapse.show">Home</Nav.Link>
      <Nav.Link className = "link-text"href="/#about"data-toggle="collapse"data-target=".navbar-collapse.show">About</Nav.Link>
      <Nav.Link className = "link-text"href="/#upcoming"data-toggle="collapse"data-target=".navbar-collapse.show">Upcoming</Nav.Link>
      <Nav.Link className = "link-text"href="/#members"data-toggle="collapse"data-target=".navbar-collapse.show">Members</Nav.Link>
      <Nav.Link className = "link-text"href="/#music"data-toggle="collapse"data-target=".navbar-collapse.show">Music</Nav.Link>
      <Nav.Link className = "link-text" href="/#media"data-toggle="collapse"data-target=".navbar-collapse.show">Media</Nav.Link>
      <Nav.Link className = "link-text"href="/gallery"data-toggle="collapse"data-target=".navbar-collapse.show">Gallery</Nav.Link>
      <Nav.Link className = "link-text" href="https://docs.google.com/forms/d/e/1FAIpQLSeUO7YjUXzZ5q3gLureYPazT-AXDPB2MdF02i3I0leFc4jQFw/viewform?usp=sf_link" target="_blank">Book Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>         
  <section className="et-hero-tabs" id ='home'>

    <section className = "container-holder" id = "top-menu">
    
      <nav className="et-hero-tabs-container" id = "top-menu">
      
        <a href = "/#home" className = "active">HOME</a>
        <a href="/#about">ABOUT</a>
        <a href="/#upcoming">SHOWS</a>
        <a href="/#members">MEMBERS</a>
        <a href="/#music">MUSIC</a>
        <a href="/#media">MEDIA</a>
        <HashLink to = "/gallery#gallery">GALLERY</HashLink>
        <a href = "https://docs.google.com/forms/d/e/1FAIpQLSeUO7YjUXzZ5q3gLureYPazT-AXDPB2MdF02i3I0leFc4jQFw/viewform?usp=sf_link" target="_blank">BOOK US</a>
      </nav>
    </section>
    <div className = "new-title">We are: After Hours</div> 
  </section>
</div>
<main className="et-main">
  <div className ="content-holder">
    <div className = "scroller" id = "about">
      <section className="et-slide-about" id="about">
        <h1><img src = {logo} alt = "pleasework" className = "logo-image"/></h1>
        <h1 className = "about-heading-text">ABOUT AFTER HOURS</h1>
        <h3 className = "about-text">
          After Hours, the University of Rochester's oldest co-ed a cappella group, was formed in 1998 as a vocal jazz group called Charivari. In 2000, the group was renamed After Hours and evolved into the ensemble it now is. While our members spend most of their time together building friendships through tight harmonies and kick-ass tunes, we pride ourselves on being close friends outside of rehearsal as well.<br/><br/>
          After Hours has participated in ICCAs (International Championship of Collegiate A Cappella) throughout its many years of being hosted regionally. In both 2013 and 2015, After Hours placed first in the Regional Division, advancing to the ICCA semifinals. In the 2019 ICCA Regionals, After Hours took third place, and brought home the accolade of “Best Arrangement”, by our talented Reagan Casteel, class of 2020. <br/><br/>
          If you'd like to see us live, After Hours has two major concerts per year, one each in the fall and spring, in addition to a joint Meliora Weekend concert with UR's other a cappella groups. Also throughout the school year, we perform at various events and shows often held by other UR clubs. We sing serenades for Valentine's Day and take road trips to any place we possibly can. We also frequently take Spring Break Tours, and sing in different cities such as DC, NYC, Philly, and more!
        </h3>
        <div className = "about-grid">    
          <div className = "rettner"></div>     
          <div className = "hands-up"></div>
          <div className = "groovestand"></div>
          <div className = "zoe-emma"></div>
        </div>
      </section>
    </div>
  </div>
</main>
<div className = "scroller" id = "upcoming">
  <section className="et-slide-upcoming" id="upcoming">
    <div className = "upcoming-holder">
    <h1 className = "about-heading-text">UPCOMING SHOWS</h1>
    <h3 className = "about-text">
      No upcoming shows.
    </h3>
    </div>
  </section>
</div>
  <main className="et-main">
  <div className ="content-holder">
    <div className = "scroller" id = "members">
      <section className="slideshow" id="members">
        <h1 className = "about-heading-text">
          MEET US
        </h1>
        <div className = "grid-top">     
          <div className = "grace">
            <div className = "overlay">
              <div className = "text">
              <h6 className = "member-title"><strong>GRACE CONHEADY '21</strong> | <em>PRESIDENT</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Rochester, New York<br></br>
                  <strong>Majors/Minors:</strong> Linguistics Major, Audio Music Engineering and History Minors<br></br>
                  <strong>Voice Part:</strong>  Alto <br></br>
                  <strong>Year Joined AH:</strong> Fall 2017<br></br>
                  <strong>Fun Fact:</strong> I can clap only using one hand! 
                  </h6>
              </div> 
            </div>
          </div>     
          <div className = "ben">
            <div className = "overlay">
              <div className = "text">
              <h6 className = "member-title"><strong>BEN RICHARDSON '21</strong> | <em>MUSIC DIRECTOR</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Brighton, New York<br></br>
                  <strong>Majors/Minors:</strong> Biomedical Engineering Major, Music Theory Cluster<br></br>
                  <strong>Voice Part:</strong>  Bass <br></br>
                  <strong>Year Joined AH:</strong> Spring 2018<br></br>
                  <strong>Fun Fact:</strong> I began my time in Afters Hours as a Tenor 1, and have slowly descended the ranks to Bass. Hard work pays off kids. 
                  </h6>
              </div> 
            </div>
          </div>
        </div>
        <div className = "grid-top">
          <div className = "erin">
            <div className = "overlay-two">
              <div className = "text">
              <h6 className = "member-title"><strong>ERIN TOOHEY '21</strong> | <em>BUSINESS MANAGER</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Newton, Pennsylvania<br></br>
                  <strong>Majors/Minors:</strong> Linguistics Major, French and Audio Music Engineering Minors<br></br>
                  <strong>Voice Part:</strong>  Soprano <br></br>
                  <strong>Year Joined AH:</strong> Fall 2017<br></br>
                  <strong>Fun Fact:</strong> I once dyed my hair pink using only Kool Aid 
                  </h6>
              </div> 
            </div>
          </div>
          <div className = "sydney">
          <div className = "overlay-two">
              <div className = "text">
              <h6 className = "member-title"><strong>SYDNEY SISSON '21</strong> | <em>PUBLICITY MANAGER</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Wellsville, New York<br></br>
                  <strong>Majors/Minors:</strong> American Sign Language and Brain and Cognitive Sciences Majors<br></br>
                  <strong>Voice Part:</strong>  Soprano <br></br>
                  <strong>Year Joined AH:</strong> Spring 2018<br></br>
                  <strong>Fun Fact:</strong> I have my own dog that lives with me on campus
                  </h6>
              </div> 
            </div>
          </div>
          <div className = "emma">
            <div className = "overlay-two">
              <div className = "text">
                <h6 className = "member-title"><strong>EMMA MICHELS '22</strong> | <em>SECRETARY</em></h6>
                <h6 className = "member-info">
                  <strong>Hometown:</strong> Brockport, New York<br></br>
                  <strong>Majors/Minors:</strong> Brain and Cognitive Sciences and Dance Majors<br></br>
                  <strong>Voice Part:</strong>  Alto <br></br>
                  <strong>Year Joined AH:</strong> Fall 2019<br></br>
                  </h6>
              </div> 
            </div>
          </div>
        </div>
        <div className = "grid-top">
            <div className = "steven">
            <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>STEVEN LI '23</strong> | <em>ASSISTANT MUSIC DIRECTOR</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Burlington, Vermont<br></br>
                  <strong>Majors/Minors:</strong> Computer Science<br></br>
                  <strong>Voice Part:</strong>  Tenor <br></br>
                  <strong>Year Joined AH:</strong> Fall 2019<br></br>
                  <strong>Fun Fact:</strong> Vermont has more cows than people
                  </h6>
                </div> 
              </div>
            </div>
            <div className = "zoe">
            <div className = "overlay-two">
                <div className = "text">
                  <h6 className = "member-title"><strong>ZOE HYNES '23</strong> | <em>BOOKING MANAGER</em> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Syracuse, New York<br></br>
                  <strong>Majors/Minors:</strong> Digital Media Studies and Psychology<br></br>
                  <strong>Voice Part:</strong>  Alto <br></br>
                  <strong>Year Joined AH:</strong> Fall 2019<br></br>
                  <strong>Fun Fact:</strong> After Hours’ resident Taylor Swift fan 
                  </h6>
                </div> 
              </div>
            </div>
            <div className = "jack">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>JACK FELICIANO '23</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Concord, California<br></br>
                  <strong>Majors/Minors:</strong> Computer Science Major<br></br>
                  <strong>Voice Part:</strong>  Tenor <br></br>
                  <strong>Year Joined AH:</strong> Fall 2019<br></br>
                  <strong>Fun Fact:</strong> I once went blind for two weeks
                  </h6>
                </div> 
              </div>
            </div>
        </div>
          <div className = "grid-top">
            <div className = "ashwin">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>ASHWIN MENON '20</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> East Lyme, Connecticut<br></br>
                  <strong>Majors/Minors:</strong> Electrical and Computer Engineering<br></br>
                  <strong>Voice Part:</strong>  Tenor <br></br>
                  <strong>Year Joined AH:</strong> Spring 2019<br></br>
                  <strong>Fun Fact:</strong> I know Pi to 500 digits 
                  </h6>
                </div> 
              </div>
            </div>
          
            <div className = "luke">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>LUKE NASH '20</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Pennington, New Jersey<br></br>
                  <strong>Majors/Minors:</strong> Audio and Music Engineering<br></br>
                  <strong>Voice Part:</strong>  Tenor <br></br>
                  <strong>Year Joined AH:</strong> Spring 2019<br></br>
                  </h6>
                </div> 
              </div>
            </div>
            <div className = "franklin">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>FRANKLIN HONG '23</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Connecticut<br></br>
                  <strong>Majors/Minors:</strong> Undecided<br></br>
                  <strong>Voice Part:</strong>  Bass <br></br>
                  <strong>Year Joined AH:</strong> Spring 2020<br></br>
                  <strong>Fun Fact:</strong> I lived in Tokyo and Dublin
                  </h6>
                </div> 
              </div>
            </div>
          </div>
          <div className = "grid-top">
            <div className = "nicole">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>NICOLE NOBREGA '23</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Buffalo, NY<br></br>
                  <strong>Majors/Minors:</strong> Biology, Spanish<br></br>
                  <strong>Voice Part:</strong> Alto <br></br>
                  <strong>Year Joined AH:</strong> Fall 2020<br></br>
                  <strong>Fun Fact:</strong> My first concert when I was little was Hannah Montana and the Jonas Brothers
                  </h6>
                </div> 
              </div>
            </div>
            <div className = "ally">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>ALLY HOWARD '24</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong>Syracuse, NY<br></br>
                  <strong>Majors/Minors:</strong> <br></br>
                  <strong>Voice Part:</strong>  Bass <br></br>
                  <strong>Year Joined AH:</strong> Fall 2020<br></br>
                  <strong>Fun Fact:</strong> I tried out for America's Got Talent twice
                  </h6>
                </div> 
              </div>
            </div>
            <div className = "jacq">
              <div className = "overlay-two">
                <div className = "text">
                <h6 className = "member-title"><strong>JACQUELINE MALIZIA '24</strong> <br></br></h6>
                  <h6 className = "member-info">
                  <strong>Hometown:</strong> Connecticut<br></br>
                  <strong>Majors/Minors:</strong> Undecided<br></br>
                  <strong>Voice Part:</strong>  Bass <br></br>
                  <strong>Year Joined AH:</strong> Spring 2020<br></br>
                  <strong>Fun Fact:</strong> I lived in Tokyo and Dublin
                  </h6>
                </div> 
              </div>
            </div>
            </div>
        </section>
      </div>
  <main className = "et-main">
  <div className = "scroller" id = "music">      
  <section className="panda" id="music">
  
  <h1 className = "about-heading-text">
      OUR REPERTOIRE
    </h1>
    <div className = "musicgrid">
            
            <div className = "japan-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>LOST IN JAPAN | SHAWN MENDES </strong><br></br><em>ARR. REAGAN CASTEEL</em></h6>
              </div>
            </div>
            </div>  
            <div className = "juice-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>JUICE | LIZZO </strong><br></br><em>ARR. REAGAN CASTEEL</em></h6>
              </div>
            </div>  
            </div>
            <div className = "bellyache-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>BELLYACHE | BILLIE EILISH </strong><br></br><em>ARR. MATT KYONG</em></h6>
              </div>
            </div>
            </div>
            <div className = "treasure-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>TREASURE | BRUNO MARS </strong><br></br><em>ARR. LUKE NASH</em></h6>
              </div>
            </div>
            </div>
            <div className = "more-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>MORE AND MANY MORE | LAWRENCE </strong><br></br><em>ARR. REAGAN CASTEEL</em></h6>
              </div>
            </div>
            </div>
            <div className = "acid-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>ACID DREAMS | MAX </strong><br></br><em>ARR. RYAN RACICOT</em></h6>
              </div>
            </div>
            </div>
            <div className = "bestpart-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>BEST PART | DANIEL CAESAR </strong><br></br><em>ARR. MATT KYONG</em></h6>
              </div>
            </div>
            </div>
            <div className = "cough-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>COUGH SYRUP | YOUNG THE GIANT </strong><br></br><em>ARR. BEN RICHARDSON</em></h6>
              </div>
            </div>
            </div>
            <div className = "brookyln-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>BROOKLYN IN THE SUMMER | ALOE BLACC </strong><br></br><em>ARR. BEN RICHARDSON</em></h6>
              </div>
            </div>
            </div>
            <div className = "heart-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>HEART SHAPED BOX | NIRVANA </strong><br></br><em>ARR. REAGAN CASTEEL</em></h6>
              </div>
            </div>
            </div>
            <div className = "dance-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>CAN WE DANCE | THE VAMPS </strong><br></br><em>ARR. BEN RICHARDSON</em></h6>
              </div>
            </div>
            </div>
            <div className = "soclose-card">
            <div className = "overlay-albums">
              <div className = "texts">
                <h6 className = "album-title"><strong>SO CLOSE | FELIX JAEHN </strong><br></br><em>ARR. BEN RICHARDSON</em></h6>
              </div>
            </div>
            </div>
          </div>
          
  </section>
  </div>
  </main>
  <div className = "scroller" id = "media">
  <section className="et-slide" id = "media">
  <h1 className = "about-heading-text">
      MEDIA
    </h1>
      <div className = "videogrid-2">
        <div className = "japan-video">
          <iframe title = "Treasure" className = "responsive-iframe" src="https://www.youtube.com/embed/9zNOZoHwVP8?start=34" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>    
        </div>  
      </div>
      <div className = "videogrid">
        <div className = "more-video">
          <iframe title = "More and Many More" className = "responsive-iframe"  src="https://www.youtube.com/embed/SCIR0hBggkE?start=71" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
        </div>
        <div className = "more-video">
          <iframe title = "Lost in Japan" className = "responsive-iframe" src="https://www.youtube.com/embed/7JACC2Bb6eU?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>  
        </div>
      </div>
      <div className = "videogrid">
        <div className = "japan-video">
        <iframe title = "Comeback" className = "responsive-iframe" src="https://www.youtube.com/embed/1TGhK59ISKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
        </div>
        <div className = "japan-video">
        <iframe title = "I Don't Think About You" className = "responsive-iframe" src="https://www.youtube.com/embed/2uwhJd5CHr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>        </div>  
      </div>
    
  </section>
  </div>
  </div>
</main>
</div>

    );

    
}

