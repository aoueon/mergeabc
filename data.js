const appProfile = {
  name: "Merge ABC",
  summary: "Reach the highest letter",
  tagline: "Merge letter tiles from A to Z. How far can you go?",
  icon: "assets/icon.png",
  appStoreUrl: "",
  appStoreLabel: "Download on the App Store",
  appStoreBadge: "assets/download.svg",
  supportEmail: "rao@pluriform.ro",
  privacyOwnerName: "Raoul Albu-Simionas",
  companyName: "Merge ABC",
  responseTime: "Most support messages are answered within 3 business days.",
  responseWindow: "Within 3 business days",
  lastUpdated: "March 19, 2026",
  inspiration:
    "* Inspired by the hugely popular 2048 game mechanism created by Gabriele Cirulli."
};

window.APP_DATA = {
  app: appProfile,
  theme: {
    accent: "#1570ef",
    accentStrong: "#0f5bd8",
    accentSoft: "#dceaff",
    surface: "#ffffff",
    surfaceAlt: "#f5f8ff",
    ink: "#121826",
    muted: "#546074"
  },
  navigation: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "support", label: "Support", href: "support.html" },
    { id: "privacy", label: "Privacy", href: "privacy.html" }
  ],
  screenshots: [
    // {
    //   src: "assets/screenshot-1.svg",
    //   alt: "Merge ABC gameplay board"
    // }
  ],
  home: {
    primaryCards: [
      {
        title: "How to Play",
        lines: [
          "Swipe tiles up, down, left, or right.",
          "Matching letters merge into the next letter in the alphabet.",
          "Keep merging to reach higher letters and improve your score.",
          "The game ends when the board is full and no merges are possible."
        ]
      },
      {
        title: "Progress and Game Center",
        lines: [
          "Watch the progress strip to see your current highest letter, all-time highest reached letter and the final level position.",
          "Get included in the Game Center leaderboards.",
          "Win achievements for high score and big letters reached."
        ]
      }
    ],
    offerCards: [
      {
        title: "100% Free to Play 🤳",
        paragraphs: [
          "Enjoy unlimited play for free. We support a free pricing model through minimal ads.",
          "A single non-intrusive ad banner is included during gameplay. You can undo an infinite number of moves, supported by full-screen ads."
        ]
      },
      {
        title: "Unlimited 2048 🌟",
        paragraphs: [
          "Upgrade to the Unlimited 2048 package with a one-time purchase."
        ],
        lines: [
          "Remove All Ads: No more banners or full-screen ads.",
          "Instant Undo: Unlimited undos with instant effect for fast gameplay.",
          "Boosted Start: Start a new game from your all-time highest letter reached."
        ]
      }
    ],
    secondaryCta: {
      title: "Support and Privacy",
      body: "Questions, purchase help, and privacy details.",
      links: [
        { label: "Support", href: "support.html" },
        { label: "Privacy Policy", href: "privacy.html" }
      ]
    }
  },
  support: {
    intro:
      "For bugs, purchase issues, or feedback, email support and include your device model, iOS version, and a short description of the issue.",
    contactCards: [
      {
        label: "Support Email",
        value: appProfile.supportEmail,
        href: `mailto:${appProfile.supportEmail}`
      },
      {
        label: "Response Window",
        value: appProfile.responseWindow
      }
    ],
    helpGroups: [
      {
        title: "How to Play",
        lines: [
          "Swipe tiles up, down, left, or right.",
          "Matching letters merge into the next letter in the alphabet.",
          "Keep merging to reach higher letters and improve your score.",
          "The game ends when the board is full and no merges are possible."
        ]
      },
      {
        title: "Top Buttons",
        lines: [
          "+ starts a brand-new game.",
          "Middle button opens the Unlimited 2048 sheet for purchase or restore, or skip action if Unlimited 2048 is already active.",
          "Undo reverses your previous move. Free users watch a rewarded ad first."
        ]
      },
      {
        title: "Screen Areas",
        lines: [
          "LEVEL, SCORE, and TOP summarize your current run and best run.",
          "The progress strip shows your current letter, best letter, and final goal.",
          "Footer links open Help, Privacy Policy, Upgrade or Restore, and Privacy Choices."
        ]
      }
    ],
    faqs: [
      {
        question: "How do I restore Unlimited 2048?",
        answer:
          "Open the Unlimited 2048 sheet and use Restore. If the purchase does not return, email support with your App Store receipt details."
      },
      {
        question: "Why do I see ads when I undo?",
        answer:
          "Free users can undo an infinite number of moves, supported by rewarded full-screen ads. Unlimited 2048 removes ads and makes undo instant."
      },
      {
        question: "What does Unlimited 2048 include?",
        answer:
          "It is a one-time purchase that removes all ads, gives instant undo, and lets you start a new game from your all-time highest letter reached."
      },
      {
        question: "What should I include in a support email?",
        answer:
          "Include your device model, iOS version, and a short description of the issue. Screenshots help when relevant."
      }
    ]
  },
  privacy: {
    intro:
      "This Privacy Policy explains how Merge ABC handles information when you use the app. Merge ABC does not require a developer-managed account or login to play. The app uses Apple Game Center for leaderboards and achievements, Apple services for in-app purchases, and Google AdMob to show ads in the free version.",
    sections: [
      {
        title: "Owner",
        paragraphs: [
          `The owner and operator of Merge ABC is ${appProfile.privacyOwnerName}.`,
          `For support or privacy questions, contact ${appProfile.supportEmail}.`
        ]
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "Merge ABC does not require you to create an account or provide personal information directly to play.",
          "If you contact support by email, we receive the information you choose to include in your message.",
          "We may also receive limited information from Apple and third-party service providers when needed to operate Game Center features, process purchases, show ads, restore purchases, respond to support requests, or understand app stability."
        ]
      },
      {
        title: "Game Center",
        paragraphs: [
          "If you choose to use Game Center, Apple may make your Game Center profile information and gameplay-related data, such as leaderboard entries and achievements, available to the app so those features can work.",
          "Game Center is provided by Apple and is subject to Apple's own privacy terms and settings."
        ]
      },
      {
        title: "Advertising",
        paragraphs: [
          "The free version of Merge ABC shows a banner ad during gameplay.",
          "When a free user uses Undo, the app may show one or more full-screen ads before granting the undo.",
          "Users who purchase the one-time Unlimited 2048 package do not receive ads in the app.",
          "Google AdMob and its partners may collect or process information such as device identifiers, IP address, approximate location, diagnostics, and ad interaction data to provide, measure, and improve ads, subject to applicable law, device settings, and any consent choices presented to the user."
        ]
      },
      {
        title: "In-App Purchases",
        paragraphs: [
          "If you purchase or restore Unlimited 2048, Apple processes the transaction. We do not receive your full payment card or bank information.",
          "We may receive limited purchase or restore status information from Apple as needed to unlock or restore the ad-free upgrade."
        ]
      },
      {
        title: "How Information Is Used",
        paragraphs: [
          "Information described in this policy may be used to operate the app, show leaderboards and achievements, serve or remove ads as applicable, process or restore purchases, respond to support requests, detect problems, and improve app stability and performance."
        ]
      },
      {
        title: "Sharing",
        paragraphs: [
          "We do not sell personal information.",
          "Information may be shared with Apple for App Store distribution, Game Center features, in-app purchases, and Apple-provided diagnostics or related platform services.",
          "Information may be shared with Google AdMob and its advertising partners to serve, measure, and improve ads in the free version of the app.",
          "We may also disclose information if required by law or when reasonably necessary to protect rights, safety, or the operation of the app.",
          "Third-party providers we use are expected to protect the data they process in accordance with their own privacy policies, contractual obligations, and applicable law."
        ]
      },
      {
        title: "Data Retention",
        paragraphs: [
          "Support and privacy emails are retained for as long as reasonably necessary to respond to the message and maintain basic support records.",
          "Game Center, purchase, diagnostic, and advertising-related data are retained according to the policies and practices of Apple, Google, and their partners."
        ]
      },
      {
        title: "Your Choices",
        paragraphs: [
          "You can use the app without creating a developer-managed account.",
          "If you do not want to use Game Center, you may choose not to sign in to Game Center, although leaderboard and achievement features may then be unavailable.",
          "If you do not want ads in the app, you may purchase Unlimited 2048.",
          "Depending on your device settings, region, and applicable law, you may also be able to manage ad tracking, consent, and related privacy choices through iOS settings, Apple settings, or Google consent tools.",
          "You may contact us to request deletion of information you sent directly by email."
        ]
      },
      {
        title: "Children's Privacy",
        paragraphs: [
          "We do not knowingly collect personal information directly from children through Merge ABC except where a child voluntarily sends information by email.",
          "If you believe a child has sent personal information through support or privacy email, contact us and we will take reasonable steps to delete it where appropriate and legally permitted."
        ]
      },
      {
        title: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page and reflected in the Last updated date."
        ]
      },
      {
        title: "Contact",
        paragraphs: [
          `Owner: ${appProfile.privacyOwnerName}.`,
          `Support: ${appProfile.supportEmail}.`
        ]
      }
    ]
  }
};
