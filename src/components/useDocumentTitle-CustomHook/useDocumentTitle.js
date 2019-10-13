import { useEffect } from 'react'

export default function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
}
