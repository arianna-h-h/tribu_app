import React from 'react';
import video from './video.mp4'
export const Modal = ({ content }) => (
  <div className='bg-brown modal'>
    <video className='video' autoPlay='true' controls>
      <source src={video} type='video/mp4'/>
    </video>
  </div>
);
