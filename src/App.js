import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Bannner';
import Navigation from './components/navigation/Navigation';
import Reviews from './components/reviews/Reviews';
import HomeReviews from '../src/components/homereviews/HomeReviews';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from '../src/components/dashboard/Dashboard';
import Blogs from './components/blogs/Blogs';
import NotFound from '../src/components/notfound/NotFound';
import About from './components/about/About';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
         <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
         <Route path="/blogs" element={<Blogs></Blogs>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
