import './App.css'
import Buttons from './components/Buttons'
import TopHeader from './components/Top-header'
function App() {


  return (
    <div>
      <div className='flex flex-col gap-8'>
        <TopHeader/>
        <Buttons/>
      </div>
      
    </div>
  )
}

export default App
