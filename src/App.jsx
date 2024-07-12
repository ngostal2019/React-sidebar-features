import "./styles/main.scss";
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Performance from './pages/Performance';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Transactions from './pages/Transactions';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
     <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/performance" element={<Performance />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/transactions" element={<Transactions />}/>
      </Routes>
     </div>
   </Router>
  );
}

export default App;
