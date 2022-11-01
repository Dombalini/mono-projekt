import { useNavigate } from "react-router-dom";

const LukeSkywalker = ({ data }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="item item-image-one"
                key={data.name}
                onClick={() => navigate(`/lukeSkyWalker`)}
            >
                <div className="star-wars-card ">
                    <div className="star-wars-name">{data.name}</div>
                </div>
            </div>
        </>
    );
};
export default LukeSkywalker;
