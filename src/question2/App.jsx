//En genomgång skulle vara nice

// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("mitt@mejladress.com");
  const [edit, setEdit] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = () => {
    setEdit(true);
    setNewEmail(email);
  };

  const handleSave = () => {
    setEmail(newEmail);
    setEdit(false);
  };

  const handleInputChange = (event) => {
    setNewEmail(event.target.value);
  };

  return (
    <div>
      <h2>
        Email:{" "}
        {edit ? (
          <input type="email" value={newEmail} onChange={handleInputChange} />
        ) : (
          email
        )}
        {!edit && <button onClick={handleEdit}>Edit</button>}
        {edit && <button onClick={handleSave}>Save</button>}
      </h2>
    </div>
  );
}

export default App;
