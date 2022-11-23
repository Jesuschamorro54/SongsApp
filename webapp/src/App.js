import Nav from "./components/Nav";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="containerMainSearch">
        <MainSearch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
