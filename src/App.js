import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// const publicRoute = [
//   { path: "/", name: "Home", Component: Home },
//   { path: "/about", name: "About", Component: About },
//   { path: "/services", name: "Services", Component: Services },
//   { path: "/contact", name: "Contact", Component: Contact },
//   { path: "/login", name: "Login", Component: Login },
// ];

function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="App">
      <Navbar>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} /> */}
          {/* {
            publicRoute.map(route => <Route path={route.path} element={<route.Component />} />)
          } */}
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
        </Routes>
      </Navbar>

    </div >
  );
}

export default App;
