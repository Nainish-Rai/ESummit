import "./App.css";
import Details from "./sections/Details";
import Footer from "./sections/Footer";
import FormSection from "./sections/FormSection";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="app bg-black text-gray-200 w-full mx-auto lg:px-12 xl:px-0 px-4">
      <Hero />
      <Details />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
