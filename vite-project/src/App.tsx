import { useState } from 'react'
import './App.css'

const emojisData = [
  {
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow'
  },
  {
    emoji: '🔢',
    title: '1234',
    keywords: 'Input symbol for numbers symbol'
  },
  {
    emoji: '🦀',
    title: 'Crab',
    keywords: 'Crab, sea creature, eat'
  },
  {
    emoji: '✅',
    title: 'Check Mark',
    keywords: 'Yes, confirm'
  },
  {
    emoji: '🫡',
    title: 'Saluting Face',
    keywords: 'Salute, respect'
  },
  {
    emoji: '🇺🇸',
    title: 'USA',
    keywords: 'Flag of USA'
  },
  {
    emoji: '🥶',
    title: 'Cold',
    keywords: 'Cold, temperature, winter'
  },
  {
    emoji: '🙅🏻‍♀️',
    title: 'Woman Gesturing No',
    keywords: 'No, stop, woman'
  },
  {
    emoji: '👅',
    title: 'Tongue',
    keywords: 'Tongue'
  },
  {
    emoji: '🙏🏿',
    title: 'Person With Folded Hands',
    keywords: 'Pls, thanks'
  },
  {
    emoji: '🥳',
    title: 'Party Face',
    keywords: 'party, happy'
  },
  {
    emoji: '🤬',
    title: 'Angry Face',
    keywords: 'Angry, mad, rage'
  },
  {
    emoji: '💩',
    title: 'Poo',
    keywords: 'Poo, poop, shit'
  },
  {
    emoji: '🤡',
    title: 'Clown',
    keywords: 'Clown, funny'
  },
  {
    emoji: '💀',
    title: 'Skull',
    keywords: 'Skull, death'
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEmojis = emojisData.filter(item => 
    item.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p className='desc'>
          Find emoji by keywords
        </p>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main>
        <div className='container'>
          {filteredEmojis.map((item, index) => (
            <div className='card' key={index}>
              <p className='emoji'>{item.emoji}</p>
              <p className='title'>{item.title}</p>
              <p className='keywords'>{item.keywords}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App