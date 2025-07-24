import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const HotelDetailsPage = lazy(() => import("./pages/HotelDetailsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel/:id" element={<HotelDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
