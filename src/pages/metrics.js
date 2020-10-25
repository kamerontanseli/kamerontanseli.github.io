import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Link from "next/link";
import Footer from "../components/Footer";

const Metrics = ({}) => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | Open Metrics`}
        description={`Hi 🙌🏻, my name's Kameron Tanseli I'm a Growth
                Engineer, JavaScript developer, and entrepreneur. I'm currently focused with helping Tray.io become the next biggest tech IPO.`.trim()}
      />
      <Navigation />
      <div className="iframe-container">
        <iframe
          src="https://publicdash.com/boards/5f948ac4f31e0d0017c6f0ab/embed?layout=two-col"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
      <style jsx>{`
        .iframe-container {
          overflow: hidden;
          /* 16:9 aspect ratio */
          padding-top: 56.25%;
          position: relative;
          min-height: 80vh;
        }

        .iframe-container iframe {
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Metrics;
