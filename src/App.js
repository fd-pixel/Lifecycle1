import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isim, setİsim] = useState("Mehmet");
  // useEffect(() => {
  //   console.log("useEffect başladı");
  // }, [isim]);

  // const handleClick = () => {
  //   setİsim("Veli");
  // };

  useEffect(() => {
    console.log("useEffect başladı");
  }, [isim]);

  return (
    <div className="App">
      <h1>Merhaba {isim}</h1>
      <button onClick={() => setİsim("Veli")}> İsmi Değiştir</button>
      <MesajGöster />
    </div>
  );
}
function MesajGöster() {
  const [birinci, setBirinci] = useState(true);
  useEffect(() => {
    console.log("isim değişti");
  }, [birinci]);
  return (
    <div>
      {birinci ? (
        <h1>Mal da yalan mülk de yalan</h1>
      ) : (
        <h1>Hayat fani ölüm ani</h1>
      )}
      <button onClick={() => setBirinci(!birinci)}> Mesajı Değiştir</button>
    </div>
  );
}
