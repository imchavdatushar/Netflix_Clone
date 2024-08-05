import React from 'react';
import background from '../assets/login.jpg';
import styled from 'styled-components';


const Components = styled.div`
  height : 100vh;
  width : 100vw;
  img{
    height : 100vh;
    width : 100vw;
  }
`;


export default function BackgroundImage() {
  return (
    <Components>
      <img src={background} alt='backgroundImage'/>
    </Components>
  );
}

