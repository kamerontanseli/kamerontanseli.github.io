const Bio = () => (
  <div className="bio-bg">
    <div className="container">
      <div className="bio">
        <div className="bio-content">
          <p>Howdy 🤠, I'm Kameron. A Growth Engineer/Bootstrapped Maker.</p>
          <p>
            Currently focused on growing{" "}
            <a target="_blank" href="https://tray.io">
              Tray.io
            </a>{" "}
            and building{" "}
            <a href="/blog/12-startups-in-12-months">
              12 startups in 12 months
            </a>
          </p>
        </div>
        <div className="bio-image">
          <img width={100} src="/static/profile.jpg" alt="Kameron Tanseli" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .bio-bg {
        background-color: #f5f5f5;
      }
      .bio {
        padding: 2em;
        display: grid;
        grid-template-columns: 1fr 100px;
        grid-gap: 20px;
        align-items: center;
      }
      .bio-content a {
        color: #0073a7;
      }
      .bio-content p {
        margin-bottom: 1em;
      }
      .bio-image img {
        max-width: 100%;
        border-radius: 100px;
      }
      @media screen and (max-width: 480px) {
        .bio {
          grid-template-columns: 1fr;
        }
        .bio-content {
          order: 2;
        }
        .bio-image {
          order: 1;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Bio