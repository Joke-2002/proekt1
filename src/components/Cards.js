import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <div align="center">
      <div
        style={{
          width: "80%",
          border: "2px solid black",
          background: "Gainsboro",
        }}
        className=""
      >
        <h1 align="center" style={{ background: "secondary" }}>
          Hello world
        </h1>
        <div className="d-flex justify-content-around flex-wrap w-100 mt-1">
          {props.name.map((e) => {
            return (
              <>
                <Card
                  as={Link}
                  to="/Pdf_dok"
                  style={{
                    width: "15rem",
                    textDecoration: "none",
                  }}
                >
                  <Card.Img variant="top" src="https://ouch-cdn2.icons8.com/-bGtxJt9HrHjYorQ5QaY3j88okerOk6Mph3ztsoVRMw/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA3/L2VjMDYyOTNiLWU5/OTUtNDAxNS1iYTEz/LTNmMjkxNmJlYTI4/NS5wbmc.png" />
                  <Card.Body>
                    <Card.Title align="center" className="title">
                      {e.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
