import { useEffect, useRef } from "react"
import TradingCard from "../../TradingCard/TradingCard"
import './TAWidget.css'

const Widget = ({ symbol }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "interval": "1D",
      "width": 425,
      "isTransparent": false,
      "height": 450,
      "symbol": `FX_IDC:${symbol}`,
      "showIntervalTabs": true,
      "locale": "en",
      "colorTheme": "light"
    })
    containerRef.current.appendChild(script)
  }, [symbol])

  return (
    <>
      <div className="trading__card">
        <div ref={containerRef} id="myContainer" className="widget"></div>
        <TradingCard symbol={symbol} />
      </div>
    </>
  )
}

export default Widget
