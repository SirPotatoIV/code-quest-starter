/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext, AUTHENTICATING } from "../firebase/auth";

import Button from "./Button";

const buttonStyle = css`
  width: 100%;
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
  width: 240px;
  height: 320px;
`;

const hrStyles = css`
  color: rebeccapurple;
  width: 100%;
`;

const LogInOptions = ({ history }) => {
  const user = useContext(UserContext);
  if (user === AUTHENTICATING) {
    return null;
  }
  return (
    <>
      <ul css={ulStyles}>
        <li css={listItemStyles}>
          <Button
            css={buttonStyle}
            onClick={() => history.push("/sign-in/github")}
          >
            sign in via github
          </Button>
        </li>
        <li css={listItemStyles}>
          <Button
            css={buttonStyle}
            onClick={() => history.push("/sign-in/passwordless")}
          >
            sign in passwordless
          </Button>
        </li>
        <li css={listItemStyles}>
          <Button css={buttonStyle} onClick={() => history.push("/sign-in")}>
            sign in
          </Button>
        </li>
        <hr css={hrStyles} />
        <li css={listItemStyles}>
          <Button css={buttonStyle} onClick={() => history.push("/sign-up")}>
            sign up
          </Button>
        </li>
      </ul>
    </>
  );
};

export default LogInOptions;
