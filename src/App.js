import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

function App () {
  const colorsArray = ['red', 'blue', 'yellow', 'purple']
  return (
    <div className='App'>
      <header className='App-header'>
        <Button colors={colorsArray} />
      </header>
    </div>
  )
}

export default App
