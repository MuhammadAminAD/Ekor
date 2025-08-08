import { ICourseLessons } from '@/types/index.types';
import { HTMLAttributes } from 'react';
import ModuleVideos from './ModuleVideos';
import ModuleAccordion from './ModuleAccordion';

type CourseWatchingModuleLessonsProps = HTMLAttributes<HTMLDivElement> & {
    courseLessons: ICourseLessons[]
}

const CourseWatchingModuleLessons = ({ courseLessons }: CourseWatchingModuleLessonsProps) => {
   return(
     <>
    {
      courseLessons.map(({id, lessonName, subLessons}) => {
        return (
          <div key={id} className='w-full'>
            {
              subLessons.map(({subLessonName, file}) => {
                  return(
                    <>
                    <ModuleVideos file={file}/>
                    <ModuleAccordion lessonName={lessonName} subLessonName={subLessonName}/>
                    </>
                  )
              })
            }
    
          </div>
        )

    })
  }
    </>
   )

};

export default CourseWatchingModuleLessons;
