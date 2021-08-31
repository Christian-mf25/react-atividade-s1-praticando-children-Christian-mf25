import logo from './logo.svg'
import './App.css'
import CenteredCard from "./components/CenteredCard"

const child = {
  child1: "Children 1",
  child2: "Children 2",
  child3: "Children 3"
}

function App() {

  return (

    <section id="corpo">

      <h1>
        <CenteredCard children = {child.child1}/> 
      </h1>

      <h1>
        <CenteredCard children = {child.child2}/> 
      </h1>

      <h1>
        <CenteredCard children = {child.child3}/>
      </h1>
  
    </section>
    
  )
}

export default App
