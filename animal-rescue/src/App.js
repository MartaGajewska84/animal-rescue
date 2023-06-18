import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Error, Home, Animals, SingleAnimal } from './pages';
import { Navbar, Footer, Sidebar } from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="animals" element={<Animals/>}/>
      <Route path="animals/:id" element={<SingleAnimal/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
