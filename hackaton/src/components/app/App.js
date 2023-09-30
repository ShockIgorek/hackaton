import './App.css';
import AppHeader from '../app-header/app-header.js';
import AboutTheTeam from '../aboutTheTeam/aboutTheTeam.js';
import AboutUs from '../aboutUs/abouUs';
import Job from '../job/job.js';
import Footer from '../footer/footer.js';

function App() {
  return (<>
    <div className="App">
      <AppHeader />
      <AboutTheTeam />
      <AboutUs />
      <Job />
      <Footer />
    </div>
    </>
  );
}

export default App;
