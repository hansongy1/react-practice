import './App.css';
import Logo from "./components/Logo"
import { BrowserView, MobileView } from 'react-device-detect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <BrowserView>
        데스크톱 브라우저!
      </BrowserView>
      <MobileView>
        모바일 브라우저!
      </MobileView>
    </div>
  );
}

export default App;
