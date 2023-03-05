import React from 'react';
import { BsTwitter, BsInstragram, BsGithub, BsFacebook } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsFacebook />
        </div>
        <div>
          <a href='https://github.com/AsteriskM1' target='_blank' rel='noreferrer'>
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia