import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgAboutB from "../assets/image/main/jpg/l5-about-big.jpg";
import imgAboutM from "../assets/image/main/jpg/l5-about-mid.jpg";
import imgAboutP from "../assets/image/main/png/l5-about-pattern.png";

const Content1 = () => (
  <>
    <div className="content-section bg-default-4 pt-lg-25 pt-15 pb-10 pb-lg-15">
      <Container>
        <Row>
          <Col xl="6" lg="7" md="8">
            <div className="section-title mb-13">
              <h4 className="pre-title gr-text-12 text-red text-uppercase mb-9">
                Our Story
              </h4>
              <h2 className="title gr-text-4">
                We know how everything works and why you will eventually need a
                team like ours to get you back on track.
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="5">
            <div
              className="about-image img-big pt-lg-13"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img className="w-100 rounded-10" src={imgAboutB} alt="" />
            </div>
          </Col>
          <Col lg="7">
            <Row className="justify-content-between align-items-center pl-lg-13">
              <Col md="6">
                <div
                  className="about-image img-mid mt-9 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <img className="w-100 rounded-10" src={imgAboutM} alt="" />
                  <div
                    className="abs-pattern gr-abs-tr-custom"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <img src={imgAboutP} alt="" />
                  </div>
                </div>
              </Col>
              <Col xl="10">
                <div className="about-content mt-12 mt-lg-23">
                  <p className="gr-text-9">
                    We make sure to be updated with the latest trends , tech
                    stacks in order to deliver the best product . We believe
                    that this is what it separates us from the rest.Till
                    yesterday we were like the rest , but today we are aiming to
                    be the best.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content1;
