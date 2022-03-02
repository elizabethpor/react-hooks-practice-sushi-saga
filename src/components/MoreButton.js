import React from "react";

function MoreButton({onAddSushi}) {

  function handleClick() {
    onAddSushi()
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
