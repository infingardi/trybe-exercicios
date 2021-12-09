import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

/*
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['estudar react', 'fazer exercicios', 'estudar para a prova'];

function App() {
  return (
    <div>
      {appointments.map(appointment => Task(appointment))}
    </div>
  );
}*/
