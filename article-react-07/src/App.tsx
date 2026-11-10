import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { APP_VERSION } from './environment';

function App() {
  const appVersion = APP_VERSION;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {appVersion}
      </div>
    </>
  )
}

export default App
