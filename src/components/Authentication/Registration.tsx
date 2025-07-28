import { styles } from "@/styles/index.styles";
import { useDispatch } from "react-redux";
import { setActiveAuthPage } from "@/features/AuthenticationSlice";
import RegistrationForms from "./RegistrationForms";

export default function Registration() {

      const dispatch = useDispatch()

      return (
            <div className="w-full">
                  <h1 className={`${styles.text32_500} mb-16`}>Ro’yxatdan o’tish</h1>

                  <RegistrationForms />

                  <div>
                        <div className="w-full flex items-center mt-12.5">
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                              <span className="px-2.5 text-[#999999] text-md font-medium">yoki</span>
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                        </div>

                        <h2 className="w-full mt-12.5 text-center text-[#1C1C1C]">
                              Akkauntingiz bormi? Unda
                              <button
                                    onClick={() => { dispatch(setActiveAuthPage("sign-in")) }}
                                    className="text-main-blue underline text-md font-medium cursor-pointer">
                                    Kirishga
                              </button>
                              bosing
                        </h2>
                  </div>
            </div>
      );
}
