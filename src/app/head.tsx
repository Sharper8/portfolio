export default function Head() {
  return (
    <>
      {/* Primary meta */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Plausible Analytics */}
      <script
        defer
        data-domain="devprocore.com"
        src="https://analytics.devprocore.com/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
        }}
      />
    </>
  )
}
