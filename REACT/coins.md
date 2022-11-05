# Coins

```
import { useEffect, useState } from "react";
function App() {
   const [loading, setLoading] = useState(true);
   //배열형태의 state 생성 
   const [coins, setCoins] = useState([]);
  useEffect(() => {
  // coin들을 가져옴
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
       // 삼항연산자
       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
```
