
import './App.css';
import ProductPage from './pages/ProductPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import ChatBot from './components/ChatBotComponent';
function App() {
  return (
   <>
    <Header/>
    {/*Còn đang cải thiện*/}
    <ChatBot/>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='/product'element={<ProductPage/>}/>
      <Route path='/history' element ={<HistoryPage/>}/>
      <Route path='/favorite' element={<FavoritesPage/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </>
  );
}

export default App;
