const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ibrahim Ullah",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Research | IT Professional | Bibliophile | Interdisciplinary",
    bio: "Stay Hungry, Stay foolish",
    email: "ibrahim.ullaah@gmail.com",
    linkedin: "iuemon",
    github: "Ibrahim-ullah",
    instagram: "",
  },
  projects: [
    {
      name: `FDTD using MATLAB`,
      href: "https://github.com/Ibrahim-ullah/FDTD-method-for-electromagnatics-with-matlab-by-Atef-Z-Elsherbeni",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Md. Ibrahim Ullah",
    description: "welcome to My Blog!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://ibrahim-ullah.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
