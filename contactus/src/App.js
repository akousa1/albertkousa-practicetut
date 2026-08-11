import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";

function App() {
  return (
    <div>
      <Navigation/>
       <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
