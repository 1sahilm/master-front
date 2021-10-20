import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MattressBox from "./MattressBox";
import { useRouter } from "next/router";
import Image from "next/image";

function HomeMattress({response}) {
    const router = useRouter();
  console.log(response);
    return (
        <div>
            <div className="row">
            {
          response.map((item) =>{
              console.log(item);
              return(
                  <MattressBox
                   src={item.images}
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

export default HomeMattress;

