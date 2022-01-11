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

const items = [
  {
    src: "https://source.unsplash.com/1000x750",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: logo,
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "../public/ezgif.com-gif-maker.gif",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

export default function Home() {
  return (
    // <div className={styles.monoLogo}>
    <div>
      {/* <div style={{display:'flex', justifyContent:"flex-end"}}>
        <Link href="https://nextjs.org">
       <button className={styles.buttonStyle}> Next.js </button>  
       </Link> 
       </div> */}
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} class="active" href="#home">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#news">
              News
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#contact">
              Contact
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#about">
              About
            </a>
          </li>
        </ul>

        {/* <div className={styles.background}></div> */}

        <main className={styles.main}>
          <h1 className={styles.title}>MONO SOLUTION IS A TECH COMPANY</h1>

          <p className={styles.description}>
            We strive for bringing innovations to interdisciplinary fields by
            carefully designing and developing our digital solutions with best
            practices of software engineering in mind.
          </p>
        </main>
        <div className={styles.body}>
          <h1 className={styles.title}>SERVICES</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className={styles.grid}>
            <a className={styles.card}>
              <Image
                src="/Mask Group 13.png"
                alt="Vercel Logo"
                width="392px"
                height="216px"
              />
              <h4 className={styles.titleA}>Website</h4>
              <p className={styles.descriptionA}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </a>
            <a className={styles.card}>
              <Image
                src="/Mask Group 20.png"
                alt="Vercel Logo"
                width="392px"
                height="216px"
              />
              <h4 className={styles.titleA}>Application</h4>
              <p className={styles.descriptionA}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </a>
            <a className={styles.card}>
              <Image
                src="/Mask Group 21.png"
                alt="Vercel Logo"
                width="392px"
                height="216px"
              />
              <h4 className={styles.titleA}>Mobile Apps</h4>
              <p className={styles.descriptionA}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </a>
          </div>
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>projects</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className={styles.mainB}>
          <a className={styles.card}>
            <Image
              src="/Group 78@2x.png"
              // alt="Vercel Logo"
              // width="392px"
              // height="216px"

              top="1824px"
              left="60px"
              width="604px"
              height="184px"
            />
            <h4 className={styles.titleA}>Health data information</h4>
            <p className={styles.descriptionA}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </a>
          <a className={styles.card}>
            <Image
              src="/Group 77.png"
              top="1824px"
              left="60px"
              width="604px"
              height="184px"
            />
            <h4 className={styles.titleB}>Liver center</h4>
            <p className={styles.descriptionB}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </a>
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>DEVELOPMENT STAGES</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className={styles.grid}>
            <a className={styles.cardB}>
              <Image
                src="/iconuud.png"
                alt="Vercel Logo"
                top="2712px"
                left="474px"
                width="104px"
                height="104px"
              />

              <h4 className={styles.titleC}>Design</h4>
            </a>
            <a className={styles.cardB}>
              <Image
                src="/Group 55.png"
                top="2712px"
                left="474px"
                width="104px"
                height="104px"
              />

              <h4 className={styles.titleC}>Develop</h4>
            </a>
            <a className={styles.cardB}>
              <Image
                src="/Group 75.png"
                alt="Vercel Logo"
                top="2712px"
                left="474px"
                width="104px"
                height="104px"
              />

              <h4 className={styles.titleC}>Test</h4>
            </a>
            <a className={styles.cardB}>
              <Image
                src="/Group 76.png"
                alt="Vercel Logo"
                top="2712px"
                left="474px"
                width="104px"
                height="104px"
              />
              <h4 className={styles.titleC}>Launch</h4>
            </a>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.grid}>
            <Image
              src="/Mask Group 12@2x.png"
              alt="Vercel Logo"
              // top="3304px"
              left="60px"
              width="604px"
              height="336px"
            />
            <div className={styles.divStyles}>
              <h1 className={styles.titleD}>HOW DO WE WORK</h1>
              <p className={styles.descriptionD1}>
                At Mono Solution, we care for each other we support one another
                to gain a wide circle of knowledge we prioritize results over
                working hours Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.grid}>
            <div className={styles.divStyles}>
              <h1 className={styles.titleD}>HOW DO WE WORK</h1>
              <p className={styles.descriptionD2}>
                At Mono Solution, we care for each other we support one another
                to gain a wide circle of knowledge we prioritize results over
                working hours Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <Image
              src="/Mask Group 11@2x.png"
              alt="Vercel Logo"
              top="3304px"
              left="60px"
              width="604px"
              height="336px"
            />
          </div>
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>PARTNERS</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className={styles.flexContainer}>
            <p className={styles.pImgStyle}>
              <Image
                src="/MicrosoftTeams-image (2)@2x.png"
                // alt="dobuicon"
                top="4355px"
                // left="1099px"
                width="179px"
                height="64px"
              />
            </p>
            <p className={styles.pTextStyle}>
              {" "}
              <h1 className={styles.titleE}>Onom Foundation</h1>
              <p className={styles.descriptionD3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </p>
            <p className={styles.pImgStyle}>
              <Image
                src="/MicrosoftTeams-image (6)@2x.png"
                // top="4182px"
                // left="736px"
                justify-content="center"
                width="192px"
                height="35px"
              />
            </p>
            <p className={styles.pTextStyle}>
              {" "}
              <h1 className={styles.titleE}>Liver Center</h1>
              <p className={styles.descriptionD3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </p>
          </div>
          <div className={styles.flexContainer}>
            <p className={styles.pTextStyle}>
              {" "}
              <h1 className={styles.titleE}>Liver Center</h1>
              <p className={styles.descriptionD3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </p>
            <p className={styles.pImgStyle}>
              <Image
                src="/Group 58@2x.png"
                // alt="dobuicon"
                top="4355px"
                left="1099px"
                width="179px"
                height="64px"
              />
            </p>
            <p className={styles.pTextStyle}>
              <h1 className={styles.titleE}>Dobu</h1>
              <p className={styles.descriptionD3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </p>
            <p className={styles.pImgStyle}>
              <Image
                src="/dobuicon@2x.png"
                // alt="dobuicon"
                top="4355px"
                left="1099px"
                width="74px"
                height="97px"
              />
            </p>
          </div>
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>CAREERS</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </main>

        <div className={styles.cardF}>
          <a className={styles.card}>
            <h4 className={styles.titleB}>Onom Foundation</h4>
            <p className={styles.descriptionB}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Button> Apply now</Button>
          </a>
          <a className={styles.card}>
            <h4 className={styles.titleB}>Onom Foundation</h4>
            <p className={styles.descriptionB}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Button> Apply now</Button>
          </a>
          <a className={styles.card}>
            <h4 className={styles.titleB}>Onom Foundation</h4>
            <p className={styles.descriptionB}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Button> Apply now</Button>
          </a>
          <a className={styles.card}>
            <h4 className={styles.titleB}>Onom Foundation</h4>
            <p className={styles.descriptionB}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Button> Apply now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// //import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
