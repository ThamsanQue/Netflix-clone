import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Row from "./Components/Row";
import requests from "./requests";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app__">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
