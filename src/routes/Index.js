/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import { UserContext, AUTHENTICATING } from "../firebase/auth";

import LogInOptions from "../components/LogInOptions";
import SignInWithEmailLink from "../components/SignInWithEmailLink";
import SignInViaGitHub from "../components/SignInViaGitHub";
import EmailAndPasswordSignUp from "../components/EmailAndPasswordSignUp";
import EmailAndPasswordSignIn from "../components/EmailAndPasswordSignIn";

import HotPinkLogo from "../img/hot-pink-logo.png";

const buttonStyles = css`
  background-color: white;
  border: 2px solid rebeccapurple;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  color: rebeccapurple;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  text-align: center;
`;

const listItemStyles = css`
  list-style-type: none;
  margin: 12px 0;
  padding: 8px 0;
`;

const ulStyles = css`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  max-width: 320px;
`;

const hrStyles = css`
  color: rebeccapurple;
  width: 100%;
`;

const Index = () => {
  const user = useContext(UserContext);
  if (user === AUTHENTICATING) {
    return null;
  }
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex: 0 0 40%;
          background-color: rebeccapurple;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          alt="logo"
          src={HotPinkLogo}
          css={css`
            width: 200px;
          `}
        />
        <h3
          css={css`
            color: white;
            font-size: 48px;
            text-align: center;
          `}
        >
          Learn Code <br /> For Free
        </h3>
      </div>
      <div
        css={css`
          flex: 0 0 60%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: rebeccapurple;
            font-size: 48px;
          `}
        >
          Code Quests
        </h1>
        <Switch>
          <Route path="/" exact component={LogInOptions} />
          <Route path="/sign-in/github" exact component={SignInViaGitHub} />
          <Route
            path="/sign-in/passwordless"
            exact
            component={SignInWithEmailLink}
          />
          <Route path="/sign-up" exact component={EmailAndPasswordSignUp} />
          <Route path="/sign-in" exact component={EmailAndPasswordSignIn} />
        </Switch>
      </div>
    </div>
  );
};

export default Index;
