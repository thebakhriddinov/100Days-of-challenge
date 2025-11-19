import "./App.css"

function App() {

    const info = {
      name:"Ozodbek",
      job:"Software engineer"
    }

  return (
    <div className="wrapper">
      <h1>My name is {info.name}</h1>
      <p>I am {info.job}</p>
    </div>
  )
}

export default App