import { setToken } from "@/features/TokenSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const accessToken = query.get("token");
        const email = query.get("email");
        const token = { accessToken: accessToken }

        if (!token || !email) {
            navigate("/auth")
            return;
        }

        setToken(token)

        navigate("/")
    }, [location]);

    return null
};      

export default GoogleAuth;
