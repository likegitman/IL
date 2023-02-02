# Coin List
```
import React, { useEffect, useState } from 'react';

function Coin() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState();

    const onChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers").
            then((response) => {
                return response.json();
            })
            .then((data) => {
                setCoins(data);
                setLoading(false);
            });
    }, [])
    return (
        <div>
            <h1>The Coins!({coins.length})</h1>
            {loading ? <h2>Loading...</h2> :
                <div>
                    <select value={value} onChange={onChange}>
                        {coins.map((coin) => (
                            <option key={coin.id}>
                                {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <ul style={{
                        paddingLeft: '18px'
                    }}>
                        <li><h2>{value}</h2></li>
                    </ul>
                </div>
            }

        </div>
    );
}

export default Coin;
```
