import './App.css';
import Container from './components/Container';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='root'>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
