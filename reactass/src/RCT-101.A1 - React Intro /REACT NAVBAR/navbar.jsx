import React from "react";
import Logo from "./Logo";



export default function Navbar() {
  return (
    <>
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3 style={{ color: "white" }}>LOGOBAKERY</h3>
        <div style={{display:"flex"}}>
          <h3>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
              href="Logo"
            >
              Logo
            </a>
          </h3>
          <h3>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
              href="Links"
            >
              Links
            </a>
          </h3>
          <h3>
            {" "}
            <a
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
              href="Button"
            >
              Button
            </a>
          </h3>
        </div>
        <button
          style={{
              marginTop:"10px",
            borderRadius: "20px",
            width: "100px",
            height: "40px",
            background: "skyblue",
            color: "white",
            border: "0",
            cursor: "pointer",
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
}
