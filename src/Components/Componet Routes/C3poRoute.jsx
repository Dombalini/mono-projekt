import axios from "axios";
import { useEffect, useState } from "react";
import "./routes.css";
const C3poRoute = () => {
    const [cpoUrl, setcpoUrl] = useState(
        "https://swapi.dev/api/people/?format=json"
    );
    const [cpo, setCpo] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(cpoUrl);
            setCpo(res.data.results[1]);
        };
        fetch();
    }, [cpoUrl]);

    return (
        <>
            {!cpo ? (
                <p className="error">Loading.../ Not Found</p>
            ) : (
                <>
                    <div className="routes-title">{cpo.name}</div>
                    <div className="routes-container">
                        <div className="routes-image img-3cpo"></div>
                        <div className="routes-text">
                            Height: {cpo.height} cm
                            <br /> Birth Year: {cpo.birth_year} <br /> Gender:{" "}
                            {cpo.gender.toUpperCase()}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default C3poRoute;
