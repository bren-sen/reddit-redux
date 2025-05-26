import { Link } from "react-router-dom";
import styles from './Sub.module.css';

export const Sub = ({ sub }) => {

    const subData = sub.data;
    const subName = subData.display_name;
    const rSub = subData.display_name_prefixed;

    return (
        <section className={styles.sub}>
            <Link to={`${subName}`}>
                <h3 className={styles.subHeader}>{rSub}</h3>
            </Link>
            <div className={styles.subBody}>
                <p>Subscribers: {subData.subscribers}</p>
                {subData.icon_img !== "" && <img src={subData.icon_img} 
                                                 alt="sub icon image" 
                                                 width={subData.icon_size[0]} 
                                                 height={subData.icon_size[1]} 
                                                 className={styles.subImg}
                                            />}
                <p>{subData.public_description}</p>
            </div>
        </section>
    )
};