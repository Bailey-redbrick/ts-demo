import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [avatarInfo, setAvatarInfo] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/avatar");
      const json = await res.json();
      setAvatarInfo(json);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {Object.entries(avatarInfo).map((info, key) => (
        <p key={key}>
          {info[0]}
          {info[1]}
        </p>
      ))}
    </div>
  );
}

export default App;
