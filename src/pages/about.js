import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Link from "next/link";
import Footer from "../components/Footer";

const About = ({}) => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | About Me`}
        description={`It all started an Agency in St Albans that hired me on a paid
                internship as a Junior Full Stack Python Engineer when I was 15
                (I had to apply for a work permit from the council and only work
                on the weekends for a few hours).
        `.trim()}
      />
      <Navigation />
      <div className="container">
        <div className="about">
          <h1 className="about-title">About Kameron</h1>
          <div className="about-columns">
            <div className="about-images">
              <img
                className="about-pp"
                width={100}
                src="/static/profile.jpg"
                alt="Kameron Tanseli"
              />
            </div>
            <div className="about-content">
              <p>
                Hi 🙌🏻, my name's <strong>Kameron Tanseli</strong>. I'm a Growth
                Engineer, JavaScript developer, and entrepreneur.
              </p>
              <p>
                I'm currently focused with helping{" "}
                <a target="_blank" href="https://tray.io">
                  Tray.io
                </a>{" "}
                become the next biggest tech IPO.
              </p>
              <p>
                <strong>How I got here:</strong>
              </p>
              <p>
                It all started an Agency in St Albans that hired me on a paid
                internship as a Junior Full Stack Python Engineer when I was 15
                (I had to apply for a work permit from the council and only work
                on the weekends for a few hours).
              </p>
              <p>
                When I turned 16 I then got hired as a full-time Junior Full
                Stack Python Engineer helping build an in-house CMS for sites
                such as{" "}
                <a target="_blank" href="http://hexus.net/">
                  Hexus
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://cranble.com/">
                  Cranble
                </a>
                .
              </p>
              <p>
                After working at the Agency for two years I left to join a very
                early stage startup called{" "}
                <a target="_blank" href="https://www.motivii.com/">
                  Motivii
                </a>{" "}
                as their Lead Front End Engineer. Motivii is still a company
                near to my heart as it was where I learnt the most about
                startups.
              </p>
              <p>
                With a team of four (Nick, Rick, Eamon, and I) we were able to
                completely rewrite the entire product, add SAAS onboarding,
                implement lean startup metric driven dashboards, add enterprise
                features, retain existing enterprise customers, and create a
                self-serve onboarding flow to gain mid-level customers.
              </p>
              <p>
                It's a testament to time that we were able to create a product
                that customers loved. Even to this day, though there is no
                engineers maintaining the product it's still being used by
                enterprise companies.
              </p>
              <p>
                I left Motivii after a year to join{" "}
                <a href="https://tryflux.com" target="_blank">
                  Flux
                </a>{" "}
                as one of their Senior Front End Engineers. Flux was my opening
                into the world of enterprise integrations (*cough* Tray). Even
                though my job title stated front end I actually spent more time
                looking at terminals and writing Node.js.
              </p>
              <p>
                The most memorable time for me was definitely helping intergrate
                Flux into KFC's Kiosk Servers. Although I can't say much on the
                matter (I don't like lawsuits) it was definitely challenging and
                really opened up my eyes to how important cross-company data
                management really is.
              </p>
              <p>
                After an amazing company holiday to the Canary islands and a
                quick getaway to Marrakech for my birthday I left Flux. I
                decided it was time to take a few risks...
              </p>
              <p>
                I've always loved the idea of running a micro-sass company,
                especially around learning or productivity, so when I had the
                idea for a micro-studying app that chunks up notes and sends you
                parts of them everyday I got right to work.
              </p>
              <p>
                After a solid month of work I created{" "}
                <a
                  target="_blank"
                  href="https://www.producthunt.com/posts/cycle-notes"
                >
                  Cycle Notes
                </a>
                . I wasn't really expecting it to do that well on ProductHunt
                but It actually had over 300 visitors in a single day. Not only
                that but I also had around 50 active returning users days later.
              </p>
              <p>
                After launching Cycle Notes I took a 2 week holiday to Portugal
                to get some much needed rest time. On a side note, if you
                haven't already you should definitely check out Porto. It's an
                upcoming tech startup scene (looking at you{" "}
                <a target="_blank" href="https://www.surfncode.io/">
                  SurfNCode
                </a>
                ).
              </p>
              <p>
                Upon my return to the UK I was recommended to apply for{" "}
                <a target="_blank" href="https://zinc.vc">
                  Zinc VC
                </a>{" "}
                by my friend Franz, founder of{" "}
                <a
                  target="_blank"
                  href="https://www.crunchbase.com/organization/tick-done"
                >
                  TickDone
                </a>{" "}
                . To which I immediately did (I was unemployed so YOLO).
              </p>
              <p>
                The first stages of the Zinc interview went really smoothly.
                Bunch of questions about why'd you want to help old people and
                how you'd build that sort of thing etc etc. The real exciting
                stuff was the in-person days at their office.
              </p>
              <p>
                Now I'm a pretty confident person (or I hope I appear to be).
                But pitching to a group of 20 people with a last minute idea
                (thank you life for giving a team that didn't get along) for a
                support app for old people was nerve-wracking and downright
                painful.
              </p>
              <p>
                Safe to say I didn't get accepted into the founders program :(.
                But fate always has a way with these things...
              </p>
              <p>
                I knew that I didn't want to be just another engineer again. The
                thought of having more of an impact on a startup was too
                irrestible of a job to pass up. I also knew based on my work
                history that the times where I did the best work was when I had
                access to company metrics and the freedom to execute on my own
                ideas.
              </p>
              <p>
                As mentioned earlier fate works in mysterious ways. In my GMail
                I recieved an interview request from Tray.io for a Senior Growth
                Engineer Role. Not only did I get to keep writing JavaScript but
                now I got to do it with the freedom of executing on my own ideas
                and operating in a lean startup environment while improving the
                company's baseline metrics.
              </p>
              <p>
                Everything seemed to fall in line. The interview stages flew by
                and my in-person test was done in only 30 minutes instead of 1
                hour ;)
              </p>
              <p>
                I can honestly say that Tray.io is one of the best companies to
                work for. Its allowed me to digital nomad across Portugal,
                Belgium, and Italy while working and helping scale the company.
              </p>
              <p>
                So yeah, that's me and my story. If you've read this far why not
                subscribe to{" "}
                <a target="_blank" href="https://kameront.substack.com/">
                  my newsletter
                </a>{" "}
                or read some of <a href="/">my articles 😉</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .about {
          padding: 2em;
        }
        .about-title {
          margin-top: 0;
          margin-bottom: 1em;
        }
        .about-pp {
          border-radius: 200px;
        }
        .about-columns {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-gap: 40px;
        }
        .about-content p {
          margin-top: 0;
        }
        .about-content a {
          color: #0073a7;
        }
        @media screen and (max-width: 480px) {
          .about-columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default About;
