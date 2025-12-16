import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import BaseLayout from "./components/layouts/BaseLayout";
import ScrollToTop from "./components/ui/ScrollToTop";
import SingleProject from "./pages/SingleProject";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/About";
import ProjectsPage from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path={"about-me"} element={<AboutPage />} />
            <Route path={"projects"}>
              <Route path={""} element={<ProjectsPage />} />
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
