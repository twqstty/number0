import { useState, useEffect } from 'react'
import { getEmojis, isCancelledRequest, type IEmojiItem } from '../src/api/emojiApi.ts'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [emojis, setEmojis] = useState<IEmojiItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getEmojis(searchTerm, controller.signal)
        setEmojis(data)
      } catch (err) {
        if (isCancelledRequest(err)) return
        setError('Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [searchTerm])

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
          {loading && <p className='status'>Загрузка эмодзи...</p>}

          {!loading && error && <p className='status status--error'>{error}</p>}

          {!loading && !error && emojis.length === 0 && (
            <p className='status'>Эмодзи не найдены</p>
          )}

          {!loading && !error && emojis.map((item) => (
            <div className='card' key={item.id}>
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