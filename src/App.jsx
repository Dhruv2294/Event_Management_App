import { eventname,plan } from "./menu"
import Product from "./restro"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {

  return (
    <div align="center">
    <Product eventname={eventname} plan={plan}/>
    </div>
  )
}

export default App
