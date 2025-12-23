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
          light: "#FFFBFC",        // page background
          lightgray: "#F0E4E8",    // borders
          gray: "#E6E1EA",         // graph links, heavier borders
          darkgray: "#2D2A2B",     // body text
          dark: "#2A2530",         // header text and icons
          secondary: "#C01872",    // link colour, current graph node
          tertiary: "#FF7CBE",     // hover states, visited graph nodes
          highlight: "#FFE4F0",    // 内部リンク背景・軽い強調
          textHighlight: "#FFD2E6" // ==markdown強調==（一段強い）
        },
        darkMode: {
          light: "#18151A",        // page background
          lightgray: "#3D3438",    // borders
          gray: "#2E2833",         // graph links, heavier borders
          darkgray: "#F5EEF0",     // body text
          dark: "#FFDBED",         // header text and icons
          secondary: "#FF7CBE",    // link colour, current graph node
          tertiary: "#FFB3D9",     // hover states, visited graph nodes
          highlight: "#3D2438",    // 内部リンク・軽い強調
          textHighlight: "#5A2F49" // ==markdown強調==（より強い）
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
