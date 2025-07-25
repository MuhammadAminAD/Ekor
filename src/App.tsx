import { Provider } from "react-redux";
import AppRouter from "./router/index.route";
import "@/i18n/i18next.config.ts"
import { store } from "./app/store";
export default function App() {
    return (
        <Provider store={store}>
        <AppRouter />
        </Provider>
    )
}
