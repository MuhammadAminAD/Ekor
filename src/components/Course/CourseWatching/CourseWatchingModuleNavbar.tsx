import { styles } from '@/styles/index.styles';
import { HTMLAttributes } from 'react';

type CourseWatchingModuleNavbarProps = HTMLAttributes<HTMLDivElement> & {
    courseName: string;
}

const CourseWatchingModuleNavbar = ({ courseName }: CourseWatchingModuleNavbarProps) => {
    return (
        <div className='w-full'>
            <div className={`${styles.Container}`}>
                {courseName}
            </div>
        </div>
    );
};

export default CourseWatchingModuleNavbar;
