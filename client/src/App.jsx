import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import styles from './App.css';
import Nav from './components/Nav/Nav';

function App() {

  return (
    <div className={styles.divApp}>
      <Nav />
      <Routes>
        <Route 
          path='/'
          element={<Landing />}
          />
      </Routes>
    </div>
  );
}

export default App;
