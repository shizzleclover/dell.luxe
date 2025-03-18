import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CheckoutPage } from './pages/CheckoutPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* Additional routes will go here */}
      </Routes>
    </Layout>
  );
}

export default App;
