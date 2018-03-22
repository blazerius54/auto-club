import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fb from '../images/main/social/fb.png'
import tw from '../images/main/social/tw.png'
import google from '../images/main/social/google.png'
import vk from '../images/main/social/vk.png'

class Menu extends Component {
    render () {

        return (
            <header className='main-header'>
            <div className='inner-main-header'>
              <div className="menu">
                <Link to={'/'}>home</Link>
                <a href="">about</a>
                <a href="">contact us</a>
              </div>
              <div className="social">
                <a href="http://facebook.com" target="_blank"><img src={fb} alt=""/></a>
                <a href="http://twitter.com" target="_blank"><img src={tw} alt=""/></a>
                <a href="http://plus.google.com" target="_blank"><img src={google} alt=""/></a>
                <a href="http://vk.com" target="_blank"><img src={vk} alt=""/></a>
              </div>
            </div>
            
          </header>
        )
    }
}

export default Menu