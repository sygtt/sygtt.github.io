import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "じゃこの隠れ家",
    pageTitleSuffix: " - じゃこの隠れ家",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is/script.js",
      websiteId: "9f8712fb-70d6-4c28-a9be-ee0be09510a4"
    },
    locale: "ja-JP",
    baseUrl: "sygtt.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans JP",
        body: "IBM Plex Sans JP",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FEFEFE",
          lightgray: "#F1F1F1",
          gray: "#E0E0E0",
          darkgray: "#2D2A2B",
          dark: "#2A2530",
          secondary: "#B31360",
          tertiary: "#F86EAE",
          highlight: "#FEEAF2",
          textHighlight: "#FDDDEE"
        },
        darkMode: {
          light: "#1A1A1A",
          lightgray: "#3C3C3C",
          gray: "#282828",
          darkgray: "#EAEAEA",
          dark: "#FFDBED",
          secondary: "#F86EAE",
          tertiary: "#FF99C8",
          highlight: "#3A2C33",
          textHighlight: "#522A40"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
