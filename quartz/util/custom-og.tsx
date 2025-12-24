
import { formatDate, getDate } from "../components/Date"
import readingTime from "reading-time"
import { i18n } from "../i18n"
import { SocialImageOptions } from "./og"

export const customImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,  // 受け取るけど使わない
  fileData,
  iconBase64,
  fonts,
}) => {
  const { colorScheme } = userOpts
  const fontBreakPoint = 32
  const useSmallerFont = title.length > fontBreakPoint

  // 日付処理
  const rawDate = getDate(cfg, fileData)
  const date = rawDate ? formatDate(rawDate, cfg.locale) : null

  // 読了時間
  const { minutes } = readingTime(fileData.text ?? "")
  const readingTimeText = i18n(cfg.locale).components.contentMeta.readingTime({
    minutes: Math.ceil(minutes),
  })

  // タグ
  const tags = fileData.frontmatter?.tags ?? []

  const bodyFont = fonts[1].name   // bodyフォント
  const headerFont = fonts[0].name // headerフォント

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: cfg.theme.colors[colorScheme].light,
        padding: "2.5rem",
        fontFamily: bodyFont,
      }}
    >
      {/* ヘッダー（サイトURL + アイコン） */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {iconBase64 && (
          <img
            src={iconBase64}
            width={56}
            height={56}
            style={{ borderRadius: "50%" }}
          />
        )}
        <div
          style={{
            fontSize: 32,
            color: cfg.theme.colors[colorScheme].gray,
          }}
        >
          {cfg.baseUrl}
        </div>
      </div>

      {/* タイトルだけ大きく */}
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: useSmallerFont ? 64 : 72,
            fontFamily: headerFont,
            fontWeight: 700,
            color: cfg.theme.colors[colorScheme].dark,
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,  // タイトルが長い時は3行まで
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h1>
      </div>

      {/* ここが大事！ → description（本文抜粋）は完全に消す */}
      {/* <div style={{ ... }}> <p>{description}</p> </div>  ← これをまるごとコメントアウトor削除 */}

      {/* フッター（日付 + 読了時間 + タグ）*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",  // 下に押しやる
          paddingTop: "2rem",
          borderTop: `1px solid ${cfg.theme.colors[colorScheme].lightgray}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", color: cfg.theme.colors[colorScheme].gray, fontSize: 28 }}>
          {date && (
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* カレンダーアイコン */}
              <svg style={{ marginRight: "0.5rem" }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {date}
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* 時計アイコン */}
            <svg style={{ marginRight: "0.5rem" }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {readingTimeText}
          </div>
        </div>

        {/* タグ（3つまで） */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "60%" }}>
          {tags.slice(0, 3).map((tag: string) => (
            <div
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: cfg.theme.colors[colorScheme].highlight,
                color: cfg.theme.colors[colorScheme].secondary,
                borderRadius: "10px",
                fontSize: 24,
              }}
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}