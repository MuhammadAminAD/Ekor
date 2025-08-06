import { courseItem } from '@/constants/index.constanta'
import courseUser from '../../assets/img/courseUser.png'
import teacher from '../../assets/icons/teacher1.svg'
import star from '../../assets/icons/star1.svg'
import send from '../../assets/icons/send-21.svg'

export default function CourseItem() {
    return (
        <div className=" border-1 border-[#D9D9D9] rounded-[15px] p-[50px]">
            <h2 className=" w-[454px] font-black text-[28px] leading-[100%]">Biznesda sherikchilik va halollik asoslari</h2>
            <div className='flex gap-[19px] mt-[30px] items-center'>
                <img src={courseUser} alt="" />
                <h5 className=' font-medium text-[16px] leading-[100%] text-[#999999]'>Spiker:
                    <span className='font-medium text-[20px] leading-[100%] text-[#006AFF] block'>Husan Mamasaidov</span>
                </h5>
            </div>
            <div className='mt-[30px]'>
                <h5 className='font-medium text-[20px] leading-[100%] text-[#006AFF] pb-[22px]'>Kurs haqida qisqacha:</h5>
                <ul>
                    {
                        courseItem.map(({ id, icon, title }) => {
                            return <li className='flex mb-[17px] gap-[22px] items-center' key={id} >
                                <img src={icon} alt="" />
                                <p className='text-[18px] leading-[100%] text-[#999999]'>{title}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='flex gap-[30px] items-center mt-[20px]'>
                <div className=' flex items-center gap-[10px] font-light text-[16px] text-[#006AFF]'>
                    <img src={star} alt="" />
                    <p>4,7 <span className='text-[#999999]'>(54,110)</span></p>
                </div>
                <div className=' flex items-center gap-[10px] font-light text-[16px] text-[#006AFF]'>
                    <img src={teacher} alt="" />
                    <p>114,554</p>
                </div>
            </div>
            <h4 className=' font-medium text-[24px] leading-[100%] text-[#1C1C1C] mt-[25px]'>12,400,000 <span className='text-[#999999]'>so‘m</span> </h4>
            <div className='mt-[25px]'>
                <button className='flex gap-[20px] items-center py-[17px] px-[137px] border-1 border-[#1C1C1C] rounded-[15px] font-medium text-[20px] leading-[100%] text-[#999999] cursor-pointer'>
                    <img src={send} alt="" />
                    Referal havola
                </button>
                <button className='border-3 border-[#006AFF] bg-[#006AFF] rounded-[15px] px-[173px] py-[17px] font-medium text-[20px] leading-[100%] mt-[20px] mb-[20px] text-[#F9F9F9] cursor-pointer'>Xarid qilish</button>
                <button className=' border-3 border-[#006AFF] rounded-[15px] py-[17px] px-[85px] font-semibold text-[20px] leading-[100%] text-[#006AFF] cursor-pointer'>Muddatli to’lovga xarid qilish</button>
            </div>
        </div>
    )
}
