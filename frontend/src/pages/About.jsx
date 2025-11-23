import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea : to provide a platform where customers can easily discover , explore , and purchase a wide range of products from the comfort of their homes</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis ipsum fugit voluptas odio laboriosam soluta necessitatibus ad dolore eaque quisquam ipsa minima, possimus maxime vel labore magnam atque minus obcaecati expedita enim mollitia praesentium.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque porro corrupti necessitatibus qui adipisci. Sit accusantium eum eius praesentium provident, quibusdam dignissimos illum, eligendi totam saepe nostrum corporis doloremque voluptates, tempore vel ducimus ut.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore? Voluptatem reprehenderit, eligendi et dolor illum exercitationem tempore velit harum eaque quae. Dolore laudantium aut cupiditate qui reiciendis mollitia!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore? Voluptatem reprehenderit, eligendi et dolor illum exercitationem tempore velit harum eaque quae. Dolore laudantium aut cupiditate qui reiciendis mollitia!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore? Voluptatem reprehenderit, eligendi et dolor illum exercitationem tempore velit harum eaque quae. Dolore laudantium aut cupiditate qui reiciendis mollitia!</p>
        </div>
      </div>
      
      <NewsletterBox/>
      
    </div>
  )
}

export default About
