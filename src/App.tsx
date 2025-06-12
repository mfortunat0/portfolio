import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a
          href="https://wa.me/5512992269582"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center floating-element"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a
          href="https://github.com/mfortunat0"
          className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg flex items-center justify-center floating-element"
          style={{ width: "60px", height: "60px", animationDelay: "0.3s" }}
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
      </div>
    </>
  );
}

export default App;
