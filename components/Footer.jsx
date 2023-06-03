import React from 'react'
import style from '../styles/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterItem from './FooterItem';
import Link from "next/link";

import {
  
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";

  import { faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faSnapchat, faTiktok
  } from "@fortawesome/free-brands-svg-icons"

  const COMPANY_LIST = [
    { text: "Careers", href: "/" },
    { text: "Accessibility", href: "/" },
    { text: "Sustainability", href: "/" },
    { text: "Commit to Change", href: "/" },
    { text: "Everything Is Chemicals", href: "/" }

]

const CUSTOMER_LIST = [
  { text: "Disposal Instructions", href: "/" },
  { text: "Return Policy", href: "/" },
  { text: "Promotion Terms & Conditions", href: "/" },
  { text: "Purchase", href: "/" },
  { text: "Check Balance", href: "/" },
  { text: "Return Policy", href: "/" }
]

const PRIVACY_LIST = [
  { text: "Cookies Settings", href: "/" },
  { text: "Cookie policy", href: "/" },
  { text: "Candidate privacy notice", href: "/" },
  { text: "Data Protection Certification", href: "/" },
  { text: "Terms and conditions", href: "/" },
  { text: "Terms of use", href: "/" }
]


const Footer = () => {
  return (

    <div className={style.footer_container}>
        <div className={style.follow_box}>
            <div className={style.icons_box}>
                <Link href='#'><FontAwesomeIcon icon={faFacebook} className={style.iconF} /></Link>
                <Link href='#'><FontAwesomeIcon icon={faInstagram} className={style.iconF}  /></Link>
                <Link href='#'><FontAwesomeIcon icon={faTwitter} className={style.iconF} /></Link>
                <Link href='#'><FontAwesomeIcon icon={faYoutube} className={style.iconF}  /></Link>
                <Link href='#'><FontAwesomeIcon icon={faPinterest} className={style.iconF} /></Link>
                <Link href='#'><FontAwesomeIcon icon={faSnapchat} className={style.iconF}  /></Link>
                <Link href='#'><FontAwesomeIcon icon={faTiktok} className={style.iconF} /></Link>
            </div>
            <div className={style.newsletter_box}>
                <p className={style.subscribe_text}>Subscribe to Our Newstletters</p>
                <input type="text" className={style.input_email} placeholder="Email Address" />
                       
            </div>
          
        </div>
        <div className={style.footer_box}>
            <div className={style.columns}>
                <div className={style.column_1}>
                   
                    <h3 className={style.title_h3} >Company</h3>
                              {COMPANY_LIST.map((company) => (
                                    <FooterItem  key={company.text} {...company} className={style.list_item}/>
                              ))}
                </div>
                <div className={style.column_2}>
                    <h3 className={style.title_h3} >Customer Care</h3>
                              {CUSTOMER_LIST.map((customer) => (
                                    <FooterItem  key={customer.text} {...customer} className={style.list_item}/>
                              ))}
                </div>
                <div className={style.column_3}>
                <Link href='#'><h3 className={style.title_h3} >Contact Us</h3></Link>
                <Link href='#'><h3 className={style.title_h3} >Track Order</h3></Link>
                <Link href='#'><h3 className={style.title_h3} >Sign In</h3></Link>
                <Link href='#'><h3 className={style.title_h3} >Store Locator</h3></Link>
               
                </div>
                <div className={style.column_4}>
                    <h3 className={style.title_h3} >Privacy Centre</h3>
                              {PRIVACY_LIST.map((privacy) => (
                                    <FooterItem  key={privacy.text} {...privacy} />
                              ))}
                </div>
            </div>
          
        </div>
        <div className={style.terms_container}>
              Makra Inc.® 2023. All rights reserved. Terms & Conditions
      </div>
      
  </div>
  )
}

export default Footer