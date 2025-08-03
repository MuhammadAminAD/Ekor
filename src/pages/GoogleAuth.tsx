import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get("token");
        const email = query.get("email");

        if (!token || !email) {
            navigate("/auth")
            return;
        }

        localStorage.setItem("token", token);

        navigate("/")
    }, [location]);

    return null
};

export default GoogleAuth;
