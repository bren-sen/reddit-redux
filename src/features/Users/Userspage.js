import { Outlet, useParams } from "react-router-dom";


export const Userspage = () => {
    return (
        <>
            <h1>Users</h1>
            <Outlet/>
        </>
    )
};


export const User = () => {
    const { userName } = useParams();
    return (
        <h2>{userName}</h2>
    )
};