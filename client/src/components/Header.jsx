import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link, useNavigate} from "react-router-dom"




export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className='flex a-center'>
      <div className="logo">
        <Link to={"/"}><img src={logo} alt='logo'/></Link>
      </div>
      <button onClick={ () => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log in" : "Sign In"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  
  .logo {
    img {
      height: 5rem;
    
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    margin-left : auto;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
