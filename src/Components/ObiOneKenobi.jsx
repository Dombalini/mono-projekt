import { useNavigate } from "react-router-dom";

const ObiOneKenobi = ({ data }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="item item-image-two"
                key={data.name}
                onClick={() => {
                    navigate(`/obiOneKenobi`);
                }}
            >
                <div className="star-wars-card ">
                    <div className="star-wars-name">{data.name}</div>
                </div>
            </div>
        </>
    );
};
export default ObiOneKenobi;
