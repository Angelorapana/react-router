import { useParams } from "react-router-dom";

function DettaglioProdotto() {
    const { id } = useParams();

    return (
        <div>
            <h1>Info di {id}</h1>
        </div>
    );
}

export default DettaglioProdotto;