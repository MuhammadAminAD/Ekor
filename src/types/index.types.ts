export interface IconProps {
  className?: string;
}

export interface ISidebar {
  title: string;
  path: string;
  icon: React.ComponentType<IconProps>;
}
export interface ISubmenuItem {
  title: string;
}

export interface IMenuCategory {
  title: string;
  submenu: ISubmenuItem[];
}

export interface IUserTabs {
  title: string;
  subTitle?: string;
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
  courseLessons: ICourseLessons[];

  languages: ILanguage[];
}

export interface ICourseLessons {
  id?: number,
  lessonName: string;
  subLessons: ISubLessons[];
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
  courseLessons: ICourseLessons[];
}

export interface IStatsDashboard {
  id: number,
  icons: string,
  title: string,
  blueText: string
}

export interface ICoursestabsData {
  id: number,
  coursesIcons : string
  courseName: string,
  date: string,
  price: string,
  status: string,
  statusIconsColor: string,
  moreDetails: string,
}
