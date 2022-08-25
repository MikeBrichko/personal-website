import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Blog from './components/blog/Blog';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
