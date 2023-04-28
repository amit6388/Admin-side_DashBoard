import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  const location = useLocation()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(location.pathname.startsWith('/admin'))
  }, [location.pathname])
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      {isAdmin &&
        <Sidebar>
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/about" element={<About />} />
            <Route path="/admin/comment" element={<Comment />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/productList" element={<ProductList />} />
          </Routes>
        </Sidebar>
      }
    </Fragment>);
};

export default App;