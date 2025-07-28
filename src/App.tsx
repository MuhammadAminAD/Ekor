import Navbar from "./components/shared/Navbar";
import Sidebar from "./components/shared/Sidebar";
import AppRouter from "./router/AppRouter";
import { styles } from "./styles/index.styles";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="flex gap-1">
        <div className="max-w-[100px] bg-[#F9F9F9] h-[100dvh]">
          <Sidebar />
        </div>
        <div className={styles.Container}>
          <div className="w-full">
            <AppRouter />
          </div>
          <AppRouter />
        </div>
      </div>
    </>
  );
}
