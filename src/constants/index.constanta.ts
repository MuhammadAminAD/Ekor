import type { ISidebar } from "@/types/index.types";
import sendIcon from "@/assets/icons/send-2.svg"
import frame from "@/assets/icons/frame.svg"
import teacher from "@/assets/icons/teacher.svg"
export const sideBar: ISidebar[] = [
  {
    title: "Bosh sahifa",
    path: "/",
    icon: ""
  },
  {
    title: "Mening kurslarim",
    path: "/myCourses",
    icon: teacher
  },
  {
    title: "Saqlangan kurslar",
    path: "/savedCourses",
    icon:frame
  },

  {
    title: "Yaqinlarga ulashish",
    path: "/share",
    icon: sendIcon
  },
];
