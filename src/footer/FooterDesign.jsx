import React from 'react'
import { footerDataList } from './FooterData'
import Facebook from '../footer/facebook.png'
import Linkedin from '../footer/linkedin.png'
import Instagram from '../footer/instagram.png'

const FooterDesign = () => {
  return (
    <div className='footerDataList'>
        {footerDataList.map((data) =>(
            <div className="data-list" key={data.id}>
            <p className='data-title'>{data.title}</p>
            <ul>
                <li className='data-content'>{data.content1}</li>
                <li className='data-content'>{data.content2}</li>
                <li className='data-content'>{data.content3}</li>
            </ul>
            </div>
       ))}
       <div className="footer-line"></div>
       <img className='social facebook' src={Facebook} alt="" />
       <img className='social linkedin' src={Linkedin} alt="" />
       <img className='social instagram' src={Instagram} alt="" />
    </div>
  )
}

export default FooterDesign