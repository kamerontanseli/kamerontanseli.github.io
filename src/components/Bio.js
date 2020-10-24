const Bio = () => (
  <div className="bio-bg">
    <div className="container">
      <div className="bio">
        <div className="bio-content">
          <p>
            Welcome 🙌🏻, my name's <strong>Kameron Tanseli</strong>. I'm a Growth
            Engineer, JavaScript developer, and entrepreneur.
          </p>
          <p>
            I'm currently focused with helping{" "}
            <a target="_blank" href="https://tray.io">Tray.io</a> become the next biggest tech
            IPO.
          </p>
          <p>
            You can read more <a href="/about">about me</a>,{" "}
            <a href="/projects">my projects</a>, and{" "}
            <a href="#articles">my articles</a>.
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