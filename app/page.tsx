import Image from 'next/image'
import React from 'react'

export default function gridView() {
  return (
    

    
    <><hr /><hr /><br /><br />
    <div style={{ backgroundColor: "gray", textAlign: "center"}}>
      <h2><b>GridView CSS Layout</b></h2>

    </div><hr /><br />

    <div style={{  width: '800px', height: '800px', padding: '5px', border: '0px solid', boxSizing: 'content-box' }}
    className="max-w-[1320px] py-20 text-black mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3">
        
  <div className='bg-[#b3d52c] col-span-2 text-[white] py-9 text-center relative rounded-lg overflow-hidden'>
    <Image alt='header' src="/header.png" layout="fill" objectFit="cover" />
    <p className="absolute inset-0 flex items-end justify-start pb-3 pl-3">NextJS - Coding </p>        
  </div>

  <div className='bg-[#26e0b8] row-span-2 text-[white] py-9 text-center relative rounded-lg overflow-hidden'>
    <Image src="/right.png" alt='right' layout="fill" objectFit="cover" />
    <p className="absolute inset-0 flex items-end justify-start pb-3 pl-3">VR - Glasses</p>
  </div>

  <div className='bg-[#9d2cd5] row-span-2 text-[white] py-9 text-center relative rounded-lg overflow-hidden'>
    <Image src="/menu.png" alt='menu' layout="fill" objectFit="cover" />
    <p className="absolute inset-0 flex items-end justify-start pb-3 pl-3">Technology</p>
  </div>

  <div className='bg-[#d5912c] row-span text-[white] py-9 text-center relative rounded-lg overflow-hidden'>
    <Image src="/main.jpg" alt='main' layout="fill" objectFit="cover" />
    <p className="absolute inset-0 flex items-end justify-start pb-3 pl-3">Coder</p>
  </div>

  <div className='bg-[#e02677] col-span-2 text-[white] py-9 text-center relative rounded-lg overflow-hidden'>
    <Image src="/footer.png" alt='footer' layout="fill" objectFit="cover" />
    <p className="absolute inset-0 flex items-end justify-start pb-3 pl-3">Classic - Technology</p>
  </div> 

      </div><hr /><hr /><hr /><br /><br /><br /></>
    

   
   
  )
}
 
 
 