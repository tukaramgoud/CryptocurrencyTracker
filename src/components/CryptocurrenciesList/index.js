// Write your JS code here
import {Component} from 'react'
import Circles from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {dataList: [], isLoading: true}

  componentDidMount = () => {
    this.fetchingData()
  }

  fetchingData = async () => {
    const data = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const result = await data.json()
    console.log(result)
    const newResult = result.map(eachOne => ({
      currencyLog: eachOne.currency_logo,
      currencyName: eachOne.currency_name,
      euroValue: eachOne.euro_value,
      usdValue: eachOne.usd_value,
      id: eachOne.id,
    }))
    this.setState({dataList: newResult, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state
    return (
      <div className="sub-container">
        <h1 className="main-heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="currency"
        />
        <div className="list-container">
          <div className="heading-container">
            <h1 className="font-change one">Coin Type</h1>
            <h1 className="font-change two">USD</h1>
            <h1 className="font-change three">EURO</h1>
          </div>
          {isLoading ? (
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              //   visible={true}
            />
          ) : (
            dataList.map(eachOne => (
              <CryptocurrencyItem currencyDetails={eachOne} key={eachOne.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
