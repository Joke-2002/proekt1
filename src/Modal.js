// import React, { Component } from 'react'
// import {Button, Col, Row} from 'react-bootstrap'
// export default class Modal extends Component {
//   state = {
//     item: JSON.parse(localStorage.getItem('key')) || []  
//   }
//   ud = (r)=> {
//     this.state.item.splice(r, 1)
//     this.setState((p)=>{
//     return{item: p.item}
//     })
//     localStorage.setItem('key', JSON.stringify(this.state.item))}

//   red = (a) => {
//     const jom = prompt('')
//     this.state.item.splice(a, 1, jom)
//     this.setState((s)=>{
//       return{item: s.item}
//     })
//     localStorage.setItem('key',JSON.stringify(this.state.item))}
//   render() {
//     return (
//       <>
//       <Row>
//         <Col>
//         <Button className='button bg-warning' size='lg' onClick={()=> {
//             let pro = prompt('')
//             this.setState((p) => {
//               const a = [...p.item, pro] 
//               localStorage.setItem('key', JSON.stringify(a))
//               return{item: a}
//             })}}>Добавить</Button>
//         </Col>
//         <Col>
//          {this.state.item.map((v, i) => {
//            return(
//             <div className='div1'>
//             <h1 className='h1'>{v}</h1>
//               <div className={'d-flex justify-content-between align-items-center'}>
//                 <Button className='button2' onClick={() => this.red(i)}>Редактировать</Button>
//                 <Button className='button1 bg-danger' onClick={()=> this.ud() }>Удалить</Button>
//                </div>
//           </div>
//            )
//          })}
//         </Col>
//       </Row>
      
//       </>
//     )
//   }
// }
