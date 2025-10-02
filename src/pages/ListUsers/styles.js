import styled from "styled-components"

export const Container = styled.div`
   background-color: #181f36;
   min-height: 190vh;
   display: contents;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   padding: 20px;

button{
   background-color: #181f36;
   position: relative;
   left: 92vh;
   width: 170px;
   height: 60px;

&:hover{
   background: linear-gradient(to right, #fe7e5d,#7f3841);
   opacity: 0.8;
 }
&:active{
   background: linear-gradient(to right, #fe7e5d,#7f3841);
    opacity: 0.5;
 }

}

h1{
    position: relative;
    left: 80vh;
    font-size: 40px;
}
`

export const Title = styled.h2`
   color: #fff;
   text-align: center;
   font-size: 38px;
   font-style: normal;
   font-weight: 600;
`

export const ContainerUsers = styled.div`
   display: grid;
   grid-template-columns: 400px 400px;
   gap: 20px;
   margin: 40px 0;

@media (max-width: 750px) {
   grid-template-columns: 1fr;
}
`

export const CardUsers = styled.div`
   background-color: #252d48;
   padding: 16px;
   border-radius: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 20px;
   max-width: 390px;
   position: relative;
   left: 50vh;

h3 {
   color: #fff;
   font-size: 24px;
   margin-bottom: 3px;
    
}

p {  
   color: #fff;
   font-size: 14px;
   font-weight: 200;
}
`

export const TrashIcon = styled.img`
   cursor: pointer;
   padding-left: 30px;

&:hover{
   opacity: 0.8;
}

&:active{
   opacity: 0.5;
}
`

export const AvatarUsers = styled.img`
   height: 80px;
`

export const BackgroundListUsers = styled.div`
   background: linear-gradient(to right, #fe7e5d,#7f3841);
    height: 30vh;
    width: 90vw;
    border-radius: 30px;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 50vh;
    top: 20px
;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`;






