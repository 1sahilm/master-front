import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import GardenfurnitureBox from '../comps/GardenfurnitureBox'
import { useRouter } from "next/router";


function Gardenfurnituretab({response}) {
    const router = useRouter();
  console.log(response);
    return (
        <div>
            <div className="row">
            {
          response.map((item) =>{
              console.log(item);
              return(
                  <GardenfurnitureBox
                   src={item.images[0].url}
                   title={item.product_name}
                   price={item.price} 
                   />
              );
          })
      }

            </div>
        </div>
    )
}

export default Gardenfurnituretab;
