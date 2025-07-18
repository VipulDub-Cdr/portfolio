import About from "./components/About";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
// import Blogs from "./components/Blogs";

import { ThemeProvider } from "./provider/ThemeProvider";
import { CursorProvider } from "./context/cursor.context.tsx";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col">
          <Cursor />
          <main className="mx-auto p-6 w-full">
            <Header />
            <About />
            <Experience />
            <Education />
            <Projects />
            {/* <Blogs /> */}
          </main>
          <Footer />
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
