// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.

//ChatGPT###############################################
import React, { createContext, useContext, useState } from "react";

// Steg 1: Skapa en ColorContext
const ColorContext = createContext();

// Steg 2: ColorSelector-komponenten
const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const { dispatch } = useContext(ColorContext);

  const handleChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    dispatch(color); // Uppdatera ColorContext med det nya värdet
  };

  return (
    <div>
      <h2>Välj din favoritfärg:</h2>
      <select value={selectedColor} onChange={handleChange}>
        <option value="red">Röd</option>
        <option value="green">Grön</option>
        <option value="blue">Blå</option>
      </select>
    </div>
  );
};

// Steg 3: ColorDisplay-komponenten
const ColorDisplay = () => {
  const { state } = useContext(ColorContext);

  return (
    <div>
      <h2>Din valda favoritfärg är:</h2>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: state,
        }}
      ></div>
    </div>
  );
};

// Huvudkomponenten som använder ColorContext-provider
const App = () => {
  const [state, dispatch] = useState(null);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      <div>
        <ColorSelector />
        <ColorDisplay />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
//ChatGPT###############################################
