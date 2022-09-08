import './App.css';
import Search from './Search';
import Data from './Data';

function App() {
  return (
    <div className="tc bg-blue ma0 pa4 min-vh-100">
      <Search data={Data} />
    </div>
  );
}

export default App;
