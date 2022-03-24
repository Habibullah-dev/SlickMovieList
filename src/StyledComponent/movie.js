import styled from 'styled-components';

export const MovieContainer = styled.section`
background-color: white;
padding-left: 77px;
padding-bottom: 30px;
padding-top: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media(max-width: 450px){
    padding-left: 28px;
 }  
`;

export const MovieSearch = styled.div`
    width: 100%;
    padding-right: 57px;
    p{
        color: black;
    }
    @media(max-width: 834px){
            
    }
    @media(max-width: 450px){
       input {            
        height: 34px;
        width: 265px;
        font-size :16px;
       }
       p {
           font-size: 16px;
       }
    }  
`;
export const MovieCategory = styled.div`
    width:100%;
    margin-top:48px;
    p{
        color: black;
    }

    @media(max-width: 450px){
        p {
            font-size: 16px;
        }
     }  
    

`;

export const MovieListScroll = styled.div`
   display : flex;
   scroll-behaviour : smooth;
   overflow: auto;
   cursor: all-scroll;
   margin-top: 18px;
   height: auto;

`;

export const Movie= styled.div`
      height: 300px;
      min-width: 300px;
      border-radius: 12px;
      background: #000000;
      margin-right:13px;
      display : flex;
      justify-content :center;
      align-items : center;
      object-fit : cover;
        p{
            color: white;
        }
         @media(max-width: 834px){
            
            }
        @media(max-width: 450px){
            height: 200px;
            min-width: 200px;
        }  
      
`;
 
export const MovieImage= styled.img`
      border-radius: 12px;  
      height:300px;
      width:300px;

      @media(max-width: 450px){
        height: 200px;
        min-width: 200px;
    } 
      
`;