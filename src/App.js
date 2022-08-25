import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
