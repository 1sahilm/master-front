import React from 'react';
import Image from "next/image/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "next/router";
import Slider from "react-slick";


function SliderBox({src, title, price}) {
    const handleRoute = () => {
        router.push(`/newproduct?title=${title}`);
    };
    var images = [];
  var imgSlides = () =>
    images.map((num) => ({
   
    }));
    return (
        <div>
            <div className="forSlider ForDesktopView" style={{paddingTop:"82px"}}>
        <div className="container-fluid">
          <div className="row " style={{ marginBottom: "20px" }}></div>
        </div>
        <Slider
          dots={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={false}
          arrows={true}
          autoplaySpeed={3000}
        >
          {imgSlides()}
          <div className="product productNew sliderProduct">
            <div className="thumb">
              <a href="shop-left-sidebar.html" className="image">
                <Image
                  width={378}
                  height={128}
                  src="/assets/images/banner/Homepage-banner.png"
                  className="rounded"
                  alt="Product"
                />
                {/* <Image width={128} height={128} className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
              </a>

              <div className="actions">
                <a
                  href="wishlist.html"
                  className="action wishlist"
                  title="Wishlist"
                >
                  <Image src="/assets/images/icons/heart1.png" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="best-seller mb-6 mt-8 text-center">
              <button>BUY NOW</button>
            </div>

            <div className="rating-product">
              {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
            </div>
            <div className="contentNew">
              <p>
                {title}
              </p>
              <span className="price">{price}</span>
            </div>
          </div>
          <div className="product productNew sliderProduct">
            <div className="thumb">
              <a href="shop-left-sidebar.html" className="image">
                <Image
                  width={378}
                  height={128}
                  src="/assets/images/banner/Homepage-banner.png"
                  className="rounded"
                  alt="Product"
                />
                {/* <Image width={128} height={128} className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
              </a>

              <div className="actions">
                <a
                  href="wishlist.html"
                  className="action wishlist"
                  title="Wishlist"
                >
                  <Image src="/assets/images/icons/heart1.png" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="best-seller mb-6 mt-8 text-center">
              <button>BUY NOW</button>
            </div>

            <div className="rating-product">
              {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
            </div>
            <div className="contentNew">
              <p>
                Grey Linen Divan Base Or Set + Headboard & Mattress FREE UK
                DELIVERY
              </p>
              <span className="price"></span>
            </div>
          </div>
          <div className="product productNew sliderProduct">
            <div className="thumb">
              <a href="shop-left-sidebar.html" className="image">
                <Image
                  width={378}
                  height={128}
                  src="/assets/images/banner/Homepage-banner.png"
                  className="rounded"
                  alt="Product"
                />
                {/* <Image width={378} height={128}  className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
              </a>

              <div className="actions">
                <a
                  href="wishlist.html"
                  className="action wishlist"
                  title="Wishlist"
                >
                  <Image src="/assets/images/icons/heart1.png" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="best-seller mb-6 mt-8 text-center">
              <button>BUY NOW</button>
            </div>

            <div className="rating-product">
              {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
            </div>
            <div className="contentNew">
              <p>
                Grey Linen Divan Base Or Set + Headboard & Mattress FREE UK
                DELIVERY
              </p>
              <span className="price"></span>
            </div>
          </div>
          <div className="product productNew sliderProduct">
            <div className="thumb">
              <a href="shop-left-sidebar.html" className="image">
                <Image
                  width={378}
                  height={128}
                  src="/assets/images/banner/Homepage-banner.png"
                  className="rounded"
                  alt="Product"
                />
                {/* <Image  className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
              </a>

              <div className="actions">
                <a
                  href="wishlist.html"
                  className="action wishlist"
                  title="Wishlist"
                >
                  <Image src="/assets/images/icons/heart1.png" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="best-seller mb-6 mt-8 text-center">
              <button>BUY NOW</button>
            </div>

            <div className="rating-product">
              {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
            </div>
            <div className="contentNew">
              <p>
                Grey Linen Divan Base Or Set + Headboard & Mattress FREE UK
                DELIVERY
              </p>
              <span className="price"></span>
            </div>
          </div>
          <div className="product productNew sliderProduct">
            <div className="thumb">
              <a href="shop-left-sidebar.html" className="image">
                <Image
                  width={378}
                  height={128}
                  src="/assets/images/banner/Homepage-banner.png"
                  className="rounded"
                  alt="Product"
                />
                {/* <Image width={128} height={128} className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
              </a>

              <div className="actions">
                <a
                  href="wishlist.html"
                  className="action wishlist"
                  title="Wishlist"
                >
                  <Image src="/assets/images/icons/heart1.png" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="best-seller mb-6 mt-8 text-center">
              <button>BUY NOW</button>
            </div>

            <div className="rating-product">
              {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
            </div>
            <div className="contentNew">
              <p>
                Grey Linen Divan Base Or Set + Headboard & Mattress FREE UK
                DELIVERY
              </p>
              <span className="price"></span>
            </div>
          </div>
        </Slider>
       
      </div>
        </div>
    )
}

export default SliderBox;

