import axios from "axios";
import { useEffect, useState } from "react";
import "./routes.css";
const LukeSkywalkerROutes = () => {
    const [lukeurl, setLukeUrl] = useState(
        "https://swapi.dev/api/people/?format=json"
    );
    const [luke, setLuke] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(lukeurl);
            setLuke(res.data.results[0]);
        };
        fetch();
    }, [lukeurl]);

    return (
        <>
            {!luke ? (
                <p className="error">Loading.../ Not Found</p>
            ) : (
                <>
                    <div className="routes-title">{luke.name}</div>
                    <div className="routes-container">
                        <div className="routes-image img-luke"></div>
                        <div className="routes-text">
                            Height: {luke.height} cm
                            <br /> Birth Year: {luke.birth_year} <br /> Gender:{" "}
                            {luke.gender.toUpperCase()}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default LukeSkywalkerROutes;
