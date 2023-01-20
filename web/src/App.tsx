import './styles/global.css'
import { Habit } from './components/habit'

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={2}/>
      <Habit completed={5}/>
      <Habit completed={3}/>
      <Habit completed={8}/>

    </div>
  )
}

export default App
