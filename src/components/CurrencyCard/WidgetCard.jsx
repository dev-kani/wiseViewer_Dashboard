import { useState } from 'react'
import Widget from '../Widgets/TAWidget/TAWidget'
import { MdClose } from 'react-icons/md'
import useLocalStorageState from '../../hooks/useLocalStorage'
import './WidgetCard.css'

const CurrencySelectorModal = ({ onClose, majorPairs, minorPairs, exoticPairs,
  setMajorPairs, setMinorPairs, setExoticPairs }) => {
  const handleCurrencyToggle1 = (currency) => {
    setMajorPairs((prevState) => {
      const newCurrencies1 = { ...prevState }
      newCurrencies1[currency] = !newCurrencies1[currency]
      return newCurrencies1
    })
  }
  const handleCurrencyToggle2 = (currency) => {
    setMinorPairs((prevState) => {
      const newCurrencies2 = { ...prevState }
      newCurrencies2[currency] = !newCurrencies2[currency]
      return newCurrencies2
    })
  }
  const handleCurrencyToggle3 = (currency) => {
    setExoticPairs((prevState) => {
      const newCurrencies3 = { ...prevState }
      newCurrencies3[currency] = !newCurrencies3[currency]
      return newCurrencies3
    })
  }

  const handleSave = () => {
    onClose()
  }

  return (
    <div className='modal__container'>
      <div className='modal'>
        <div className='modal__btn'>
          <p>Select currency pairs</p>
          <button onClick={handleSave}><MdClose /></button>
        </div>
        <hr />
        <div className='modal__body'>
          <section className='modal__sections'>
            {Object.entries(majorPairs).map(([currency, isChecked]) => (
              <div key={currency}>
                <input
                  type="checkbox"
                  id={currency}
                  checked={isChecked}
                  onChange={() => handleCurrencyToggle1(currency)}
                />
                <label htmlFor={currency}>{currency.slice(0, 3).concat('/').concat(currency.slice(3))}</label>

              </div>
            ))}
          </section>
          <hr />
          <section className='modal__sections'>
            {Object.entries(minorPairs).map(([currency, isChecked]) => (
              <div key={currency}>
                <input
                  type="checkbox"
                  id={currency}
                  checked={isChecked}
                  onChange={() => handleCurrencyToggle2(currency)}
                />
                <label htmlFor={currency}>{currency.slice(0, 3).concat('/').concat(currency.slice(3))}</label>
              </div>
            ))}
            {/* <input type="text" /> */}
          </section>
          <hr />
          <section className='modal__sections'>
            {Object.entries(exoticPairs).map(([currency, isChecked]) => (
              <div key={currency}>
                <input
                  type="checkbox"
                  id={currency}
                  checked={isChecked}
                  onChange={() => handleCurrencyToggle3(currency)}
                />
                <label htmlFor={currency}>{currency.slice(0, 3).concat('/').concat(currency.slice(3))}</label>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

const WidgetCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [majorPairs, setCurrencies1] = useLocalStorageState('majorPairs', {
    EURUSD: true,
    USDJPY: true,
    GBPUSD: true,
    USDCHF: true,
    AUDUSD: true,
    NZDUSD: true,
    USDCAD: true
    // add more currencies as needed
  })
  const [minorPairs, setCurrencies2] = useLocalStorageState('minorPairs', {
    EURGBP: false,
    EURCHF: false,
    EURJPY: false,
    GBPJPY: false,
    CHFJPY: false,
    AUDCAD: false,
    AUDJPY: false,
    AUDNZD: false,
    CADJPY: false,
    NZDJPY: false,
    NZDCAD: false,
    EURCAD: false,
    EURAUD: false,
    GBPCAD: false,
    GBPAUD: false,
    // add more currencies as needed
  })

  const [exoticPairs, setCurrencies3] = useLocalStorageState('exoticPairs', {
    USDHKD: false,
    USDSGD: false,
    USDZAR: false,
    USDTHB: false,
    USDMXN: false,
    USDTRY: false,
    USDSEK: false,
    USDNOK: false,
    USDDKK: false,
    USDPLN: false,
    USDCNH: false,
    USDINR: false,
    USDKRW: false,
    USDBRL: false,
    USDRUB: false,
    // add more currencies as needed
  })

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <main className='dashboard'>
      <section className='modal_btn-container'>
        <button onClick={handleOpenModal}>Select Currencies</button>
        {showModal && (
          <CurrencySelectorModal onClose={handleCloseModal}
            majorPairs={majorPairs}
            setMajorPairs={setCurrencies1}
            minorPairs={minorPairs}
            setMinorPairs={setCurrencies2}
            exoticPairs={exoticPairs}
            setExoticPairs={setCurrencies3}

          />
        )}
      </section>
      <section className='widget__container'>
        {Object.entries(majorPairs).map(([currency, isChecked]) => (
          isChecked && <Widget key={currency} symbol={currency} />
        ))}

        {Object.entries(minorPairs).map(([currency, isChecked]) => (
          isChecked && <Widget key={currency} symbol={currency} />
        ))}

        {Object.entries(exoticPairs).map(([currency, isChecked]) => (
          isChecked && <Widget key={currency} symbol={currency} />
        ))}
      </section>
    </main>
  )
}

export default WidgetCard
