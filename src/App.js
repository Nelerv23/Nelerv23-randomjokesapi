import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/random";
   

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setQuote(json.value);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


return (
    <div className="rquote">
        {quote}<br />
        <a href='/'><button>New Quote</button></a>
    </div>
);
};


export default App;

