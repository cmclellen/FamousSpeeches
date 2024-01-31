import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DesignPage from "./pages/DesignPage/DesignPage";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<DesignPage />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
