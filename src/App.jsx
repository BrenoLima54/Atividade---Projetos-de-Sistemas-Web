import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://v1.mma.api-sports.io/fighters?id=691", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.mma.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <></>;
}

export default App;
