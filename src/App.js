// import logo from './logo.svg';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

import "./App.css";

function App() {
  const [showCustomize, setShowCustomize] = useState(false);
  const onclickCustomize = () => {
    setShowCustomize(!showCustomize);
  };
  return (
    <div className="App">
      <Header
        showCustomize={showCustomize}
        onclickCustomize={onclickCustomize}
      />
      <Home showCustomize={showCustomize} setShowCustomize={setShowCustomize} />
      <Footer />
    </div>
  );
}

export default App;
