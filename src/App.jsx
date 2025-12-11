import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import BaseLayout from "./components/layouts/BaseLayout";
import ScrollToTop from "./components/ui/ScrollToTop";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path={"about-me"} element={<About />} />
            <Route path={"projects"}>
              <Route path={""} element={<Projects />} />
              <Route path=":id" element={<SingleProject />} />
            </Route>
            <Route path={"contacts"} element={<Contacts />} />
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
