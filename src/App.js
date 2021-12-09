import Banner from "./components/Banner/Banner";
import BoxList from "./components/BoxList/BoxList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import BestProduct from "./components/BestProduct/BestProduct";
import Introduction from "./components/Introduction/Introduction";
import BrandStory from "./components/BrandStory/BrandStory";
import BrandIssue from "./components/BrandIssue/BrandIssue";
import Video from "./components/Video/Video";




function App() {
  return (
    <Router>
 <div className="App">
      <div className="main">
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <BoxList />
      <BrandStory />
      <BrandIssue />
      <Video />
      <Footer />
      </div>
     
    </div>
    </Router>
   
  );
}

export default App;
