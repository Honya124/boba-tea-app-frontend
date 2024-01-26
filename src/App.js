import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";
import About from "./components/About/About";
import LoginPage from "./pages/LoginPage";
import Shops from "./components/Shops/Shops";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index exact element={<Home />} />
        <Route path="signup" exact element={<SignupPage />} />
        <Route path="login" exact element={<LoginPage />} />
        <Route path="pricing" exact element={<PricingPage />} />
        <Route path="about" exact element={<About />} />
        <Route path="shops" exact element={<Shops />} />
      </Route>
    </Routes>
  );
}

export default App;
