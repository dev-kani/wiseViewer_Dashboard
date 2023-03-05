import { useEffect } from "react"

const ChartModal = ({ symbol }) => {
  useEffect(() => {
    new window.TradingView.widget({
      symbol: `FX_IDC:${symbol}`,
      interval: "D",
      fullscreen: true,
      theme: "light",
      locale: "en",
      width: 980,
      height: 610,
      enable_publishing: false,
      allow_symbol_change: true,
      hide_side_toolbar: false,
      hideideas: true,
      container_id: "tv_chart_container",
      // studies: [
      //   "MA@tv-basicstudies",
      //   "MACD@tv-basicstudies",
      //   "RSI@tv-basicstudies",
      // ],
      // "width": 980,
      // "height": 610,
      // "timezone": "Etc/UTC",
      // "style": "1",
      // "toolbar_bg": "#d9e1eb",
      // "enable_publishing": false,
      // "hide_top_toolbar": false,
      // "hide_side_toolbar": false,
      // "allow_symbol_change": true,
      // "container_id": widgetRef.current.id
    })

    // return () => {
    //   widget.remove();
    // }
  }, [])

  return <div id="tv_chart_container"></div>

}

export default ChartModal
