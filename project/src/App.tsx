import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CurrencyProvider } from './context/CurrencyContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <CurrencyProvider>
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <ErrorBoundary>
                  <HomePage />
                </ErrorBoundary>
              } />
              <Route path="/country/:slug" element={
                <ErrorBoundary>
                  <CountryPage />
                </ErrorBoundary>
              } />
              <Route path="/about" element={
                <ErrorBoundary>
                  <AboutPage />
                </ErrorBoundary>
              } />
              <Route path="/contact" element={
                <ErrorBoundary>
                  <ContactPage />
                </ErrorBoundary>
              } />
              <Route path="/products" element={
                <ErrorBoundary>
                  <ProductsPage />
                </ErrorBoundary>
              } />
              <Route path="/services" element={
                <ErrorBoundary>
                  <ServicesPage />
                </ErrorBoundary>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </CurrencyProvider>
    </ErrorBoundary>
  );
}

export default App;