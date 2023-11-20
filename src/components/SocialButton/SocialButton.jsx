import React from 'react';
import './SocialButton.scss';

const SocialButton = (props) => {
  return (
  <div className='SocialButton'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d={props.iconsvg}></path>
    </svg>
    <a target="_blank" rel="noreferrer" href={props.link}>{props.text}</a>
  </div>
  );
};

export default SocialButton;