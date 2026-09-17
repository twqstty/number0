import axios from 'axios'

export interface IEmojiItem {
  id: number
  emoji: string
  title: string
  keywords: string
}

const API_URL = 'http://localhost:3000/api/emojis'

export const getEmojis = async (
  query?: string,
  signal?: AbortSignal
): Promise<IEmojiItem[]> => {
  try {
    const params = query ? { q: query } : undefined
    const response = await axios.get<IEmojiItem[]>(API_URL, { params, signal })
    return response.data
  } catch (error) {
    if (axios.isCancel(error)) {
      throw error
    }

    console.error('Ошибка при запросе к API:', error)
    throw error
  }
}


export const isCancelledRequest = (error: unknown): boolean => axios.isCancel(error)