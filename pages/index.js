import React from "react";
import { UncontrolledCarousel, Row, Col, Button } from "reactstrap";
import { withRouter } from "next/router";
// import Example from './slideshow'
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const logo = require("../public/mono-solution-horizontal.png");

const Company = (props) => {
  const { logo, logoWidth, logoHeight, logoPosition, name, description } =
    props;
  return (
    <div className={styles.flexContainerB}>
      {logoPosition === "left" && (
        <div className={styles.pImgStyle}>
          <a className={styles.divS}>
            <Image src={logo} width={logoWidth} height={logoHeight} />
          </a>
        </div>
      )}

      <div className={styles.pTextStyle}>
        <div
          style={{
            fontFamily: "Mohave",
            fontStyle: "bold",
            fontSize: "32px",
            margin: "32px 16px 0 16px",
            marginBottom: "16px",
          }}
        >
          {name}
        </div>
        <div className={styles.descriptionD3}>{description}</div>
      </div>
      {logoPosition === "right" && (
        <div className={styles.pImgStyle}>
          <a className={styles.divS}>
            <Image src={logo} width={logoWidth} height={logoHeight} />
          </a>
        </div>
      )}
    </div>
  );
};
const Careers = (props) => {
  const { card, name, description } = props;
  return (
    <div className={styles.cardF}>
      <div className={styles.titleF}>{name}</div>
      <div className={styles.descriptionF3}>{description}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <Button
          style={{
            width: "144px",
            height: "36px",
            textAlign: "center",
          }}
        >
          Apply now
        </Button>
      </div>
    </div>
  );
};
const Services = (props) => {
  const { img, imgWidth, imgHeiht, name, description } = props;
  return (
    <div className={styles.card1}>
      <Image src={img} width={imgWidth} height={imgHeiht} />
      <div
        style={{
          fontFamily: "Mohave",
          fontStyle: "bold",
          fontSize: "32px",
          textAlign: "center",
          margin: "32px 16px",
        }}
      >
        {name}
      </div>
      <div className={styles.descriptionA}>{description}</div>
    </div>
  );
};
const Development = (props) => {
  const { img, name, imgWidth, imgHeiht } = props;
  return (
    <div className={styles.cardB}>
      <Image src={img} width={imgWidth} height={imgHeiht} />

      <div className={styles.titleC}>{name}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Mohave:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ul className={styles.ul}>
        <div style={{ marginLeft: "32px", marginTop: "17px", display: "flex" }}>
          {/* <Image src="/Component471.svg" layout="fill" objectFit="contain" /> */}
        </div>
      </ul>
      <main className={styles.main}>
        <div className={styles.mainTitle1}>
          <div className={styles.title1}>MONO SOLUTION IS A TECH COMPANY</div>

          <div className={styles.description}>
            We strive for bringing innovations to interdisciplinary fields by
            carefully designing and developing our digital solutions with best
            practices of software engineering in mind.
          </div>
        </div>
      </main>
      <div className={styles.body}>
        <div
          style={{
            width: "1300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={styles.mainTitle}>
            <div className={styles.title2}>SERVICES</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div className={styles.grid1}>
          <div className={styles.card1}>
            <Services
              img="/Mask Group 13.png"
              imgHeiht="216px"
              imgWidth="392px"
              name="Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            />
          </div>
          <div style={{ width: "32px" }} />
          <div className={styles.card1}>
            <Services
              img="/Mask Group 20.png"
              imgHeiht="216px"
              imgWidth="392px"
              name="Application"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            />
          </div>
          <div style={{ width: "32px" }} />
          <div className={styles.card1}>
            <Services
              img="/Mask Group 21.png"
              imgHeiht="216px"
              imgWidth="392px"
              name="Mobile Apps"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            />
          </div>
        </div>
      </div>
      <div className={styles.main3}>
        <div>
          <div className={styles.title4}>projects</div>
          <div className={styles.description}>
            We strive for bringing innovations to interdisciplinary fields by
            carefully designing and developing our digital solutions with best
            practices of software engineering in mind.
          </div>
        </div>
        <div
          style={{
            width: "1300px",
            display: "flex",
            height: "768px",
            justifyContent: "center",
          }}
        >
          <div className={styles.mainB}>
            <div>
              <div className={styles.imgSty}>
                <Image
                  src="/Group 78@2x.png"
                  top="2999px"
                  left="60px"
                  width="604px"
                  height="184px"
                />
              </div>
              <div className={styles.titleT}>Health data information</div>
              <div className={styles.descriptionT}>
                We strive for bringing innovations to interdisciplinary fields
                by carefully designing and developing our digital solutions with
                best practices of software engineering in mind.
              </div>
            </div>
            <div style={{ width: "32px" }} />
            <div>
              <div className={styles.imgSty}>
                <Image
                  src="/Group 77.png"
                  top="1824px"
                  left="60px"
                  width="604px"
                  height="184px"
                />
              </div>
              <div className={styles.titleT}>liver center</div>
              <div className={styles.descriptionT}>
                We strive for bringing innovations to interdisciplinary fields
                by carefully designing and developing our digital solutions with
                best practices of software engineering in mind.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bodyA}>
        <div className={styles.title3}>DEVELOPMENT STAGES</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
        <div
          style={{
            width: "1300px",
            display: "flex",
            height: "768px",
            justifyContent: "center",
          }}
        >
          <div className={styles.grid2}>
            <Development
              img="/iconuud.png"
              imgHeiht="104px"
              imgWidth="104px"
              name="Design"
            />
            <Development
              img="/Group 74@2x.png"
              imgHeiht="104px"
              imgWidth="104px"
              name="Develop"
            />
            <Development
              img="/Group 75.png"
              imgHeiht="104px"
              imgWidth="104px"
              name="Test"
            />
            <Development
              img="/Group 76@2x.png"
              imgHeiht="104px"
              imgWidth="104px"
              name="Launch"
            />
          </div>
        </div>
      </div>
      {/* <div style={{width:'1300px',}}> */}
      <div className={styles.flexContainer}>
        <div className={styles.gridD}>
          <Image
            src="/Mask Group 12@2x.png"
            alt="Vercel Logo"
            // top="3304px"
            left="60px"
            width="604px"
            height="336px"
          />
          <div className={styles.divStyles}>
            <div className={styles.titleD}>HOW DO WE WORK</div>
            <div className={styles.descriptionD1}>
              At Mono Solution, we care for each other we support one another to
              gain a wide circle of knowledge we prioritize results over working
              hours Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.gridDa}>
          <div className={styles.divStyles}>
            <div className={styles.titleD2}>HOW DO WE WORK</div>
            <div className={styles.descriptionD2}>
              At Mono Solution, we care for each other we support one another to
              gain a wide circle of knowledge we prioritize results over working
              hours Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
          {/* <h style={{ width: "32px" }}></h> */}
          <Image
            src="/Mask Group 11@2x.png"
            alt="Vercel Logo"
            // top="3304px"
            // rigth="60px"
            width="604px"
            height="336px"
          />
        </div>
      </div>
      {/* </div> */}
      <div className={styles.body}>
        <h1 className={styles.title}>PARTNERS</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className={styles.partnersSty}>
          <div className={styles.flexContainerB}>
            <Company
              logo={"/MicrosoftTeams-image (2)@2x.png"}
              logoWidth="184px"
              logoHeight="66px"
              logoPosition="left"
              name={"Onom Foundation"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              }
            />
            <Company
              logo={"/MicrosoftTeams-image (6)@2x.png"}
              logoWidth="192px"
              logoHeight="35px"
              logoPosition="left"
              name={"Chorus"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              }
            />
          </div>
          <div className={styles.flexContainerC}>
            <Company
              logo={"/Group 58@2x.png"}
              logoWidth="179px"
              logoHeight="64px"
              logoPosition="right"
              name={"LIVER CENTER"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              }
            />

            <Company
              logo={"/dobuicon@2x.png"}
              logoWidth="74px"
              logoHeight="97px"
              logoPosition="right"
              name={"Dobu"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              }
            />
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.title2}>CAREERS</div>

        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
      </main>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.gridF}>
          <Careers
            name={"Onom Foundation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
          />
          <Careers
            name={"Onom Foundation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
          />
          <Careers
            name={"Onom Foundation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
          />
          <Careers
            name={"Onom Foundation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

{
  /* <Link href="/form"> 
      <a className={styles.btn}> See Liver Center</a>
      </Link> */
}
