import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <Router>
      <div className="App px-32">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
