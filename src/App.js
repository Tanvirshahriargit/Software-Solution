import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Teamcontainer from './component/Teamcontainer/Teamcontainer';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Teamcontainer></Teamcontainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
