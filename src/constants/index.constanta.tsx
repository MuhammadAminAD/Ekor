import type { ICourses, ICoursestabsData, IfinanceCards, IfinanceTabsStudents, IMenuCategory, ISidebar, IStatsDashboard, IUserTabs } from "@/types/index.types";
import SendIcon from "@/components/icons/SendIcon";
import TeacherIcon from "@/components/icons/TeacherIcon";
import ElementIcon from "@/components/icons/ElementIcon";
import FrameIcon from "@/components/icons/FrameIcon";
import book from "@/assets/icons/book-saved.svg";
import clock from "@/assets/icons/clock1.svg";
import video from "@/assets/icons/video1.svg";
import award from "@/assets/icons/award1.svg";
import translate from "@/assets/icons/translate1.svg";
import walletIcons from "@/assets/icons/walletIcons.svg";
import teachericons from "@/assets/icons/teacherIcons.svg";
import bookIcons from "@/assets/icons/bookIcons.svg";
import moneysIcons from "@/assets/icons/moneysIcons.svg";
import coursesIcons from "@/assets/icons/coursesTabsBookIcons.svg";
import moneyRevice from "@/assets/icons/money-recive.svg";
import walletMoney from "@/assets/icons/money-recive.svg";
import cards from "@/assets/icons/money-recive.svg";

export const sideBar: ISidebar[] = [
  {
    title: "Bosh sahifa",
    path: "/",
    icon: ElementIcon,
  },
  {
    title: "Mening kurslarim",
    path: "/myCourses",
    icon: TeacherIcon,
  },
  {
    title: "Saqlangan kurslar",
    path: "/savedCourses",
    icon: FrameIcon,
  },
  {
    title: "Yaqinlarga ulashish",
    path: "/share",
    icon: SendIcon,
  },
];


export const userTabs: IUserTabs[] = [
  {
    title: "Profilni tahrirlash",
  },
  {
    title: "Umumiy Profil",
  },
  {
    title: "Mening darslarim",
  },
  {
    title: "Shaxsiy kabinet",
  },
  {
    title: "Men yuklagan kurslar",
    subTitle: "(Spiker bo'lganda)",
  },
  {
    title: "Spiker panel",
  },
  {
    title: "Profildan chiqish",
  },
];

export const menuCategories: IMenuCategory[] = [
  {
    title: "Biznes",
    submenu: [
      { title: "Marketing" },
      { title: "Menejment" },
      { title: "CRM" },
      { title: "Boshqaruv" },
      { title: "Sotuvlar" },
      { title: "Tijorat huquqi" },
      { title: "Hamkorlik" },
      { title: "Networking" },
      { title: "Ko'chmas mulk" },
      { title: "Media" },
      { title: "Start-up" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "IT va dasturlash",
    submenu: [
      { title: "Frontend" },
      { title: "Backend" },
      { title: "Fullstack" },
      { title: "Mobil ilovalar" },
      { title: "Sun’iy intellekt" },
      { title: "Ma’lumotlar bazasi" },
      { title: "DevOps" },
      { title: "Kiberxavfsizlik" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Marketing",
    submenu: [
      { title: "Raqamli marketing" },
      { title: "Ijtimoiy media" },
      { title: "Kontent marketing" },
      { title: "Email marketing" },
      { title: "SEO/SEM" },
      { title: "Brending" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Shaxsiy o'sish",
    submenu: [
      { title: "Time management" },
      { title: "Maqsad qo'yish" },
      { title: "Soft skills" },
      { title: "Psixologiya" },
      { title: "Motivatsiya" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Ta'lim va ilmiy fanlar",
    submenu: [
      { title: "Matematika" },
      { title: "Fizika" },
      { title: "Kimyo" },
      { title: "Biologiya" },
      { title: "Tarix" },
      { title: "Til o‘rganish" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Foto va video",
    submenu: [
      { title: "Fotografiya" },
      { title: "Videomontaj" },
      { title: "Animatsiya" },
      { title: "Grafik dizayn" },
      { title: "YouTube kontent" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Sog'lik va fitnes",
    submenu: [
      { title: "Fitness" },
      { title: "Ovqatlanish" },
      { title: "Mental salomatlik" },
      { title: "Yoga" },
      { title: "Sport" },
      { title: "Boshqa" },
    ],
  },
  {
    title: "Boshqa",
    submenu: [
      { title: "Qo‘l san’atlari" },
      { title: "Oshpazlik" },
      { title: "Sayohat" },
      { title: "Oilaviy maslahatlar" },
      { title: "Hayot tarzi" },
      { title: "Boshqa" },
    ],
  },
];

export const courses: ICourses[] = [
  {
    id: 0,
    courseInroductionPicture: "@/public/img/BiznesCoursePicture.png",
    UserInfo: {
      username: "husanmamasaidov",
      firstName: "Husan",
      lastName: "Mamasaidov",
      countryISO: "uz",
    },
    courseUsersRate: {
      oneStar: 5400,
      twoStar: 3200,
      threeStar: 2100,
      fourStar: 10580,
      fiveStar: 35085,
    },
    courseMembers: 114554,
    courseLessons: {
      firstLesson: {
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
      secondLesson: {
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
      thirdLesson: {
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
      fourthLesson: {
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
      fifthLesson: {
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
      },
    },

    languages: {
      uz: {
        courseName: "Biznesda sherikchilik va halollik asoslari",
        courseAbout:
          "Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning 'Strategik marketing' nomli intensiv kurs./n-Deyarli chiqimsiz biznes qilishni iloji bormi? /n-Telegramda biznes boshlash -Telegram orqali passiv daromadga kirish -Telegramda tadbirkorni imkoniyatlari...",
        currency: "so'm",
        coursePrice: 0,
        advantages: [
          "CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini",
          "Sistemani qayerlardan o’rnatsa bo’lishini",
          "Nega CRM ga o’tish shart ekanligini",
          "CRM orqali LTVni hisoblash usullarini",
          "LTVni oshiruvchi bir qancha ishlovchi keyslarni",
        ],
        toWhom: [
          "500,000$ aylanmaga ega bo’lgan tadbirkorlar",
          "CEO yoki kompaniyaning bosh marketologlari",
          "IT sohasidagi katta kompaniyalar CTOsi",
          "Senior leveldagi dasturchilar",
        ],
        courseLessons: {
          firstLesson: {
            lessonName: "Strategik marketing",
            subLessons: [
              {
                subLessonName: "Kirish va bu kursning maqsadi",
              },
              {
                subLessonName: "Aktiv va Passiv",
              },
              {
                subLessonName: "Modul resurslari text",
              },
            ],
          },
          secondLesson: {
            lessonName: "SWOT analiz qilish",
            subLessons: [
              {
                subLessonName: "Kirish va bu kursning maqsadi",
              },
              {
                subLessonName: "Aktiv va Passiv",
              },
              {
                subLessonName: "Modul resurslari text",
              },
            ],
          },
          thirdLesson: {
            lessonName: "Ish muhiti",
            subLessons: [
              {
                subLessonName: "Kirish va bu kursning maqsadi",
              },
              {
                subLessonName: "Aktiv va Passiv",
              },
              {
                subLessonName: "Modul resurslari text",
              },
            ],
          },
          fourthLesson: {
            lessonName: "Biznesda politika qanday bo'ladi",
            subLessons: [
              {
                subLessonName: "Kirish va bu kursning maqsadi",
              },
              {
                subLessonName: "Aktiv va Passiv",
              },
              {
                subLessonName: "Modul resurslari text",
              },
            ],
          },
          fifthLesson: {
            lessonName: "Bir burun qoidasi",
            subLessons: [
              {
                subLessonName: "Kirish va bu kursning maqsadi",
              },
              {
                subLessonName: "Aktiv va Passiv",
              },
              {
                subLessonName: "Modul resurslari text",
              },
            ],
          },
        },
      },
      en: {
        courseName: "Business partnership and halal principles",
        courseAbout:
          "Do you want to double your company's revenue? For business owners, top managers, and entrepreneurs, Husan Mamasaidov's intensive course titled “Strategic Marketing.” /n - Is it possible to run a business without any investment? /n - Starting a business on Telegram - Generating passive income through Telegram - Opportunities for entrepreneurs on Telegram...",
        currency: "$",
        coursePrice: 0,
        advantages: [
          "What benefits does a business get from installing a CRM system",
          "Where you can install the system",
          "Why it's important to switch to CRM",
          "Methods for calculating LTV through CRM",
          "Several working cases that increase LTV",
        ],
        toWhom: [
          "Entrepreneurs with a turnover of $500,000",
          "CEO or chief marketing officer of the company",
          "CTO of large IT companies",
          "Senior level programmers",
        ],
        courseLessons: {
          firstLesson: {
            lessonName: "Strategic marketing",
            subLessons: [
              {
                subLessonName: "Introduction and purpose of this course",
              },
              {
                subLessonName: "Active and Passive",
              },
              {
                subLessonName: "Module resources text",
              },
            ],
          },
          secondLesson: {
            lessonName: "SWOT analysis",
            subLessons: [
              {
                subLessonName: "Introduction and purpose of this course",
              },
              {
                subLessonName: "Active and Passive",
              },
              {
                subLessonName: "Module resources text",
              },
            ],
          },
          thirdLesson: {
            lessonName: "Work environment",
            subLessons: [
              {
                subLessonName: "Introduction and purpose of this course",
              },
              {
                subLessonName: "Active and Passive",
              },
              {
                subLessonName: "Module resources text",
              },
            ],
          },
          fourthLesson: {
            lessonName: "What is politics in business?",
            subLessons: [
              {
                subLessonName: "Introduction and purpose of this course",
              },
              {
                subLessonName: "Active and Passive",
              },
              {
                subLessonName: "Module resources text",
              },
            ],
          },
          fifthLesson: {
            lessonName: "One nose rule",
            subLessons: [
              {
                subLessonName: "Introduction and purpose of this course",
              },
              {
                subLessonName: "Active and Passive",
              },
              {
                subLessonName: "Module resources text",
              },
            ],
          },
        },
      },
    },
  },
];


export const StatsDashboardData: IStatsDashboard[] = [
  {
    id: 0,
    icons: walletIcons,
    title: "Umumiy balans",
    blueText: "15 500 000 UZS",
  },
  {
    id: 1,
    icons: teachericons,
    title: "O’quvchilar soni",
    blueText: "215",
  },
  {
    id: 2,
    icons: bookIcons,
    title: "Kurslar soni",
    blueText: "341",
  },
  {
    id: 2,
    icons: moneysIcons,
    title: "Ro’yxatdan o’tilgan kurslar",
    blueText: "10",
  },
];


export const buyCoursesTabsData: ICoursestabsData[] = [
  {
    id: 0,
    coursesIcons,
    courseName: "Biznesda sherikchilik va halollik asoslari",
    date: "Mar 24, 2022",
    price: "134 000",
    status: "Aktiv",
    statusIconsColor: "bg-[#0CC14A]",
    moreDetails: "Batafsil",
  },
  {
    id: 1,
    coursesIcons,
    courseName: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
    date: "Mar 24, 2022",
    price: "10 000",
    status: "Aktiv",
    statusIconsColor: "bg-[#0CC14A]",
    moreDetails: "Batafsil",
  },
  {
    id: 2,
    coursesIcons,
    courseName: "LTV ni qanday qilib 2 karra uzaytirish mumkin?",
    date: "Apr 12, 2022",
    price: "55 000",
    status: "Jarayonda",
    statusIconsColor: "bg-[#F19D3B]",
    moreDetails: "Batafsil",
  },
  {
    id: 3,
    coursesIcons,
    courseName: "Abdulla Oripovning 100 ta maqolasi",
    date: "Apr 12, 2022",
    price: "75 000",
    status: "Jarayonda",
    statusIconsColor: "bg-[#F19D3B]",
    moreDetails: "Batafsil",
  },
  {
    id: 4,
    coursesIcons,
    courseName: "Alisher Navoiy asarlaridan 100 ta maqola",
    date: "Apr 12, 2022",
    price: "95 000",
    status: "Jarayonda",
    statusIconsColor: "bg-[#F19D3B]",
    moreDetails: "Batafsil",
  },
];


export const FinanceStatsDashboardData: IStatsDashboard[] = [
  {
    id: 0,
    icons: moneyRevice,
    title: "Kurslardan daromadlar",
    blueText: "15 500 000",
  },
  {
    id: 1,
    icons: walletMoney,
    title: "Hamyondagi umumiy balans",
    blueText: "29 000",
  },
  {
    id: 2,
    icons: cards,
    title: "Kartalarimdagi balans",
    blueText: "159 000",
  },
  {
    id: 3,
    icons: moneyRevice,
    title: "Umumiy chiqimlar",
    blueText: "10 000 000",
  },
];


export const courseItem = [
  {
    id: 0,
    icon: book,
    title: "Umrbod egalik qilish imkoniyati",
  },
  {
    id: 1,
    icon: clock,
    title: "12,5 soatlik videodarslik",
  },
  {
    id: 2,
    icon: video,
    title: "7 ta videolar",
  },
  {
    id: 3,
    icon: award,
    title: "Kursni tugatganlik haqida sertifikat",
  },
  {
    id: 4,
    icon: translate,
    title: "O’zbek tili",
  },
];

export const tabsMenu = ['Product Details', 'Rating & Reviews', 'FAQs']

import finnacePayCard from "@/assets/icons/financePayCardIcons.svg"
export const financeCardsData: IfinanceCards[] = [
  {
    id: 0,
    icons: finnacePayCard,
    cardNum: "9860 **** **** 1261",
    date: "23-May 2022, 12:58",
    summa: "1 260 000",
    payDate: "23-May 2022"
  },
  {
    id: 1,
    icons: finnacePayCard,
    cardNum: "9860 **** **** 1261",
    date: "24-May 2022, 12:58",
    summa: " 260 000",
    payDate: "23-May 2022"
  },
  {
    id: 2,
    icons: finnacePayCard,
    cardNum: "Elektron hamyon",
    date: "23-Avgust 2022, 12:58",
    summa: "1 260 000",
    payDate: "23-May 2022"
  }
]
export const financeTabsStudentsData: IfinanceTabsStudents[] = [
  {
    id: 1,
    name: "Abdurathidov Sammalar",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 12,
    activity: "23:145",
    sum: "1 250 000 UZS"
  },
  {
    id: 2,
    name: "Sayfuddinova Komila",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 27,
    activity: "50/623",
    sum: "1 250 000 UZS"
  },
  {
    id: 3,
    name: "Sammdarov Aknul",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 5,
    activity: "1:1251",
    sum: "1 250 000 UZS"
  },
  {
    id: 4,
    name: "Turgu'kov Unid",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 24,
    activity: "4:43:12",
    sum: "1 250 000 UZS"
  },
  {
    id: 5,
    name: "Adibeljallova Zulfiya",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 8,
    activity: "1:54:11",
    sum: "1 250 000 UZS"
  },
  {
    id: 6,
    name: "Mahmudov Oybek",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 3,
    activity: "0:27:52",
    sum: "1 250 000 UZS"
  },
  {
    id: 7,
    name: "Tohlvova Layle",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 18,
    activity: "10:237",
    sum: "1 250 000 UZS"
  },
  {
    id: 8,
    name: "Asadov Akram",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 12,
    activity: "2:42:19",
    sum: "1 250 000 UZS"
  },
  {
    id: 9,
    name: "Rouiyeva Jamila",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 9,
    activity: "0:39:54",
    sum: "1 250 000 UZS"
  },
  {
    id: 10,
    name: "Ruduyorov Mansur",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 18,
    activity: "1:57:35",
    sum: "1 250 000 UZS"
  },
    {
    id: 11,
    name: "Abdurathidov Sammalar",
    phone: "+998 99 123 45 67",
    firstUse: "15.12.2022 15:35",
    logins: 12,
    activity: "23:145",
    sum: "1 250 000 UZS"
  },
];