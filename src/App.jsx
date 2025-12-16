import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BaseLayout from "./components/layouts/BaseLayout";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ProjectsPage from "./pages/Projects/Projects";
import ContactsPage from "./pages/Contacts/Contacts";
import SingleProjectPage from "./pages/SingleProject/SingleProject";

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
              <Route path=":id" element={<SingleProjectPage />} />
            </Route>
            <Route path={"contacts"} element={<ContactsPage />} />
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
