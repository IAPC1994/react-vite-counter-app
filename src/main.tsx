import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Counter initialValue={ 0 } />
  </React.StrictMode>,
)
