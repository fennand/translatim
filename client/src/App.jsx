import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [imageUrl, setImageUrl] = useState([]);

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `https://translatim-3547.onrender.com/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
    setImageUrl(res.data.img_url);
  }

  return (
    <>
      <header>
        <h1 className="glow">Say Whaaaatt? Translator</h1>
      </header>
      <main>
        <form onSubmit={handleTranslate}>
          <div className="container">
            <h2>Select input language</h2>
            <select onChange={(event) => setFrom(event.target.value)}>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            <input
              placeholder="Translate"
              onChange={(event) => setWord(event.target.value)}
            />
          </div>

          <div className="container">
            <h2>Select output language</h2>
            <select onChange={(event) => setTo(event.target.value)}>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            <button>Submit</button>
            <h2>Translation:</h2>
            <div className="output">{translation}</div>
          </div>
        </form>
        <img src={imageUrl} alt="" />
      </main>
      <footer>
        <p className="foot-text">
          Made by <a href="https://github.com/fennand">Andy Fen</a>
        </p>
      </footer>
    </>
  );
}

export default App;
