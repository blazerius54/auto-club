import React from 'react';
import Menu from './Menu';
import fb from '../images/main/social/fb.png'
import tw from '../images/main/social/tw.png'
import google from '../images/main/social/google.png'
import vk from '../images/main/social/vk.png'

const Header = () => {
  return (
      <header className='main-header'>
      <div className='inner-main-header'>
        <Menu />
        <div className="social">
          <a href="http://facebook.com"><img src={fb} alt=""/></a>
          <a href="http://twitter.com"><img src={tw} alt=""/></a>
          <a href="http://plus.google.com"><img src={google} alt=""/></a>
          <a href="http://vk.com"><img src={vk} alt=""/></a>
        </div>
      </div>
    </header>
  )
}

export default Header