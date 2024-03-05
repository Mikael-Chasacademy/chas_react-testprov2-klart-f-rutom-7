//En genomgång på det här behövs

// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// Exempel på användning:
import React from "react";
import { useState, useEffect } from "react"; //ChatGPT

//Marcus kod############################################
function useFetchData(link) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  async function getData() {
    const result = await fetch(link);
    const data = await result.json();
    setData(data);
  }

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        getData();
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  return { data, isLoading };
}
//Marcus kod############################################

//Davids kod############################################
function UserList() {
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) return <div>Laddar...</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
//Davids kod############################################

//ChatGPT###############################################
/* const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel fetch if component unmounts or URL changes
    return () => {
      setData(null);
      setIsLoading(true);
    };
  }, [url]);

  return { data, isLoading };
};

function App() {
  return (
    <div>
      <h1>Användarlista</h1>
      <UserList />
    </div>
  );
}
//ChatGPT###############################################
*/

//Marcus kod############################################
function App() {
  return (
    <div>
      <UserList></UserList>
    </div>
  );
}
//Marcus kod############################################

export default App;
