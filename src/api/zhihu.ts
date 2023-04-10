import { get } from '@/utils/request'

export function fetchAnswerList<T>() {
  return get<T>({
    url: 'https://skitii-posts.up.railway.app/tAnswer',
  })
}
