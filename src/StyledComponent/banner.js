import styled from 'styled-components';
import img from '../image/movie-banner.png';

export const BannerContainer = styled.section`
width:100%;
height: 550px;
background-image:url(${img});
background-size:cover;
display:flex;
justify-content:start;  
align-items:center;

@media(max-width: 834px){
    justify-content:center;  
}   
@media(max-width: 450px){
   height:257px;
}  

`;

export const BannerText = styled.h1`
    margin-left:77px;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 94px;
    letter-spacing: -0.05em;
    text-align: left;
    width: 50%;
    @media(max-width: 834px){
        text-align: center;
        margin-left: 0;
        margin:auto;
    }   
    
    @media(max-width: 450px){
        width: 100%; 
        font-size:32px;
        line-height: 50px;
    }  

    
`;