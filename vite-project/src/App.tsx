import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p className='desc'>
          Find emoji by keywords
        </p>

        <input type="text" />
      </header>

      <main>

        <div className='container'>

        <div className='card'>
          <p className='emoji'>💯</p>
          <p className='title'>100</p>
          <p className='keywords'>Hundred, points, symbol, wow</p>
        </div>
        <div className='card'>
          <p className='emoji'>🔢</p>
          <p className='title'>1234</p>
          <p className='keywords'>input symbol for numbers symbol</p>
        </div>
        <div className='card'>
          <p className='emoji'>🦀</p>
          <p className='title'>Crab</p>
          <p className='keywords'></p>
        </div>
        <div className='card'>
          <p className='emoji'>✅</p>
          <p className='title'>Check Mark</p>
          <p className='keywords'></p>
        </div>
        <div className='card'>
          <p className='emoji'>🫡</p>
          <p className='title'>Saluting Face</p>
          <p className='keywords'></p>
        </div>
        <div className='card'>
          <p className='emoji'>🇺🇸</p>
          <p className='title'>USA</p>
          <p className='keywords'>Flag of USA</p>
        </div>
        <div className='card'>
          <p className='emoji'>🥶</p>
          <p className='title'>Cold</p>
          <p className='keywords'>Cold, temperature, winter</p>
        </div>
        <div className='card'>
          <p className='emoji'>🙅🏻‍♀️</p>
          <p className='title'>Woman Gesturing No</p>
          <p className='keywords'>No, stop, woman</p>
        </div>
        <div className='card'>
          <p className='emoji'>👅</p>
          <p className='title'>Tongue</p>
          <p className='keywords'>Tongue</p>
        </div>
        <div className='card'>
          <p className='emoji'>🙏🏿</p>
          <p className='title'>Person With Folded Hands</p>
          <p className='keywords'>Pls, thanks</p>
        </div>
        <div className='card'>
          <p className='emoji'>🥳</p>
          <p className='title'>Party Face</p>
          <p className='keywords'>party, happy</p>
        </div>
        <div className='card'>
          <p className='emoji'>🤬</p>
          <p className='title'>Angry Face</p>
          <p className='keywords'>Angry, mad, rage</p>
        </div>
        <div className='card'>
          <p className='emoji'>💩</p>
          <p className='title'>Poo</p>
          <p className='keywords'>Poo, poop, shit</p>
        </div>
        <div className='card'>
          <p className='emoji'>🤡</p>
          <p className='title'>Clown</p>
          <p className='keywords'>Clown, funny</p>
        </div>
        <div className='card'>
          <p className='emoji'>💀</p>
          <p className='title'>Skull</p>
          <p className='keywords'>Skull, death</p>
        </div>

      </div>

      </main>
    </>
  )
}

export default App