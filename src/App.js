import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
        <h1>Profile of Computer Engineers</h1>
        <Testimonio
          nombre='Manuel Gil'
          pais='Venezuela'
          imagen='manuel'
          cargo='Software Engineer'
          empresa='KAVAK'
          testimonio='Im a Computer Engineering student at Simón Bolívar University in Caracas, Venezuela. I am currently in my last quarters of University and I have almost 3 years of experience in the development of Web applications, from the specific development of Frontend, as well as experiences such as FullStack and mobile application development using the Ionic framework. The technologies that I have had the opportunity to learn while working have been: Angular, Laravel (PHP), Sass, Django (Python), Ionic, a bit of Cypress for testing, also a bit of ReactJs.'
          />
        <Testimonio
          nombre='Andres Gil'
          pais='Venezuela'
          imagen='andres'
          cargo='Student of Computer Engineering'
          empresa='UCAB'
          testimonio='Currently, I have experience in different programming languages such as Java, C++, C, Pascal and Javascript. I am in the middle of my career'
          />
        {/* <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Trabaja en spotify :)'
          /> */}
      </div>
    </div>
  ); 
}

export default App;
