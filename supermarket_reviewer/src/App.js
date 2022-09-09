import './App.css';
import CreateReview from './CreateReview';
import Search from './Search';


function App() {
  

  return (
    <div >
      
      <div className="App tc ma0 pa4 min-vh-100">
        <Search />
        <img className="pa4 br-100 h4 w4 dib" alt="tuskys-logo" src='./Assets/img/tuskys.png' /> 
        <img className="pa4 br-100 h4 w4 dib" alt="naivas-logo" src='./Assets/img/naivas.png' />
        <img className="pa4 br-100 h4 w4 dib" allt="quickmart-logo" src='./Assets/img/quickmart.png' />
        <img className="pa4 br-100 h4 w4 dib" alt="carrefour-logo" src='./Assets/img/carrefour.png' />
        <CreateReview/>

      </div>
    </div>
  );
}

export default App;
