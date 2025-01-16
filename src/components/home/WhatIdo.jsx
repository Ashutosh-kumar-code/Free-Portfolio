import React, { useState } from 'react'
import Container from '../common/Container'
import Button from '../ui/Button'
import Card from '../common/card/Card'


const CardData = [
    {
    title: 'Web Development With Wordpress',
    subtitle: 'Web',
    description: ` I create stunning custom WordPress websites that perfectly match your business needs. From theme customization to plugin development, I deliver professional and user-friendly web solutions that stand out.`
}
    ,
{
    title: 'Web Development',
    subtitle: 'Web',
    description: 'Using cutting-edge technologies, I create custom solutions ranging from dynamic business websites to complex web applications.focus  on delivering user-friendly and high-performance web solutions .'
},
{
    title: 'Mobile Development',
    subtitle: 'Mobile',
    description: 'I develop cutting-edge mobile applications for iOS and Android platforms using react native, ensuring seamless user experiences and robust functionality. '
}


]

const WhatIdo = ({refs}) => {
    const [clicked,setClicked] = useState(false)

    const handleClick = () => {
        console.log('Card clicked')
    }
    
    return (
        <Container>
            <div ref={refs.whatIdo} id="whatIdo" className="flex flex-col justify-center item-cente   xl:justify-between xl:items-center  gap-10 xl:gap-36 py-16 lg:flex-row  xl:py-32">
                <div className='lg:flex lg:justify-center lg:items-center '>
                    <div>
                    <h1 className='text-[#333333] font-bold text-3xl text-center sm:text-4xl xl:text-[42px] xl:text-start '>What <span className='text-[#A53DFF]'> I do?</span></h1>
                    <p className='text-[#87909D] text-base text-center py-6 lg:w-96 xl:w-[460px] lg:text-[17px] xl:text-start'>I transform ideas into fully functional websites and web applications through expert full stack development. I build intuitive user interfaces that engage visitors while ensuring robust back-end functionality that powers the entire system. 
                        <br />
                       <div className='mt-3'>My work includes developing custom solutions for businesses, creating scalable APIs, and optimizing database performance. With every project, I focus on delivering clean, efficient code that drives real business results.</div> 
                    </p>
                    <div className='flex justify-center items-center xl:justify-start xl:items-start'>
                        {/* <Button text={"Say Hello!"} onClick={() => console.log("")} /> */}
                        <a
                // href="https://mail.google.com/mail/?view=cm&fs=1&to=shivani@gmail.com"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashu2040kumar@gmail.com&su=Hello%20Shivani&body=I%20wanted%20to%20get%20in%20touch%20regarding%20[Your%20Topic]%2E%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss%2E"
 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-xl"
              >
                <Button text={"Say Hello!"} />
              </a>
                    </div>
                    </div>
                  
                </div>
                <div className=' grid grid-cols-1 gap-6 '>
                    {
                        CardData.map((data, index) =>
                            <div className='what_ido_cards' key={index} >
                                <Card title={data.title}
                                    subtitle={data.subtitle}
                                    description={data.description}
                                    onClick={handleClick}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>


    )
}

export default WhatIdo
