import { Link } from "react-router-dom";

export const Sub = ({ sub }) => {

    const subData = sub.data;
    const subName = subData.display_name;
    const rSub = subData.display_name_prefixed;

    return (
        <section className="sub">
            <Link to={`${subName}`}>
                <h3>{rSub}</h3>
            </Link>
            <p>Subscribers: {subData.subscribers}</p>
            {subData.icon_img !== "" && <img src={subData.icon_img} alt="sub icon image" />}
            <p>{subData.public_description}</p>
        </section>
    )
};