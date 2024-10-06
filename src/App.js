
import './App.css';
import {Header, Footer} from './components/index';
import { LanguageProvider } from './context/LanguageContext';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App" >
      <LanguageProvider>
        <Header />
        <AllRoutes />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
