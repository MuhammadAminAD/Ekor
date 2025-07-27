export interface ISidebar {
     title: string;
     path: string;
     icon: string
}
export interface ICourses {
     id: number;
    courseInroductionPicture: string;
    UserInfo: {
        username: string;
        firstName: string;
        lastName: string;
        countryISO: string;
    };
    courseUsersRate: {
        oneStar: number;
        twoStar: number;
        threeStar: number;
        fourStar: number;
        fiveStar: number;
    };
    courseMembers: number;
     courseLessons:  {
               [key: string]: ICourseLessons;
     };
     
     languages: {
          [key: string]: ILanguage
     }
     

}
interface ICourseLessons {
          lessonName: string;
          subLessons: ISubLessons[]          
}

interface ISubLessons {
                    subLessonName: string;
                    file?: string;
}
interface ILanguage {
     courseName: string;
            courseAbout: string;
            currency: string;
            coursePrice: number;
            advantages: string[];
            toWhom: string[];
            courseLessons: {
               [key: string]: ICourseLessons;
            };
}