import './App.css';
import ParentContext from './ContextAPI/Parent';
import { UserProvider } from './ContextAPI/UserContext';
import HOC from './HighOrderComponents/HOC';
import EnhancedHelloWorld from './HighOrderComponents/HelloWorld'
import Home from './ReactPortal/Home';
function App() {
  return (
    <div className="App">
      {/* <UserProvider>
        <ParentContext />
      </UserProvider> */}
      <Home/>
    </div>
  );
}

export default App;
