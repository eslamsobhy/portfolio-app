// main components
import { useState } from "react";
import Header from "./components/Header/header";
import Navigation from "./components/RespNav/Navigation";

function App() {
  const [isResNavOpen, setIsResNavOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsResNavOpen={setIsResNavOpen} isResNavOpen={isResNavOpen} />
      {isResNavOpen && <Navigation setIsResNavOpen={setIsResNavOpen} />}
    </div>
  );
}

export default App;
