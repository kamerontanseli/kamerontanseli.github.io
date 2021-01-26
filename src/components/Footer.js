const Footer = () => (
  <footer className="container">
    <style jsx>{`
      ul {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        grid-gap: 10px;
        list-style: none;
        margin: 0;
        padding: 1em;
      }
      li {
        font-size: 0.8em;
      }
      a {
        color: #000;
      }

      @media screen and (max-width: 480px) {
        ul {
          grid-template-columns: 1fr;
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
    </ul>
  </footer>
);

export default Footer