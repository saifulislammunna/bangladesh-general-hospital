 
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AboutBgh from './components/AboutBgh/AboutBgh';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import LatesNews from './components/LatestNews/LatesNews';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header> 
          <Banner></Banner> 
            <Switch>
            <Route exact path="/">
                <Home></Home>
              </Route> 
             
              <Route  path="/home">
                <Home></Home>
              </Route> 
              

               <Route  path="/login">
                  <Login></Login>
              </Route>  

              <Route path="/aboutbgh">
                   <AboutBgh></AboutBgh>
              </Route>  
               
               <Route path="/latestnews">
                   <LatesNews></LatesNews>

               </Route>
              
              
              <Route path="*">
                   <NotFound></NotFound>
              </Route>

            </Switch>

             <Footer></Footer>  
        </BrowserRouter>
    </div>
  );
}

export default App;
