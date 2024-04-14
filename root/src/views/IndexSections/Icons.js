/*!
=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================
*/

import React from "react";
import { Container, Row, Col } from "reactstrap";
import demoImage from "assets/img/brand/demo.png"; // Make sure to import the image from your assets folder

class Icons extends React.Component {
  render() {
    return (
      <>
        <section>
          <Container style={{marginTop: '50px'}}>
            <Row>
              <Col md="6" style={{ marginTop: '90px 0', marginBottom: '20px 0' }}> {/* Adjust margin as needed */}
                <p>
                  Our terrain generation program, Endless Altitude, offers a cutting-edge solution for creating expansive, 
                  infinitely detailed terrains tailored to any virtual environment. Users can easily specify the type 
                  of landscape they desire—be it lush forests, rugged mountains, or serene lakesides—and incorporate 
                  unique features to meet their specific needs. The intuitive prompt-based interface makes terrain 
                  design accessible to both beginners and experienced developers, ensuring that every creation is 
                  both artistically appealing and technically robust. Endless Altitude employs advanced algorithms to ensure 
                  that each terrain is not only beautiful but also optimized for performance in gaming and simulation 
                  platforms. This program is the perfect tool for developers looking to bring their virtual worlds to 
                  life with realism and precision.
                </p>
              </Col>
              <Col md="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={demoImage} alt="Demo Image" style={{ maxWidth: '100%', height: 420, objectFit: 'cover' }} />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
