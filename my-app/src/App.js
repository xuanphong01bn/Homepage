import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Banner from "./sections/Banner";
import Introduction from "./sections/Introduction";
import Project from "./sections/Project";
import ProductStudent from "./sections/ProductStudent";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <Introduction />
      <Project />
      <ProductStudent />
    </div>
  );
}

export default App;
