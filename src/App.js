import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import beastBios from './data.json';
function App() {
  return (
    <Container>
      <Header title="Horned Beasts" />
      <Main beastBios={beastBios}/>
      <Footer title="Created by Anthony Morton"/>
    </Container>
  );
}

export default App;
