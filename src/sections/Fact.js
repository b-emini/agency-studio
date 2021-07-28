import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Fact = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 pt-lg-15 pb-7 pb-lg-24">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">SEO vs Social Media</h3>
              <p className="gr-text-8 mb-0">
                According to research , in 2021 SEO drives 1000%+ more traffic
                than organic social media. <br />
                Source:{" "}
                <a href="https://videos.brightedge.com/research-report/BrightEdge_ChannelReport2019_FINAL.pdf">
                  BrightEdge
                </a>
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={57} />
                  </span>
                  % lost users
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                2021 got us with the fact that 57% of internet users say they
                won’t recommend a business with a poorly designed website on
                mobile.
                <br /> Source :
                <a href="https://www.sweor.com/firstimpressions">SWEOR</a>
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} decimal="." decimals={1} end={3.5} />
                  </span>
                  billion
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                3.5 billion people all over the world use smartphones. That
                number is anticipated to jump to 3.8 billion by the end of 2021.
                <br />
                Source:{" "}
                <a href="https://www.quicksprout.com/website-statistics/#Mobile">
                  QUICKSPROUT
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Fact;
