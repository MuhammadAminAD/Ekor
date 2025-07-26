import AppRouter from "./router/index.route";
import "@/i18n/i18next.config.ts"
import Navbar from "./components/shared/Navbar/Navbar";
export default function App() {
    return (
        <>
        <Navbar/>
        <AppRouter />
        </>
    )
}
