import { useNavigate } from "react-router-dom";

const DarthVader = ({ data }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="item item-image-three"
                key={data.name}
                onClick={() => navigate("/darthVader")}
            >
                <div className="star-wars-card ">
                    <div className="star-wars-name">{data.name}</div>
                </div>
            </div>
        </>
    );
};
export default DarthVader;
