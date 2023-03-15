// main components
import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Navigation from "./components/RespNav/Navigation";

function App() {
  const [isResNavOpen, setIsResNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isResNavOpen]);

  return (
    <div className="App">
      <Header setIsResNavOpen={setIsResNavOpen} isResNavOpen={isResNavOpen} />
      {isResNavOpen && <Navigation setIsResNavOpen={setIsResNavOpen} />}
    </div>
  );
}

export default App;
