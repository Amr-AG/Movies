/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { ImFacebook2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

export default function Footer() {
  return (
    <div>
      <Container
        style={{
          background: "#0c0c0c",
          minHeight: "100px",
          padding: "20px 0",
        }}
        fluid
      >
        <ul
          style={{
            padding: "10px 0",
            listStyle: "none",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li>
            <a
              href="https://www.facebook.com/amrgamal0/"
              target="_blank"
              rel="preferrer noreferrer"
            >
              <ImFacebook2 className="socialIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amr-gamal-3b6b70198/?locale=en_US"
              target="_blank"
              rel="preferrer noreferrer"
            >
              <GrLinkedin className="socialIcon" />
            </a>
          </li>
        </ul>
        <span style={{ margin: " auto", color: " #2a2a2a" }}>
          © 2023 Created By Amr Gamal
        </span>
      </Container>
    </div>
  );
}
