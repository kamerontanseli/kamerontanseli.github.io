const Footer = () => (
  <footer className="container">
    <style jsx>{`
      ul {
        display: grid;
        grid-template-columns: repeat(5, auto);
        list-style: none;
        margin: 0;
        padding: 1em;
      }
      li {
        font-size: 0.8em;
      }
      a {
        color: #0073a7;
      }

      @media screen and (max-width: 480px) {
        ul {
          grid-template-columns: repeat(2, auto);
        }
      }
    `}</style>
    <ul>
      <li style={{ color: "rgb(161 161 161)" }}>&copy; Kameron Tanseli 2020</li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kameron_tanseli"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/KameronTanseli"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kamerontanseliwork@gmail.com"
        >
          Email
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kameront.substack.com/"
        >
          Newsletter
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer