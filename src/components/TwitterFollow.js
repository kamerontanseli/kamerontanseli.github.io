import { useEffect, useState } from "react";

const TwitterFollow = () => {
  const [fromTwitter, setFromTwitter] = useState(false);

  useEffect(() => {
    if (document.referrer.includes("t.co")) {
      setFromTwitter(true);
      localStorage.setItem("is_twitter_user", "true");
    }
    setFromTwitter(localStorage.getItem("is_twitter_user") === "true");
  }, []);

  if (fromTwitter) {
    return (
      <div className="banner">
        <style jsx>{`
          .banner {
            padding: 1em;
            background-color: #15202b;
            margin-bottom: 1.5em;
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 10px;
            align-items: center;
          }
          .banner-btns {
            display: flex;
            align-items: center;
          }
          .banner-text {
            margin: 0;
            color: #fff;
            font-size: 0.8em;
          }
          .banner-close {
            margin-left: 10px;
            background-color: #15202b;
            color: #fff;
            border: 0;
            cursor: pointer;
            font-size: 1em;
          }

          @media screen and (max-width: 480px) {
            .banner {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        <p className="banner-text">
          If you like my content, why not follow me on Twitter?
        </p>
        <div className="banner-btns">
          <a
            href="https://twitter.com/KameronTanseli?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @KameronTanseli
          </a>

          <button
            onClick={() => {
              setFromTwitter(false);
              localStorage.setItem("is_twitter_user", "false");
            }}
            className="banner-close"
          >
            &times;
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default TwitterFollow;
