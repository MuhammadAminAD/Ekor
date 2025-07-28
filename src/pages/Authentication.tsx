// import { Form, FormItem } from "@/components/ui/form";

// import type { RootState } from "@/app/store";
import Registration from "@/components/Authentication/Registration";
// import ResetPassword from "@/components/Authentication/ResetPassword";
// import SignIn from "@/components/Authentication/SignIn";
// import { useSelector } from "react-redux";


export default function Authentication() {
      // const { page } = useSelector((state: RootState) => state.AuthenticationSlice)
      return (
            <div className={`max-w-[700px] my-[70px] mx-auto w-full`}>
                  {/* {page === "registration" ? <Registration /> :
                        page === "reset-password" ? <ResetPassword /> :
                              <SignIn />
                  } */}
                  <Registration />
            </div>
      )
}
