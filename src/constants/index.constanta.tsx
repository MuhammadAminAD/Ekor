import type { ICourses, IMenuCategory, ISidebar } from "@/types/index.types";
import SendIcon from "@/components/icons/SendIcon";
import TeacherIcon from "@/components/icons/TeacherIcon";
import ElementIcon from "@/components/icons/ElementIcon";
import FrameIcon from "@/components/icons/FrameIcon";

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


import book from '@/assets/icons/book-saved.svg'
import clock from '@/assets/icons/clock1.svg'
import video from '@/assets/icons/video1.svg'
import award from '@/assets/icons/award1.svg'
import translate from '@/assets/icons/translate1.svg'

export const courseItem = [
  {
    id: 0,
    icon: book,
    title: 'Umrbod egalik qilish imkoniyati',
  },
  {
    id: 1,
    icon: clock,
    title: '12,5 soatlik videodarslik',
  },
  {
    id: 2,
    icon: video,
    title: '7 ta videolar',
  },
  {
    id: 3,
    icon: award,
    title: 'Kursni tugatganlik haqida sertifikat',
  },
  {
    id: 4,
    icon: translate,
    title: 'O’zbek tili',
  },
]

export const tabsMenu = ['Product Details', 'Rating & Reviews', 'FAQs']