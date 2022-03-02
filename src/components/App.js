import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])

  function removeSushi(clickedSushi) {
    const updatedSushi = sushis.map((sushi) => {
      if (clickedSushi.id === sushi.id) {
      return {...sushi, isEaten : true}
      }
    return sushi;
    })
    setSushis(updatedSushi)
  }

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((sushis) => {
      const updatedSushi = sushis.map((sushi) => {
        return {...sushi, isEaten: false}
      })
      setSushis(updatedSushi)
    })
  }, [])

  const plates = sushis.filter((sushi) => sushi.isEaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onRemoveSushi={removeSushi}/>
      <Table plates={plates}/>
    </div>
  );
}

export default App;
