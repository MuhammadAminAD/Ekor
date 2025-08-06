import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseTabs() {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Kurs haqida</TabsTrigger>
                    <TabsTrigger value="password">Kurs tarkibi</TabsTrigger>
                    <TabsTrigger value="comment">Fikr va izohlar</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <p className=" text-[20px] leading-[150%] text-[#1C1C1C]">Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning "Strategik marketing" nomli intensiv kurs.</p>
                    <p className=" text-[20px] leading-[150%] text-[#1C1C1C]">
                        -Deyarli chiqimsiz biznes qilishni iloji bormi? -Telegramda biznes boshlash -Telegram orqali passiv daromadga kirish -Telegramda tadbirkorni imkoniyatlari...
                    </p>
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
                <TabsContent value="comment">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}
