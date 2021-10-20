import React from 'react'
import Image from 'next/image';

function award() {
    return (
        <div>
            <div className="banner-bottom-style">
      <div className="container">
        <div className="row">
          
          <div className="col-6">
            <div className="banner-bottom-ineerbox">
                    <ul>
                      <li><Image src="/assets/images/banner/Group 593@2x.png" width={60} height={60} /></li>
                      <li><h6>Made in UK</h6>
                      <span> <p> Divan Beds and Mattressess </p></span></li>
                    </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-bottom-ineerbox">
                    <ul>
                      <li><Image src="/assets/images/banner/Group 591.svg" width={60} height={60} /></li>
                      <li><h6>Interest Free Credit</h6>
                      <span> <p> Interest Free Credit </p></span></li>
                    </ul>
            </div>
          </div>
          
          
        </div>

        </div>
      </div>
        </div>
    )
}

export default award
