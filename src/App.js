import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';

import {HeaderContainer,HeaderLogo} from './StyledComponent/header';
import {BannerContainer,BannerText} from './StyledComponent/banner';
import {MovieContainer,MovieSearch,MovieCategory,MovieListScroll,Movie,MovieImage} from './StyledComponent/movie'


function App() {

  const [data,setData] = useState([]);
  const [search,setSearch] = useState('');
 

  const SearchUrl = `http://www.omdbapi.com/?s=${search}&apikey=b78fb30c`;

  useEffect(() => {
      axios.get(SearchUrl)
      .then((response) => setData(response.data.Search)); 

  },[SearchUrl]);


  function MovieFuncList(props) {
    return(
      <>
      {
         (props.data) ?
         ( props.data.map((item,index)=> {
            const {imdbId,Poster} = item;
            return  <Movie Key={imdbId}>
                <MovieImage  src={Poster} />
            </Movie>
          })) :
          <Movie> <p>No movie yet</p></Movie>
          
      }
      </>
    )
  }


  return (
    <div className="App">
        <HeaderContainer>
              <HeaderLogo>
                <h2>MyTestApp</h2>
              </HeaderLogo>
        </HeaderContainer>
        <BannerContainer>
         <div>
          <BannerText>
            Watch something incredible.
          </BannerText>
          </div>
        </BannerContainer>
        <MovieContainer>
            <MovieSearch>
                <p>Search</p>
                <input type='text'value={search} onChange={(e) => setSearch(e.target.value)} />
            </MovieSearch>
            <MovieCategory>
                <p>Category</p>
                <MovieListScroll>
                    <MovieFuncList data={data} />
                </MovieListScroll>
            </MovieCategory>
            <MovieCategory>
                <p>Category</p>
                <MovieListScroll>
                   <MovieFuncList data={data} />
                </MovieListScroll>
            </MovieCategory>
        </MovieContainer>  

    </div>
  );
}

export default App;
