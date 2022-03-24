import styled from 'styled-components';

export const HeaderContainer = styled.div`
        width: 100%;
        height: 140px;
        background: #292929;
        display: flex;
        flex-direction:row;
        align-items: center;
        @media(max-width: 834px){
            justify-content:center;    
        }
        @media(max-width: 450px){
           height: 67px;
        }  
        `;
export const HeaderLogo = styled.div`
        width: 193px;
        height: 60px;
        background: transparent;
        border: 1px solid #FFFFFF;
        margin-left:77px;
        display :flex;
        justify-content : center;
        align-items : center;
        font-weight: 400;

        @media(max-width: 834px){
              
        }
        @media(max-width: 450px){
           height: 33.58px;
           width : 108px;
           margin-left:0;
           h2 {
               font-size :18px;    
           }
        }  

`;