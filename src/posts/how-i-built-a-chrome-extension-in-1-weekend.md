---
author: Kameron Tanseli
date: "2020-09-24T16:24:35.794Z"
hero_image: https://ucarecdn.com/81ef33ca-1950-40fe-bcaf-ba09f1f81e9a/validations---previews.png
title: "Chrome Extensions (How to Build & Monetise)"
byline: "I made a very conscious decision early on to try writing the initial MVP without a framework. I wanted the end result to be small."
---

### Starting Off Light

Much like how we have [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) for building front end applications, we also have the [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli) for quickly spinning up Chrome Extensions. This saved me hours of setting up Webpack and configuring manifests and I highly recommend you use it!

I made a very conscious decision early on to try writing the initial MVP without a framework. I wanted the end result to be small in size as my users would be downloading the entire extension before using it.

```js
const isDev = process.env.NODE_ENV === "development";

let state = {
  license: {
    activated: false,
  },
  activation: {
    error: false,
  },
  currentTab: "validations",
  validations: {
    config: {
      twitter: true,
    },
    passed: [],
    failed: [],
    siteInfo: {},
  },
};

export function reducer(action = {}, state = {}) {
  switch (action.type) {
    case "ACTIVATION_FAILURE":
      state.activation.error = true;
      return state;
    case "LICENSE_VALID":
      state.activation.error = false;
      state.license.activated = true;
      return state;
    case "NAVIGATION":
      state.currentTab = action.payload.currentTab;
      return state;
    case "VALIDATION_SET": {
      state.validations.passed = action.payload.passed;
      state.validations.failed = action.payload.failed;
      state.validations.siteInfo = action.payload.siteInfo;
      return state;
    }
    case "VALIDATION_TWITTER_CHANGE": {
      state.validations.config.twitter = action.payload.twitter;
      return state;
    }
    default:
      return state;
  }
}

export const dispatch = (callback) => (action) => {
  const oldState = JSON.parse(JSON.stringify(state));
  if (isDev) console.log("Previous State", oldState);
  state = reducer(action, oldState);
  if (isDev) console.log("New State", state);
  callback(state);
};
```

It was quite simple to hook this up with my LitHTML views:

```js
const emit = dispatch((state) =>
  render(app(state, emit), document.getElementById("app"))
);
```

### Dealing with Communication

I wasted 1-2 hours on trying to figure out how to pass information from my content script (a script that executes code on the user’s current tab) to my extension popup.

Turns out that in order to communicate with the content script you need to first fetch the Tab ID:

`contentScript.js`

```js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "FETCH_META_DATA": {
      sendResponse({
        ...validateMetaData(),
        siteInfo: getSiteInfo(),
      });
      break;
    }
    case "ERROR": {
      console.error(request.payload);
      break;
    }
    default:
      break;
  }
});
```

`popup.js`

```js
chrome.tabs.getSelected(null, (tab) => {
  chrome.tabs.sendMessage(
    tab.id,
    { type: "FETCH_META_DATA" },
    (response) => {}
  );
});
```

### Monetisation & Distribution

Now that the UI and Business Logic was sorted I needed to find a way to monetize my creation. Taking inspiration from CSS Scan I opted to host my extension on Gumroad.

I could have gone the route of uploading my extension to the Chrome Web Store. However, as the extension is essentially useless without a License Key I would have failed the Extension Review.

Instead, the extension build is uploaded as a zip to GumRoad. It’s quite a simple process to add the extension to Chrome and as my customers were developers I didn’t think the extra step of unzipping and adding via chrome://extensions was that difficult.

Fortunately, GumRoad has an inbuilt License Key API.

Unfortunately, it requires a server to call it, so I had to add to build a small web service to call from my extension.

Note: The API only accepts URL encoded requests and not JSON (this will save you 30 minutes of wondering why it doesn’t work):

```js
const result = await axios({
  url: `https://api.gumroad.com/v2/licenses/verify`,
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  data: `product_permalink=<permalink>&license_key=${
    encodeURIComponent(license_key)
  }`,
});
```