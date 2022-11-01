import axios from "axios";
import { useEffect, useState } from "react";
import "./routes.css";
const DarthVaderRoute = () => {
    const [darthVaderUrl, setdarthVaderUrl] = useState(
        "https://swapi.dev/api/people/?format=json"
    );
    const [darth, setDarth] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(darthVaderUrl);
            setDarth(res.data.results[3]);
        };
        fetch();
    }, [darthVaderUrl]);

    return (
        <>
            {!darth ? (
                <p className="error">Loading.../ Not Found</p>
            ) : (
                <>
                    <div className="routes-title">{darth.name}</div>
                    <div className="routes-container">
                        <div className="routes-image img-darth"></div>
                        <div className="routes-text">
                            Height: {darth.height} cm
                            <br /> Birth Year: {darth.birth_year} <br /> Gender:{" "}
                            {darth.gender.toUpperCase()}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DarthVaderRoute;
