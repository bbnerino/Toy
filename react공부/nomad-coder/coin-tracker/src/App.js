import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading,setLoading] = useState(true)
  const [coins,setCoins] = useState([])
  const [moneyIhave,setMoneyIhave] = useState(0)
  const [coinBuy,setCoinBuy] = useState(0)
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then(
      json=>{setCoins(json)
      setLoading(false)
      })
  },[])

  const onChange = (e)=>{
    setMoneyIhave(e.target.value)
  }
  const onChangeCoin =(e)=>{
    console.log(e.target.value)
    setCoinBuy(e.target.value)
  }

  return (
    <div >
      <div>
        <h1>내가가진돈은?</h1>
        <input onChange={onChange}></input>
        <h1 className='inline'> $</h1>
      </div>
      <h1>The Coins!{loading? "": `(${coins.length})`} </h1>
      {loading ? 
      <strong>"loading..."</strong> :
      <select value={coinBuy} onChange={onChangeCoin}>
        {coins.map((coin)=>
          <option value={coin.quotes.USD.price} key={coin.id}>
            {coin.name}({coin.symbol}:${coin.quotes.USD.price})
          </option>)}
      </select>
      }
      <h1>{coinBuy?`${coinBuy}`:""}</h1>
      <h1>얼마나살수있을까</h1>
      {moneyIhave ? <h1>{coinBuy/moneyIhave}개</h1> :"" }
    </div>
  );
}

export default App;
