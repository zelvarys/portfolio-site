export const site = {
  url: "https://victor-onyemaechi.vercel.app",
  name: "Victor Conqueror",
  locale: "en_US",
  themeColor: "#ffe8d0",
  lastUpdated: "2026-10-19",
} as const

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString()
