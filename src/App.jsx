import { Outlet } from 'react-router-dom'
import { Header } from './components'

function App() {
  return (
    <div className="h-full grid grid-rows-[max-content_1fr_max-content]">
      <Header />
      <main className="w-full max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
