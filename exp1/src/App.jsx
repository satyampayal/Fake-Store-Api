import {Routes,Route} from 'react-router-dom'
import ProductApp from './Components/ProductApp'
import './App.css'
import ProductDetails from './Components/ProductDetails'

function App() {
  //const [count, setCount] = useState(0)
 
  return (
    <div>
    <h1>Products Dashboard</h1>
      <Routes>
        <Route path='/' element={<ProductApp/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
