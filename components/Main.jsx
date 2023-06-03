import React from 'react'
import style from '../styles/main.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
 

const Main = () => {

  return (
    <div className={style.main_container}>

      <div className={style.carousel}>
        {/* <p className='slogan'> Beauty all of the World for You</p> */}
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={2} 
          autoPlay={false} interval={7000} transitionTime={500}>
            <div className={style.img2}>
                    <div className={style.slogan_box2}>
                        <h1 className={style.slogan2} > Discover Oils reach-treatments assortments</h1>
                        <div  className={style.button} id={style.button_l}>Shop Now</div>
                    </div>
                </div>
                <div className={style.img1}>
                    <div className={style.slogan_box1 }>
                        <h1 className={style.slogan} > Beauty all of the World for You</h1>
                        <div  className={style.button}>Shop Now</div>
                    </div>
                </div>
                <div className={style.img3}>
                    <div className={style.slogan_box3}>
                        <h1 className={style.slogan3} > Skin care-treatments assortments</h1>
                        <div  className={style.button} id={style.button_r}>Shop  Now</div>
                      </div>
                </div>
          </Carousel>
      </div>
      <div className={style.products_container}>
        <div className={style.title_div}>
          <h2>Shop by Collection</h2>
        </div>
        <div className={style.products_div}>
            <div className={style.prod_box}>
                <Link className={style.prod_link} href='#'>
                    <div className={style.img_box} id={style.shadows}>
                    </div>
                    <h2>Shadows</h2>
                </Link>
            </div>
            <div className={style.prod_box}>
                <Link className={style.prod_link} href='#'>
                    <div className={style.img_box} id={style.pencils}>
                    </div>
                    <h2>Pencils</h2>
                </Link>
            </div>
            <div className={style.prod_box}>
                <Link className={style.prod_link} href='#'>
                    <div className={style.img_box} id={style.blushes}>
                    </div>
                    <h2>Blushes</h2>
                </Link>
            </div>
            <div className={style.prod_box}>
                <Link className={style.prod_link} href='#'>
                    <div className={style.img_box} id={style.creams}>
                    </div>
                    <h2>Creams</h2>
                </Link>
            </div>
            <div className={style.prod_box}>
                <Link className={style.prod_link} href='#'>
                    <div className={style.img_box} id={style.lipsticks}>
                    </div>
                    <h2>Lipsticks</h2>
                </Link>
            </div>
        </div>

      </div>
      <div className={style.sets_container}>
          <div className={style.set_div}>
              <Link className={style.prod_link} href='#'>
                  <div className={style.img_set} id={style.yu_cosm}>
                      <div className={style.button} id={style.prod_button}>Shop  Now</div>
                  </div>
              </Link>
          </div>
          <div className={style.set_div}>
              <Link className={style.prod_link} href='#'>
                  <div className={style.img_set} id={style.ordin_cosm}>
                      <div className={style.button} id={style.prod_button2}>Shop  Now</div>
                  </div>
              </Link>
          </div>
      </div>
      <div className={style.video_container}>
            <div className={style.text_video}>
                <div className={style.slogan}>Beauty treatments starts here</div>
                <div className={style.video_text}>Lavender essential oil is for us a daily source of inspiration. Its numerous benefits for home and body care are a measure of confidence that pushes us daily to innovate as we develop our products. This unique flower of a matchless blue pictures more than passion and authenticity.</div>
                <div className={style.button}>Show now</div>
            </div>
            <video className={style.video_div} src="assets/video_lavander.mp4"
                autoPlay loop muted type="video/mp4">
            </video> 
      </div>
    </div>
  )
  }


export default Main