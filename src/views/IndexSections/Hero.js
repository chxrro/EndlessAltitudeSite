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
import mainBackground from "assets/img/brand/main-background.png"; // Import the background image

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" style={{ backgroundImage: `url(${mainBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background Image */}
            
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/endless-altitude-text.png")}
                      style={{ width: "400px" }}
                    />
                    <p className="lead text-white">
                      The easiest way to generate flawless terrain for your open world Unity game.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
