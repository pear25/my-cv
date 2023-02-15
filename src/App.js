import './App.css';
import Headbar from './components/Headbar/Headbar';
import Introduction from './components/Headbar/Introduction/Introduction';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WorkExp from './components/Headbar/WorkExperience/WorkExp';


function App() {
  return (
    <div className="App">
    <Headbar />
    <Introduction />
    <WorkExp />    
    </div>
  );
}

export default App;
