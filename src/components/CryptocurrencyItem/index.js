// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLog, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <div className="heading-container">
      <div className="upper">
        <img src={currencyLog} alt={currencyName} className="log" />
        <h1 className="font-change one">{currencyName}</h1>
      </div>
      <h1 className="font-change two">{usdValue}</h1>
      <h1 className="font-change three">{euroValue}</h1>
    </div>
  )
}

export default CryptocurrencyItem
