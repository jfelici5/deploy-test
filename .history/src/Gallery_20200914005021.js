import React from 'react'
import sydney from './gallery/sydney.JPG'
import group1 from './gallery/grouph.JPG'
import group2 from './gallery/group2.JPG'
import group3 from './gallery/group3.png'
import group4 from './gallery/group4.jpg'
import group5 from './gallery/group5.jpg'
import group6 from './gallery/group6.jpg'
import group7 from './gallery/group7.PNG'
import group8 from './gallery/group8.PNG'
import group9 from './gallery/group9.PNG'
import group10 from './gallery/group10.JPG'
import group11 from './gallery/group11.jpg'
import group12 from './gallery/group12.jpeg'
import group13 from './gallery/group13.jpeg'
import group14 from './gallery/group14.jpeg'
import group15 from './gallery/group15.jpeg'
import group16 from './gallery/group16.jpeg'
import group17 from './gallery/group17.jpeg'
import steven from './gallery/stevenv.JPG'
import zoe from './gallery/zoev.JPG'
import boys from './gallery/boys.JPG'
import {Navbar, Nav} from 'react-bootstrap'
import "./CSS/App.css"
import './CSS/Gallery.css'
import $ from "jquery";
import {HashLink} from 'react-router-hash-link'

export default function Gallery (){

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".et-hero-tabs-container");
          var $nav2 = $(".container-holder");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
      
  return(
    <div>
    <div className = "scroller" id = "galler-home">
    <Navbar className = "bsnavbar" sticky = "top" expand="lg">
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
    <section className="gallery-heading-holder" id ='gallery'>
    <div className = "gallery-heading">
        <h1 className = "title">
        GALLERY
        </h1>
    </div>
        <section className = "container-holder" id = "top-menu">
        <nav className="et-hero-tabs-container" id = "top-menu">
            <HashLink to = "/#home" className = "active-three">HOME</HashLink>
            <HashLink to = "/#about">ABOUT</HashLink>
            <HashLink to = "/#upcoming">SHOWS</HashLink>
            <HashLink to = "/#members">MEMBERS</HashLink>
            <HashLink to = "/#music">MUSIC</HashLink>
            <HashLink to = "/#media">MEDIA</HashLink>
            <HashLink to = "/gallery#gallery" className = "active-two">GALLERY</HashLink>
            <a href = "https://docs.google.com/forms/d/e/1FAIpQLSeUO7YjUXzZ5q3gLureYPazT-AXDPB2MdF02i3I0leFc4jQFw/viewform?usp=sf_link" target="_blank">BOOK US</a>
        </nav>
        </section> 
    </section>
    </div>
    <div className = "et-main">
    <div className = "gallery-content">
        <img src = {sydney} alt = ''></img>
        <img src = {group15} alt = ''></img>
        <img src = {group2} alt = ''></img>
        <img src = {group1} alt = ''></img>
        <img src = {group6} alt = ''></img>
        <img src = {group13} alt = ''></img>
        <img src = {steven} alt = ''></img>
        <img src = {boys} alt = ''></img>
        <img src = {group17} alt = ''></img>
        <img src = {group3} alt = ''></img>
        <img src = {group9} alt = ''></img>
        <img src = {group7} alt = ''></img>
        <img src = {zoe} alt = ''></img>
        <img src = {group4} alt = ''></img>
        <img src = {group5} alt = ''></img>
        <img src = {group14} alt = ''></img>
        <img src = {group8} alt = ''></img>
        <img src = {group12} alt = ''></img>
        <img src = {group11} alt = ''></img>
        <img src = {group10} alt = ''></img>
        <img src = {group16} alt = ''></img>

    </div>
    </div>
    </div>
  )
}
