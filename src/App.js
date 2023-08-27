import './App.css';
import Button from './components/Button';
import freeCodeCampLogo from './pictures/freecodecamp-logo.png';

function App() {

  const clickHandler = () => {
    console.log('Click');
  }

  const resetCounter = () => {
    console.log('Reset');
  }

  return (
    <div className="App">
      <picture className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </picture>
      <section className='main-container'>
        <Button 
          text = 'Click'
          isClickBtn={true}
          clickHandler={clickHandler} />
        <Button
          text='Reiniciar'
          isClickBtn={false}
          clickHandler={resetCounter} />
      </section>
    </div>
  );
}

export default App;
