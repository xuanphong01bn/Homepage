import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Banner from "./sections/Banner";
import Introduction from "./sections/Introduction";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <Introduction />
    </div>
  );
}

export default App;
