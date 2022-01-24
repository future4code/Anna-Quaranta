import PacmanLoader from "react-spinners/PacmanLoader";
import { primaryColor } from "../../constants/colors";
import { Container } from "./StyledLoading";

const Loading = () => {
    return (
        <Container>
            <PacmanLoader color={primaryColor} size={30} margin={3} />
        </Container>

    )
}

export default Loading