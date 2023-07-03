import './App.css';
import  {Navbar}  from './components/Navbar'
import  {HomePage}  from './components/HomePage'
import  {InfoPaper}  from './components/InfoPaper'
import  {SecondPart}  from './components/SecondPart'
import  {Planning}  from './components/Planning'
import  {GlobalNetwork}  from './components/GlobalNetwork'
import  {Comment}  from './components/Comment'
import  {SubcribeCard}  from './components/SubcribeCard'


function App() {
  return (
    <div className="container">
      <Navbar/>
      <HomePage/>
      <InfoPaper/>
      <SecondPart/>
      <Planning/>
      <GlobalNetwork/>
      <Comment/>
      <SubcribeCard/>
      

    </div>
  );
}

export default App;
