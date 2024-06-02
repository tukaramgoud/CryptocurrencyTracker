// Write your code here
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

const CryptocurrencyTracker = props => {
  const {itemDetails} = props
  console.log(itemDetails)
  return (
    <div className="main-container">
      <CryptocurrenciesList />
    </div>
  )
}

export default CryptocurrencyTracker
