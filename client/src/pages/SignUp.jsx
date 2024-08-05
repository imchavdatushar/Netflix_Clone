import React, { useState } from 'react';
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {


  const [showPassword , setShowPassword] = useState(false);
  const [formValues , setFormValuea] = useState({
      email : "",
      password : "",
  });

  let navigate = useNavigate();

  const handleSignIn = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({email:formValues.email, password:formValues.password}))
    const response = await fetch("http://localhost:4000/signup" , {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({email:formValues.email, password:formValues.password})
    });
    const json = await response.json();
    console.log(json);

    if(!json.success){
        alert("Enter valid credentials")
    }else{
        alert("Register Successfully");
        navigate('/netflix')
    
    }
  }

  return (
    <Components showPassword={showPassword}>
      <BackgroundImage/>
      <div className="content">
      <Header login/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">
        <h1>Unlimited movies, TV shows and more</h1>
        <h4>Watch anywhere, cancel anytime.</h4>
        <h6>Read to watch? Enter your email to create or restart membership</h6>
      </div>
      <div className="form">
        <input type='email' placeholder='Enter your email' name='email' 
              value={formValues.email} 
              onChange={ (e) => setFormValuea({...formValues,[e.target.name]:e.target.value})}
        />
        {
          showPassword &&
          <input type='password' placeholder='Enter your password' name='password'
                value={formValues.password} 
                onChange={ (e) => setFormValuea({...formValues,[e.target.name]:e.target.value})}
          />
        }
        
        {
          !showPassword &&
          <button onClick={() => setShowPassword(true)}>Get started</button>
        }
        
      </div>
      <button onClick={handleSignIn}>Sign Up</button>
      </div>
      </div>
   </Components>
  );
}

const Components = styled.div`
  position : relative;
  .content{
    position : absolute;
    top : 0;
    left : 0;
    background-color : rgb(0,0,0,0.5);
    height : 100vh;
    width : 100vw;
    display : grid;
    grid-template-rows:15vh 85vh;
  .body{
    gap : 1rem;
      .text{
        gap : 1rem;
        text-align : center;
        font-size : 2rem;
        h1{
          padding : 0 25rem;
        }
    }
    .form{
      display : grid;
      grid-template-columns: ${({showPassword})=> showPassword ? "1fr 1fr" : "2fr 1fr"} ;
      width : 60%;
      input{
      color : black;
      border : none;
      padding : 1.5rem;
      font-size : 1.2rem;
      border : 1px solid black;
        &: focus{
          outline : none;
        }
      }
      button{
        padding : 0.5rem 1rem;
        background-color : #e50914;
        border : none ; 
        cursor : pointer;
        color : white;
        border-radius : 0.2rem;
        font-weight : bolder;
        font-size : 1.05rem;
      }
      }
      button{
        padding : 0.5rem 1rem;
        background-color : #e50914;
        border : none ; 
        cursor : pointer;
        color : white;
        border-radius : 0.2rem;
        font-weight : bolder;
        font-size : 1.05rem;
      }
  }
  }
`;

