import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </>
  );
}

export default App;
