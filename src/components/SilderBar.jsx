import React from 'react'

const SilderBar = () => {
    const itemCategory =[{
        name:'Laptop',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    {
        name:'Sản phẩm Apple',
        icon:<i class='bx bxl-apple' ></i>,
        path:'/'
    },
    
    {
        name:'Điện máy - Điện gia dụng',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    
    {
        name:'PC - Máy tính bộ',
        icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
      ,
        path:'/'
    },
    
    {
        name:'PC - Màn hình máy tính',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    
    {
        name:'PC - Phụ kiện',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    
   
    
    {
        name:'Thiết bị âm thanh',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    
    {
        name:'Thiết bị thông minh',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    {
        name:'Thiết bị văn phòng',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    {
        name:'Giải pháp doanh nghiệp',
        icon:<i class='bx bx-laptop'></i>,
        path:'/'
    },
    
    
]
  return (
    <div>
        <ul className='absolute  px-2  ml-40 text-textColor py-4 top-40 z-10  rounded-lg bg-[#ffff]'>
            {itemCategory.map((item,index)=>{
                return (
                    <li className='mb-4 ' key={index}><a className='flex gap-2 items-center' href={item.path}>
                    {item.icon}
                <span className='hoverMain'>{item.name}</span>


                </a></li>
         
                )
            })}
        </ul>
    </div>
  )
}

export default SilderBar