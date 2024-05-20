// import './App.css';
// import Logo from "./components/Logo"
// import { BrowserView, MobileView } from 'react-device-detect'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Logo />
//       </header>
//       <BrowserView>
//         데스크톱 브라우저! <br/> 컨텐츠 요소 표시
//       </BrowserView>
//       <MobileView>
//         모바일 브라우저! 컨텐츠 요소가 표시됩니다.
//         <section>

//         </section>
//       </MobileView>
//     </div>
//   );
// }

// export default App;

/* App.js */
// import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'
import Header from './layouts/Header';

function App() {
  return (
    <section className='contents'>
      <BrowserView>
        브라우저 뷰입니다.
      </BrowserView>
      <MobileView>
        <p>모바일뷰입니다.</p>
      </MobileView>
    </section>
  );
}

export default App;