import { Sidebar } from "lucide-react";
import AppRouter from "./router/AppRouter";
import { styles } from "./styles/index.styles";

export default function App() {
  return (
    <>
      <div className={styles.Container}>
        <div className="flex gap-1">
          <div className="max-w-[240px] h-[100dvh]">
            <Sidebar />
          </div>
          <AppRouter />
        </div>
      </div>
    </>
  )
}
