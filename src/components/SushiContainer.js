import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onRemoveSushi }) {

  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiComponent = sushis
  .slice(sushiIndex, sushiIndex + 4)
  // .filter(sushi => sushi.isEaten === false)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi} onRemoveSushi={onRemoveSushi} />)

  function addSushi() {
    setSushiIndex(sushiIndex => sushiIndex + 4)
  }

  return (
    <div className="belt">
      {sushiComponent}
      <MoreButton onAddSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
