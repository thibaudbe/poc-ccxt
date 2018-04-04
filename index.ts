import * as ccxt from 'ccxt'

// console.log(ccxt.exchanges)

// type Exchange = typeof ccxt.binance

// type ExchangeInstance =
//   | ccxt.binance
//   | ccxt.poloniex
//   // | ccxt.huobi
//   | ccxt.cryptopia
//   | ccxt.cobinhood
//   // | ccxt.gdax
//   | ccxt.kraken

const initApp = async () => {
  try {
    const exchangesInstances: ccxt.Exchange[] = [
      new ccxt.binance(),
      new ccxt.poloniex(),
      // new ccxt.huobi(),
      new ccxt.cryptopia(),
      new ccxt.cobinhood(),
      // new ccxt.gdax(),
      new ccxt.kraken(),
    ]

    console.log('loading...')
    const exchangesRequest = (x: ccxt.Exchange) => x.fetchTickers()
    const data = await Promise.all(exchangesInstances.map(exchangesRequest))

    // const exchange = new ccxt.binance()
    // const tickers = await exchange.fetchTickers()
    // const tickersKeys = Object.keys(tickers)
  
    // const dataKeys = Object.keys(data)
    const dataCustom = data.map(d => Object.keys(d).length)
    console.log(dataCustom)
  } catch (err) {
    throw Error(err)
  }
}

initApp()
