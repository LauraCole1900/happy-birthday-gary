import React from "react";
import { Bounce, Fade, Flip, LightSpeed, Roll, Rotate, Zoom } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const  Birthday = () => {
  return (
    <Container className="container">
      <Row className="happy">
        <div>
          <Zoom left>
            <Col sm={1}><h1 className="red">H</h1></Col>
          </Zoom>
        </div>
        <div>
          <Bounce top>
            <Col sm={1}><h1 className="blue">A</h1></Col>
          </Bounce>
        </div>
        <div>
          <Flip top>
            <Col sm={1}><h1 className="green">P</h1></Col>
          </Flip>
        </div>
        <div>
          <Flip bottom>
            <Col sm={1}><h1 className="purple">P</h1></Col>
          </Flip>
        </div>
        <div>
          <Fade right>
            <Col sm={1}><h1 className="orange">Y</h1></Col>
          </Fade>
        </div>
      </Row>
      <Row className="birthday">
        <Col sm={4}></Col>
        <div>
          <Roll left>
            <Col sm={1}><h1 className="purple">B</h1></Col>
          </Roll>
        </div>
        <div>
          <LightSpeed right>
            <Col sm={1}><h1 className="yellow">I</h1></Col>
          </LightSpeed>
        </div>
        <div>
          <Rotate top right>
            <Col sm={1}><h1 className="red">R</h1></Col>
          </Rotate>
        </div>
        <div>
          <Bounce bottom>
            <Col sm={1}><h1 className="purple">T</h1></Col>
          </Bounce>
        </div>
        <div>
          <Roll top>
            <Col sm={1}><h1 className="green">H</h1></Col>
          </Roll>
        </div>
        <div>
          <Rotate bottom left>
            <Col sm={1}><h1 className="blue">D</h1></Col>
          </Rotate>
        </div>
        <div>
          <Flip left>
            <Col sm={1}><h1 className="yellowgreen">A</h1></Col>
          </Flip>
        </div>
        <div>
          <LightSpeed left>
            <Col sm={1}><h1 className="orange">Y</h1></Col>
          </LightSpeed>
        </div>
      </Row>
      <Row className="gary">
        <Col sm={3}></Col>
        <div>
          <Rotate bottom right>
            <Col sm={1}><h1 className="blue">G</h1></Col>
          </Rotate>
        </div>
        <div>
          <LightSpeed right>
            <Col sm={1}><h1 className="red">A</h1></Col>
          </LightSpeed>
        </div>
        <div>
          <Flip right>
            <Col sm={1}><h1 className="green">R</h1></Col>
          </Flip>
        </div>
        <div>
          <Zoom bottom>
            <Col sm={1}><h1 className="yellow">Y</h1></Col>
          </Zoom>
        </div>
      </Row>
    </Container >
  )
}

export default Birthday;