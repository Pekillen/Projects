import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>A showcase E-Commerce shop Project</p>
      <p>By <em>Pekillen </em>2022</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/piotr-kwiatkowski-9ba0191a3/"><AiFillLinkedin/></a>        
        <a href="https://twitter.com/Pekillen"><AiOutlineTwitter /></a>
        <a href="https://www.facebook.com/piotrekblady.kwiatkowski"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/perfect_story_to_tell/"><AiFillInstagram /></a>
        <a href="https://github.com/Pekillen/Projects"><AiFillGithub /></a>
      </p>
    </div>
  )
}

export default Footer