import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../components/redditApi";
import { currentUser, selectCurrentUser, selectUserData, selectPageStatus } from "./userspageSlice";
import { Post } from "../../components/Post";
import { Comment } from "../../components/Comment";


export const Userspage = () => {

    const { userName } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const userData = useSelector(selectUserData);
    const pageStatus = useSelector(selectPageStatus);

    useEffect( () => {
        if (user !== userName) {
            dispatch(fetchUserData(userName));
            dispatch(currentUser(userName));
        }
    }, [dispatch, user, userName]);


    return (
        <>
            <h2 className="page-title">{userName}</h2>
            {pageStatus === 'isSuccess' && user === userName && userData.data.children.map(child => {
                if (child.kind === 't3') {
                    return <Post post={child} key={child.data.id} />
                } else {
                    return <Comment comment={child} source='userView' key={child.data.id} />
                }
            }
            )}
        </>
    )
};


