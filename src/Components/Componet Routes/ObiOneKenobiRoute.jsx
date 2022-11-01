import axios from "axios";
import { useEffect, useState } from "react";
import "./routes.css";
const ObiOneKenobiRoute = () => {
    const [obiOneUrl, setobiOneUrl] = useState(
        "https://swapi.dev/api/people/?format=json"
    );
    const [obi, setObi] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(obiOneUrl);
            setObi(res.data.results[9]);
        };
        fetch();
    }, [obiOneUrl]);

    return (
        <>
            {!obi ? (
                <p className="error">Loading.../ Not Found</p>
            ) : (
                <>
                    <div className="routes-title">{obi.name}</div>
                    <div className="routes-container">
                        <div className="routes-image img-obi"></div>
                        <div className="routes-text">
                            Height: {obi.height} cm
                            <br /> Birth Year: {obi.birth_year} <br /> Gender:{" "}
                            {obi.gender.toUpperCase()}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ObiOneKenobiRoute;
