import styled from 'styled-components'

export const Container = styled.div`
  height: 9vh;
  background-color: #0564FF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;;
  color: whitesmoke;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 4vw;
    padding: 2vw;
  }

  h1{
    cursor: pointer;
  }
  
`
export const Button = styled.div`
    display: flex;
    justify-content: space-between;
    width: 7vw;
    height: 2.5vw;

    img{
      cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      width: 18vw;
      height: 8vw;
    }
`