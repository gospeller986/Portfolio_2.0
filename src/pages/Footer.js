import React from 'react'

import { LinkedinOutlined , GithubOutlined , InstagramOutlined   } from '@ant-design/icons';



const Footer = () => {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl font-oswald ">SATYAJIT</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.linkedin.com/in/satyajit-pal-a435441ba/" target="_blank">
          
            <LinkedinOutlined className='bg-[#171717] w-10 h-10 Class	Properties
rounded-full justify-center justify-items-center  text-2xl  '  />
        
            </a>
            <a href="https://github.com/gospeller986" target="_blank">
          
            < GithubOutlined  className='bg-[#171717] w-10 h-10 rounded-full justify-center justify-items-center text-2xl'  />
        
            </a>
            <a href="https://www.instagram.com/_satyajit_pal_/" target="_blank">
          
            <InstagramOutlined  className='bg-[#171717] w-10 h-10 rounded-full justify-center justify-items-center text-2xl'  />
        
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer