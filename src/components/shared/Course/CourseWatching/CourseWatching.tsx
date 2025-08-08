import { ICourseLessons } from '@/types/index.types';
import CourseWatchingModuleLessons from './CourseWatchingModuleLessons/CourseWatchingModuleLessons';
import CourseWatchingModuleNavbar from './CourseWatchingModuleNavbar';



const CourseWatching = () => {
    const courseLessonsExample: ICourseLessons[] = [
        {
        id: 0,
        lessonName: "Strategik marketing",
        subLessons: [
          {
            subLessonName: "Kirish va bu kursning maqsadi",
            file: "/",
          },
          {
            subLessonName: "Aktiv va Passiv",
            file: "/",
          },
          {
            subLessonName: "Modul resurslari text",
            file: "/",
          },
        ],
      },
       {
        id: 1,
        lessonName: "SWOT analiz qilish",
        subLessons: [
          {
            subLessonName: "Kirish va bu kursning maqsadi",
            file: "/",
          },
          {
            subLessonName: "Aktiv va Passiv",
            file: "/",
          },
          {
            subLessonName: "Modul resurslari text",
            file: "/",
          },
        ],
      },
       {
        id: 2,
        lessonName: "Ish muhiti",
        subLessons: [
          {
            subLessonName: "Kirish va bu kursning maqsadi",
            file: "/",
          },
          {
            subLessonName: "Aktiv va Passiv",
            file: "/",
          },
          {
            subLessonName: "Modul resurslari text",
            file: "/",
          },
        ],
      },
     {
        id: 3,
        lessonName: "Biznesda politika qanday bo'ladi",
        subLessons: [
          {
            subLessonName: "Kirish va bu kursning maqsadi",
            file: "/",
          },
          {
            subLessonName: "Aktiv va Passiv",
            file: "/",
          },
          {
            subLessonName: "Modul resurslari text",
            file: "/",
          },
        ],
      },
       {
        id: 4,
        lessonName: "Bir burun qoidasi",
        subLessons: [
          {
            subLessonName: "Kirish va bu kursning maqsadi",
            file: "/",
          },
          {
            subLessonName: "Aktiv va Passiv",
            file: "/",
          },
          {
            subLessonName: "Modul resurslari text",
            file: "/",
          },
        ],
      }
    ]
    return (
        <div className=''>
           <CourseWatchingModuleNavbar courseName={'Biznesda sherikchilik va halollik asoslari'}/>          {/* import courseName={data.courseName} */}
            <CourseWatchingModuleLessons courseLessons={courseLessonsExample} />                          {/* courseLessons={data.courseLessons} */}
        </div>
    );
};

export default CourseWatching;
