import HashLoader from "react-spinners/HashLoader"
import styled from "styled-components"

const DivLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 91%;
`

const DivMatch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 250px;
    width: 300px;
`

const Loading = () => {
    return (
        <DivLoader>
            <DivMatch>
                <HashLoader size={60} />
                <h2>Procurando Novos Match...</h2>
            </DivMatch>
        </DivLoader>
    )
}

export default Loading