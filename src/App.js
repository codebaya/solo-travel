import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import data from "./data";

function App() {
    console.log("data :", data)
    const travelData = data.map(data => {
        return <Body
            items={data}

        />
    })

  return (
    <div className="App">
        <Header />
        {/*<Body />*/}
        <section className="maincontent">
            {travelData}
        </section>



    </div>
  );
}

export default App;
