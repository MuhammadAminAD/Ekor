import { HTMLAttributes } from 'react';

type ModuleAccordionProps = HTMLAttributes<HTMLDivElement> & {
    lessonName: string;
    subLessonName: string;
}

const ModuleAccordion = ({ lessonName, subLessonName }: ModuleAccordionProps) => {
    return (
        <div>
            {lessonName}
            {subLessonName}
        </div>
    );
};

export default ModuleAccordion;
