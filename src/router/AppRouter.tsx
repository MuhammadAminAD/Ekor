import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { styles } from "../styles/index.styles";

export default function AppRouter() {
      return (
            <>
                  <div className={styles.Container}>
                        <div className="flex gap-1">
                              <div className="max-w-[300px]">
                                    {/* sidebar */}
                              </div>
                              <div className="w-full">
                                    <Routes>
                                          <Route element={<Home />} path="/" />
                                    </Routes>
                              </div>
                        </div>
                  </div>
            </>
      )
}
