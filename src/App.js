import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Footer from './components/footer';
import NotionLogo from './components/notionLogo';
import ibmLogo from './images/ibm-logo.png';
import loomLogo from './images/loom-logo.png';
import nikeLogo from './images/nike-logo.png';
import notionEmoji from './images/notion_emoji.png';
import pixarLogo from './images/pixar-logo.png';
import slackLogo from './images/slack-logo.png';
import spotifyLogo from './images/spotify-logo-v2.png';

const appStyles = css`
  background-color: #fffefc;
  min-height: 100vh;
`;

const navigationWrapStyles = css`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 200px;
  background-color: #fffefc;
`;
const navigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  font-weight: 500;

  nav {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    margin-left: 15px;
  }

  span {
    padding: 0 15px 2px 15px;
  }
`;

const smallButton = css`
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  padding: 0 12px;
  color: rgb(255, 255, 255);
  background: rgb(58, 160, 218);
  border: 1px solid rgb(48, 139, 191);
  box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
`;

const mediumButton = css`
  border-radius: 3px;
  font-size: 20px;
  font-weight: 500;
  height: 45px;
  max-width: 180px;
  padding: 0 20px;
  margin: 20px 0 30px 0;
  color: rgb(255, 255, 255);
  background: rgb(58, 160, 218);
  border: 1px solid rgb(48, 139, 191);
  box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
`;

const styledMain = css`
  padding: 0 200px;
  margin-top: 80px;
`;

const styledSection = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 170px 0;
`;

const sectionLeftContainer = css`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center; */
  margin: 20px 0 20px 0;

  h1 {
    font-size: 75px;
    margin: 20px 0 0 0;
  }

  h2 {
    font-size: 20px;
    color: #808080;
    font-weight: 500;
    max-width: 420px;
  }

  span {
    font-size: 12px;
    color: #808080;
  }

  /* &:hover {
    h1 {
      color: red;
    } */
`;

const logosSectionStyled = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  background-color: #fffefc;
`;

const logosWrapperStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 80%;
  padding: 20px 0;
  background-color: #fffefc;

  img {
    max-width: 60px;
  }
`;

const secondSectionLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 0 100px 0 0;

  h3 {
    font-size: 30px;
    font-weight: 600;
    max-width: 300px;
    margin-bottom: 10px;
  }

  p {
    font-size: 21px;
    color: #808080;
    font-weight: 500;
    max-width: 650px;
    margin-top: 0px;
  }
`;

const imageContainer = css`
  img {
    max-width: 100%;
    border-radius: 12px;
  }
`;

const testimonialsSection = css`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 40px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    max-width: 650px;
    margin-bottom: 15px;
  }

  button {
    color: rgb(4, 4, 4);
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 35px;
    padding: 0 12px;
    background: transparent;
    font-size: 15px;
  }

  img {
    max-width: 400px;
    margin: 0 80px;
  }
`;

const peopleQuotes = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const individualTestimonial = css`
  max-width: 550px;
`;

const personTestimonialQuote = css`
  img {
    max-height: 30px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: rgb(128, 128, 128);
  }
`;

const personTestimonialInfo = css`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    margin-top: 0px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const centeredSection = css`
  text-align: center;
  margin: 100px 0 200px;
  position: relative;

  h1 {
    font-size: 40px;
    margin: 10px 0 0 0;
  }

  h3 {
    font-size: 20px;
    color: #808080;
    font-weight: 500;
    margin-bottom: 0px;
  }
  p {
    font-size: 18px;
    color: #808080;
    font-weight: 500;
    margin-top: 0px;
  }
`;

const positionAbsoluteImage = css`
  width: 250px;
  position: absolute;
  left: 100px;
  bottom: -180px;
`;

function App() {
  return (
    <div css={appStyles}>
      <div css={navigationWrapStyles}>
        <div css={navigationStyles}>
          <a href="https://www.notion.so/product">
            <NotionLogo />
          </a>
          <nav>
            <span>Product</span>
            <span>Solutions</span>
            <span>Resources</span>
            <span>Download</span>
            <span>Pricing</span>
          </nav>
        </div>
        <div css={navigationStyles}>
          <nav>
            <span>Contact sales</span>
            <span>Log in</span>
            <button css={smallButton}>Try Notion free</button>
          </nav>
        </div>
      </div>

      <main css={styledMain}>
        <section css={styledSection}>
          <div css={sectionLeftContainer}>
            <h1>
              One workspace.
              <br /> Every team.
            </h1>
            <h2>
              We’re more than a doc. Or a table. Customize Notion to work the
              way you do.
            </h2>
            <button css={mediumButton}>Try Notion free</button>
            <div css={logosSectionStyled}>
              <span>TRUSTED BY TEAMS AT</span>
              <div css={logosWrapperStyles}>
                <img alt="loom logo" src={loomLogo} />
                <img alt="pixar logo" src={pixarLogo} />
                <img alt="ibm logo" src={ibmLogo} />
                <img alt="nike logo" src={nikeLogo} />
                <img alt="spotify logo" src={spotifyLogo} />
                <img alt="slack logo" src={slackLogo} />
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Group of people collaborating"
              src="https://www.notion.so/cdn-cgi/image/w=1200,q=100/front-static/pages/product/home-page-hero-refreshed.png"
              width="600px"
            />
          </div>
        </section>

        <section css={styledSection}>
          <div css={secondSectionLeft}>
            <h3> Team up without the chaos</h3>
            <p>
              Connect your teams, projects, and docs in Notion — so you can bust
              silos and move as one.
            </p>
          </div>
          <div css={imageContainer}>
            <img alt="notion emoji functionality" src={notionEmoji} />
          </div>
        </section>
        <section css={styledSection}>
          <div css={secondSectionLeft}>
            <h3> Never ask “What’s the context?” again</h3>
            <p>
              Stale wikis aren't helpful. Neither are floating docs. In Notion,
              your daily work and knowledge live side by side — so you never
              lose context.
            </p>
          </div>
          <div css={imageContainer}>
            <img
              alt="meeting notes functionality"
              src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/pages/product/value-props/context-tile.png"
            />
          </div>
        </section>

        <hr />

        <section>
          <div css={testimonialsSection}>
            <div>
              <div>
                <h2>Used by the world’s most innovative teams</h2>
                <button>Read all customer stories → </button>
              </div>
            </div>
            <div>
              <img
                alt="team collaborating"
                src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/pages/product/teams.png"
              />
            </div>
          </div>

          <div css={peopleQuotes}>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="lattice logo"
                    src="https://www.notion.so/front-static/shared/logos/color/lattice.png"
                  />
                </div>
                <div>
                  <p>
                    "Now people know that, if they're going to ask me a
                    question, I probably put the answer in Notion."
                  </p>
                </div>
              </div>
              <div css={personTestimonialInfo}>
                <div>
                  <img
                    alt="person sketch portrait"
                    src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/shared/people/emily-smith.png"
                  />
                </div>
                <div>
                  <span>Emily Smith</span>
                  <p>Head of Customer Care</p>
                </div>
              </div>
            </div>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="Loom logo"
                    src="https://www.notion.so/front-static/shared/logos/color/loom.png"
                  />
                </div>
                <div>
                  <p>
                    "Notion continues to be the easiest way to get information
                    centralized somewhere and shout it out to someone else. For
                    us, that’s extremely important because half our team is
                    remote."
                  </p>
                </div>
              </div>
              <div css={personTestimonialInfo}>
                <div>
                  <img
                    alt="person sketch portrait"
                    src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/shared/people/vinay-hiremath.png"
                  />
                </div>
                <div>
                  <span>Vinay Hiremath</span>
                  <p>Co-founder and Head of Engineering</p>
                </div>
              </div>
            </div>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="Figma logo"
                    src="https://www.notion.so/front-static/shared/logos/color/figma.png"
                  />
                </div>
                <div>
                  <p>
                    "Notion’s ease of use is one of its hallmarks. It helps you
                    visually navigate content and remember where something is."
                  </p>
                </div>
              </div>
              <div css={personTestimonialInfo}>
                <div>
                  <img
                    alt="person sketch portrait"
                    src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/shared/people/marie-szuts.png"
                  />
                </div>
                <div>
                  <span>Marie Szuts</span>
                  <p>Head of People Ops</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section css={centeredSection}>
          <div>
            <div>
              <img
                alt="Notion app logo"
                src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/shared/icons/notion-app-icon-3d.png"
                width="80px"
              />
            </div>
            <h1>Try Notion today</h1>
            <h3>
              Get started for free.
              <br /> Add your whole team as your needs grow.
            </h3>
            <button css={mediumButton}>Try Notion free</button>
            <p>On a big team? Contact sales</p>
          </div>

          <img
            css={positionAbsoluteImage}
            alt="person sitting"
            src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/pages/product/sitting-character.png"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
