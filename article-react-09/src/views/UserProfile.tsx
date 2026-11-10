import { useParams } from "react-router-dom";

const UserProfile = () => {
    const {id} = useParams();

    return (
        <>
            <h1>User profile id: {id}</h1>
        </>
    );
}

export default UserProfile