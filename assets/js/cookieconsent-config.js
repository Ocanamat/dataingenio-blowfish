import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js";

// Enable dark mode to match your site's theme
document.documentElement.classList.add("cc--darkmode");

// Run plugin with config object
CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom center",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      enabled: true, // necessary cookies are always enabled
      readOnly: true, // cannot be disabled
    },
    analytics: {
      enabled: false, // disabled by default
      readOnly: false,
      autoClear: {
        cookies: [
          {
            name: "_ga", // Google Analytics cookie
          },
          {
            name: "_ga_Y5YMCHKZ2C", // Your specific GA cookie
          },
        ],
      },
    },
  },
  language: {
    default: "en",
    translations: {
      en: {
        consentModal: {
          title: "We use cookies",
          description:
            "This website uses cookies to enhance your browsing experience and analyze our traffic.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
        },
        preferencesModal: {
          title: "Cookie Preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "We use cookies to ensure basic functionality and analyze our traffic.",
            },
            {
              title: "Strictly Necessary Cookies",
              description:
                "These cookies are essential for the proper functioning of the website.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "These cookies help us understand how visitors interact with our website.",
              linkedCategory: "analytics",
            },
          ],
        },
      },
    },
  },
  onConsent: ({ cookie }) => {
    // Handle Google Analytics based on user consent
    if (cookie.categories.includes("analytics")) {
      // Enable GA
      window["ga-disable-G-Y5YMCHKZ2C"] = false;
    } else {
      // Disable GA
      window["ga-disable-G-Y5YMCHKZ2C"] = true;
    }
  },
});
