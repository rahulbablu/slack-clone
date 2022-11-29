import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { auth, provider } from "../firebase";

const Login = () => {

  const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error => alert(error.messages))
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={logo} alt="logo" />
        <Button onClick={signIn} >Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    background-color: #0a8d48 !important;
    text-transform: inherit !important;
    color: white;
  }
`;
