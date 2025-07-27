import type { ICourses, ISidebar } from "@/types/index.types";
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

export const courses: ICourses[] = [
    {
        id: 0,
        courseInroductionPicture: "@/public/img/BiznesCoursePicture.png",
        UserInfo: {
            username: "husanmamasaidov",
            firstName: "Husan", 
            lastName: "Mamasaidov",
            countryISO: "uz"
        },
        courseUsersRate: {
            oneStar: 5400,
            twoStar: 3200,
            threeStar: 2100,
            fourStar: 10580,
            fiveStar: 35085
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
                    ]
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
                    ]
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
                    ]
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
                }
            },
                
        languages: {
            uz: {
            courseName: "Biznesda sherikchilik va halollik asoslari",
            courseAbout: "Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning 'Strategik marketing' nomli intensiv kurs./n-Deyarli chiqimsiz biznes qilishni iloji bormi? /n-Telegramda biznes boshlash -Telegram orqali passiv daromadga kirish -Telegramda tadbirkorni imkoniyatlari...",
            currency: "so'm",
            coursePrice: 0,
            advantages: ["CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini", "Sistemani qayerlardan o’rnatsa bo’lishini", "Nega CRM ga o’tish shart ekanligini", "CRM orqali LTVni hisoblash usullarini", "LTVni oshiruvchi bir qancha ishlovchi keyslarni"],
            toWhom: ["500,000$ aylanmaga ega bo’lgan tadbirkorlar", "CEO yoki kompaniyaning bosh marketologlari", "IT sohasidagi katta kompaniyalar CTOsi", "Senior leveldagi dasturchilar"],
            courseLessons: {
                firstLesson: {
                    lessonName: "Strategik marketing",
                    subLessons: [
                        {
                            subLessonName: "Kirish va bu kursning maqsadi"
                        },
                        {
                            subLessonName: "Aktiv va Passiv"
                        },
                        {
                            subLessonName: "Modul resurslari text"
                        },
                    ]
                },
                secondLesson: {
                    lessonName: "SWOT analiz qilish",
                    subLessons: [
                        {
                            subLessonName: "Kirish va bu kursning maqsadi"
                        },
                        {
                            subLessonName: "Aktiv va Passiv"
                        },
                        {
                            subLessonName: "Modul resurslari text"
                        },
                    ]
                },
                thirdLesson: {
                    lessonName: "Ish muhiti",
                    subLessons: [
                        {
                            subLessonName: "Kirish va bu kursning maqsadi"
                        },
                        {
                            subLessonName: "Aktiv va Passiv"
                        },
                        {
                            subLessonName: "Modul resurslari text"
                        },
                    ]
                },
                fourthLesson: {
                    lessonName: "Biznesda politika qanday bo'ladi",
                    subLessons: [
                        {
                            subLessonName: "Kirish va bu kursning maqsadi"
                        },
                        {
                            subLessonName: "Aktiv va Passiv"
                        },
                        {
                            subLessonName: "Modul resurslari text"
                        },
                    ],
                },
                fifthLesson: {
                    lessonName: "Bir burun qoidasi",
                    subLessons: [
                        {
                            subLessonName: "Kirish va bu kursning maqsadi"
                        },
                        {
                            subLessonName: "Aktiv va Passiv"
                        },
                        {
                            subLessonName: "Modul resurslari text"
                        },
                    ],
                }
            },
        },
            en: {
            courseName: "Business partnership and halal principles",
            courseAbout: "Do you want to double your company's revenue? For business owners, top managers, and entrepreneurs, Husan Mamasaidov's intensive course titled “Strategic Marketing.” /n - Is it possible to run a business without any investment? /n - Starting a business on Telegram - Generating passive income through Telegram - Opportunities for entrepreneurs on Telegram...",
            currency: "$",
            coursePrice: 0,
            advantages: ["What benefits does a business get from installing a CRM system", "Where you can install the system", "Why it's important to switch to CRM", "Methods for calculating LTV through CRM", "Several working cases that increase LTV"],
            toWhom: ["Entrepreneurs with a turnover of $500,000", "CEO or chief marketing officer of the company", "CTO of large IT companies", "Senior level programmers"],
             courseLessons: {
                firstLesson: {
                    lessonName: "Strategic marketing",
                    subLessons: [
                        {
                            subLessonName: "Introduction and purpose of this course"
                        },
                        {
                            subLessonName: "Active and Passive"
                        },
                        {
                            subLessonName: "Module resources text"
                        },
                    ]
                },
                secondLesson: {
                    lessonName: "SWOT analysis",
                    subLessons: [
                        {
                            subLessonName: "Introduction and purpose of this course"
                        },
                        {
                            subLessonName: "Active and Passive"
                        },
                        {
                            subLessonName: "Module resources text"
                        },
                    ]
                },
                thirdLesson: {
                    lessonName: "Work environment",
                    subLessons: [
                        {
                            subLessonName: "Introduction and purpose of this course"
                        },
                        {
                            subLessonName: "Active and Passive"
                        },
                        {
                            subLessonName: "Module resources text"
                        },
                    ]
                },
                fourthLesson: {
                    lessonName: "What is politics in business?",
                    subLessons: [
                        {
                            subLessonName: "Introduction and purpose of this course"
                        },
                        {
                            subLessonName: "Active and Passive"
                        },
                        {
                            subLessonName: "Module resources text"
                        },
                    ],
                },
                fifthLesson: {
                    lessonName: "One nose rule",
                    subLessons: [
                        {
                            subLessonName: "Introduction and purpose of this course"
                        },
                        {
                            subLessonName: "Active and Passive"
                        },
                        {
                            subLessonName: "Module resources text"
                        },
                    ],
                }
            },
            }
        }
    }
]
