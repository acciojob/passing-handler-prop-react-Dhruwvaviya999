import React, { useState } from "react";

const Selection = ({applyColor}) => {
  const [style, setStyle] = useState({ background: "" });

  function handleClick () {
    applyColor(setStyle);
  }

  return (
    <>
      <div style={style} onClick={handleClick} className="fix-box">Selection</div>
      <div style={style} onClick={handleClick} className="fix-box">Selection</div>
      <div style={style} onClick={handleClick} className="fix-box">Selection</div>
    </>
  )
}

export default Selection;
