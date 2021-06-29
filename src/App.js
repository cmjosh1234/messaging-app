import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat';

function App() {
  return (
    <div className="app">
       <div className="main-body">
         <Sidebar/>
         <MainChat/>
          
       </div>
       {/* <h1>This is our messaging app home page component</h1> */}

    </div>
  );
}

export default App;