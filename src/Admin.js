// import React from "react";
// import { Card, FormControl, Form, Button } from "react-bootstrap";
// export default function Admin() {
//   return (
//     <>
//       <div className="d-flex justify-content-around flex-wrap w-100 mt-1">
//         <>
//           <Card
//             style={{
//               width: "25rem",
//               border: "2px solid black",
//               boxShadow: "10px 10px 20px black",
//             }}
//           >
//             <Card.Body>
//               <FormControl
//                 placeholder="Документтин аты"
//                 aria-label="Recipient's username"
//                 aria-describedby="basic-addon2"
//                 type="text"
//               />
//               <FormControl
//                 className="mt-1"
//                 placeholder="ID номер жазыңыз"
//                 aria-label="Recipient's username"
//                 aria-describedby="basic-addon2"
//                 type="number"
//               />
//               <FormControl
//                 className="mt-1"
//                 placeholder="Датаны жазыңыз"
//                 aria-label="Recipient's username"
//                 aria-describedby="basic-addon2"
//                 type="data"
//               />
//               <Form.Group controlId="formFile" className="mb-3">
//                 <Form.Label>PDF сүрөт үчүн...</Form.Label>
//                 <Form.Control type="file" />
//               </Form.Group>
//               <div align="center">
//                 <Button style={{ width: "40%" }} variant="outline-primary">
//                   Жөнөтүү
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import App from "./App";
export default function Admin() {
  const [item, setItem] = JSON.parse(localStorage.getItem("key")) || [];
  ud = (r) => {
    item.splice(r, 1);
    setItem((p) => {
      return { item: p.item };
    });
    localStorage.setItem("key", JSON.stringify(this.state.item));
  };

  red = (a) => {
    const jom = prompt("");
    item.splice(a, 1, jom);
    setItem((s) => {
      return { item: s.item };
    });
    localStorage.setItem("key", JSON.stringify(this.state.item));
  };
  return (
    <>
      <Row>
        <Col>
          <Button
            className="button bg-warning"
            size="lg"
            onClick={() => {
              let pro = prompt("");
              setItem((p) => {
                const a = [...p.item, pro];
                localStorage.setItem("key", JSON.stringify(a));
                return { item: a };
              });
            }}
          >
            Добавить
          </Button>
        </Col>
        <Col>
          {this.state.item.map((v, i) => {
            return (
              <div className="div1">
                <h1 className="h1">{v}</h1>
                <div
                  className={
                    "d-flex justify-content-between align-items-center"
                  }
                >
                  <Button className="button2" onClick={() => this.red(i)}>
                    Редактировать
                  </Button>
                  <Button
                    className="button1 bg-danger"
                    onClick={() => this.ud()}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
