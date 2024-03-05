//Behöver gå igenom igen

// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

import React, { useState } from "react";

// ChildComponent
function ChildComponent({ onColorChange }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    onColorChange(color); // Skicka det valda färgalternativet till ParentComponent
  };

  return (
    <div>
      <label>Välj din favoritfärg:</label>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Välj en färg</option>
        <option value="red">Röd</option>
        <option value="blue">Blå</option>
        <option value="green">Grön</option>
        <option value="yellow">Gul</option>
      </select>
    </div>
  );
}

// ParentComponent
function App() {
  const [favoriteColor, setFavoriteColor] = useState("");

  const handleColorChange = (color) => {
    setFavoriteColor(color); // Uppdatera användarens valda favoritfärg i ParentComponent
  };

  return (
    <div>
      <h2>Din favoritfärg: {favoriteColor}</h2>
      <ChildComponent onColorChange={handleColorChange} />
    </div>
  );
}

export default App;
