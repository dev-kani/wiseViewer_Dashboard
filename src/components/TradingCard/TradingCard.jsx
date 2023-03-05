import { useState } from 'react'
import { TbChartCandle } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import ChartWidget from '../Widgets/ChartWidget/ChartWidget'
import './TradingCard.css'

const TradingCard = ({ symbol }) => {

  const [amount, setAmount] = useState(10)
  const [displayChart, setDisplayChart] = useState(false)

  const message = `Hence this is the viewer version of this app, this button is not functional. 
Click the right edge button to view chart of this specific currency pair`

  const handleChange = (event) => {
    setAmount(event.target.value)
  }

  const handleViewChart = () => {
    setDisplayChart(true)
  }

  const handleCloseChart = () => {
    setDisplayChart(false)
  }

  return (
    <>
      <div className="trading__card-bottom">
        <div className='trading__amount'>
          <label htmlFor="amount">Amount</label>
          <select title='This is a demo'
            id="amount"
            value={amount}
            onChange={handleChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={250}>250</option>
            <option value={500}>500</option>

          </select>
        </div>
        <div className='buy_sell-btn'>
          <button title={message}>Buy</button>
          <button title={message}>Sell</button>
        </div>

        <div className='view_chart'>
          <button title='view chart' onClick={handleViewChart}><TbChartCandle /></button>
        </div>
      </div>

      {displayChart && (
        <div className='overlay show'>
          <div className="chart_modal">
            <button onClick={handleCloseChart}><MdClose /></button>
            <div className="chart_container">
              <ChartWidget symbol={symbol} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TradingCard
