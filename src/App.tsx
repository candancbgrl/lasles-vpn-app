import './App.css';
import  {Navbar}  from './components/Navbar'
import  {HomePage}  from './components/HomePage'
import  {InfoPaper}  from './components/InfoPaper'
import  {SecondPart}  from './components/SecondPart'
import  {Planning}  from './components/Planning'
import  {GlobalNetwork}  from './components/GlobalNetwork'
import  {Comment}  from './components/Comment'
import  {SubcribeCard}  from './components/SubcribeCard'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif', // Örneğin Arial fontunu kullanıyoruz
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
