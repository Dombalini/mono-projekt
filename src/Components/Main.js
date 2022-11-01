import "./main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import LukeSkywalker from "./LukeSkywalker";
import C3po from "./C3po";
import ObiOneKenobi from "./ObiOneKenobi";
import DarthVader from "./DarthVader";

const Main = () => {
    const [url, setUrl] = useState("https://swapi.dev/api/people/?format=json");
    const [lukeSkywalker, setLukeSkywalker] = useState();
    const [obiOneKenobi, setObiOneKenobi] = useState();
    const [darthVader, setdDarthVader] = useState();
    const [cpo, setCpo] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setLukeSkywalker(res.data.results[0]);
            setObiOneKenobi(res.data.results[9]);
            setdDarthVader(res.data.results[3]);
            setCpo(res.data.results[1]);
        };
        fetch();
    }, [url]);
    return (
        <>
            <div className="header-title">STAR WARS</div>
            <div className="container">
                <div className="star-wars-items-container">
                    {!lukeSkywalker ? (
                        <p className="error">NOT FOUND/LOADING...</p>
                    ) : (
                        <LukeSkywalker data={lukeSkywalker} />
                    )}
                    {!obiOneKenobi ? (
                        <p>{""}</p>
                    ) : (
                        <ObiOneKenobi data={obiOneKenobi} />
                    )}
                    {!darthVader ? (
                        <p>{""}</p>
                    ) : (
                        <DarthVader data={darthVader} />
                    )}
                    {!cpo ? <p>{""}</p> : <C3po data={cpo} />}
                </div>
            </div>
        </>
    );
};

export default Main;
