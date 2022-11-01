import { useNavigate } from "react-router-dom";
const C3po = ({ data }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="item item-image-four"
                key={data.name}
                onClick={() => navigate(`/3Cpo`)}
            >
                <div className="star-wars-card ">
                    <div className="star-wars-name">{data.name}</div>
                </div>
            </div>
        </>
    );
};
export default C3po;
