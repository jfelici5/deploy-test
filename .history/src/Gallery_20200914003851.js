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
import "./CSS/App.css"
import './CSS/Gallery.css'
import $ from "jquery";

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
    <section className="gallery-heading-holder" id ='gallery'>
    <div className = "gallery-heading">
        <h1 className = "title">
        GALLERY
        </h1>
    </div>
        
    </section>
    </div>
    <div className = "et-main">
    <div className = "gallery-content">
        <img src = {sydney}></img>
        <img src = {group15}></img>
        <img src = {group2}></img>
        <img src = {group1}></img>
        <img src = {group6}></img>
        <img src = {group13}></img>
        <img src = {steven}></img>
        <img src = {boys}></img>
        <img src = {group17}></img>
        <img src = {group3}></img>
        <img src = {group9}></img>
        <img src = {group7}></img>
        <img src = {zoe}></img>
        <img src = {group4}></img>
        <img src = {group5}></img>
        <img src = {group14}></img>
        <img src = {group8}></img>
        <img src = {group12}></img>
        <img src = {group11}></img>
        <img src = {group10}></img>
        <img src = {group16}></img>

    </div>
    </div>
    </div>
  )
}
