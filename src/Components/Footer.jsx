import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiFillTwitterCircle } from "react-icons/ai";
import {FaSnapchat,FaApple } from "react-icons/fa";
import {TiSocialPinterestCircular } from "react-icons/ti";

import style from "../Style/Footer.module.css"

const Footer = () => {
  return (
    <>
    <Box  bgColor={"#181818"} pb = {"50px"} pt = {"20px"}>

     <Box w= {'85%'} m = {"auto"}>
      <Flex gap = {"11%"} mt = {"80px"} mb = {"35px"}> 
      <Flex  flexDirection={"column"}>
        <Text color={"#fdd835"} fontSize={"30px"} fontWeight={"bold"}>Bewakoof</Text>
        <Text color={"#fdd835"}  fontSize={"14px"} mt = {"3%"}>CUSTOMER SERVICE</Text>
        <Text className= {style.footer_text} mt = {"12px"}>Contact Us</Text>
        <Text className={style.footer_text} >Track Order</Text>
        <Text className={style.footer_text}>Return Order</Text>
        <Text className={style.footer_text} mb = {"30%"}>Cancel Order</Text>
        <Text className={style.footer_text} mb = {"10%"}>15 days return policy</Text>
        <Text className={style.footer_text}>Cash on delivery</Text>
      </Flex>

      <Flex flexDirection={"column"}>
        <Text  color={"#fdd835"} fontSize={"14px"} mt = {'48px'}>COMPANY</Text>
        <Text mt = {"6%"} className= {style.footer_text}>About us</Text>
        <Text className= {style.footer_text}>we're Hiring</Text>
        <Text className= {style.footer_text}>Terms and Conditions</Text>
        <Text className= {style.footer_text}>Privacy Policy</Text>
        <Text className= {style.footer_text} mb = {"30px"}>Blog</Text>

        <Text  color={"#fdd835"} fontSize={"14px"} mb = {"20px"}>DOWNLOAD THE APP</Text>
        <Flex  gap = {"1%"}>
          <Image w = {"40%"} src = {"https://images.bewakoof.com/web/app_android_v1.png"}></Image>
          <Image w = {"40%"}  src = {"https://images.bewakoof.com/web/app_ios_v1.png"}></Image>
        </Flex>
      </Flex>

      <Flex  flexDirection={"column"}>
        <Text  color={"#fdd835"} fontSize={"14px"} mt = {'48px'}>CONNECT WITH US</Text>
        <Text mt = {"6%"} className= {style.footer_text}>4.7M People like this</Text>
        <Text mt = {"5%"} className= {style.footer_text}>1M Followers</Text>
        <Flex gap = {"5%"} alignItems={"center"} mt = {"15px"}>
         <Text  className= {style.footer_text} fontSize={"20px"} ><AiFillTwitterCircle/></Text>

          <Text className= {style.footer_text} fontSize={"25px"}><TiSocialPinterestCircular/></Text> 
         <Text className= {style.footer_text} fontSize={"18px"} ><FaSnapchat/></Text>
         <Text className= {style.footer_text} fontSize={"18px"} ><FaApple/></Text>
        </Flex>

        <Text  color={"#fdd835"} fontSize={"14px"} mt = {"30px"}>100% SECURE PAYMENT</Text>

       
          <Image  mt = {"20px"}src = "https://images.bewakoof.com/web/secure-payments-image.png"/>
      </Flex>


      <Flex flexDirection={"column"} > 
        <Text  color={"#fdd835"}  fontSize={"14px"} mt = {'48px'}>KEEP UP TO DATE</Text>
        <Flex>
        <Input mt = {'10px'} placeholder='Enter Email Id' borderBottom={"1px solid #fdd835"} borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"}/>
      <Button bgColor={"#fdd835"} fontSize={"14px"} pl= {"35px"} pr = {"35px"} ml = {"-10px"} mt = {"10px"} borderRadius={"none"}>SUBSCRIBE</Button>
        </Flex>
        
      </Flex>
      </Flex>

      <hr></hr>
      {/* < second Footer> */}
      <Flex gap = {'10%'} mt = {"30px"}>

        <Flex flexDirection={'column'}>
          <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>MEN'S CLOTHING</Text>
          <Text mt = {"20px"} className= {style.footer_text}>Top Wear</Text>
          <Text className= {style.footer_text}>Men's New Arrivals</Text>
          <Text className= {style.footer_text}>Men's Half Sleeve T-Shirts</Text>
          <Text className= {style.footer_text}>Men's Hoodies & Sweatshirts</Text>
          <Text className= {style.footer_text}>Men's Long Sleeve T-shirts</Text>
          <Text className= {style.footer_text}>Men's Printed T-shirts</Text>
          <Text className= {style.footer_text}>Men's Plain T-shirts</Text>
          <Text className= {style.footer_text}>Men's Polo T-Shirts</Text>
          <Text className= {style.footer_text}>Men's Kurtas</Text>
          <Text className= {style.footer_text}>Men's Combo T-Shirts</Text>
          <Text className= {style.footer_text}>Men's Shirts</Text>
          <Text className= {style.footer_text}>Men's Nightwear</Text>
          <Text className= {style.footer_text}>Bottom Wear</Text>
          <Text className= {style.footer_text} mt = {"20px"}>Men's Pajamas</Text>
          <Text className= {style.footer_text}>Men's Track Pants</Text>
          <Text className= {style.footer_text}>Men's Boxer Shorts</Text>
          <Text className= {style.footer_text}>Men's Track Pants</Text>
          <Text className= {style.footer_text}>Men's Pants</Text>
          <Text className= {style.footer_text} mt = {"20px"}>Featured</Text>
          <Text className= {style.footer_text}>Men's Flip Flops</Text>
          <Text className= {style.footer_text}>Men's Sliders</Text>
          <Text className= {style.footer_text}>Marvel T-Shirts</Text>
          <Text className= {style.footer_text}>Disney T-Shirts</Text>
          <Text className= {style.footer_text}>Avengers T-Shirts</Text>
          <Text className= {style.footer_text}>Star Wars T-Shirts</Text>
          <Text className= {style.footer_text}>Superman T-Shirts</Text>
          <Text className= {style.footer_text}>Joker T-Shirts</Text>
          <Text className= {style.footer_text}>Batman T-Shirts</Text>
        </Flex>
        <Flex  flexDirection={'column'}>
          <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>WOMEN'S CLOTHING</Text>
          <Text mt = {"20px"} className= {style.footer_text}>Women's Top Wear</Text>
          <Text className= {style.footer_text}>Women's New Arrivals</Text>
          <Text className= {style.footer_text}>Women's T-Shirts</Text>
          <Text className= {style.footer_text}>Women's Hoodies & Sweatshirts</Text>
          <Text className= {style.footer_text}>Women's Dresses</Text>
          <Text className= {style.footer_text}>Women's 3/4 Sleeve T-Shirts</Text>
          <Text className= {style.footer_text}>Women's Kurtis</Text>
          <Text className= {style.footer_text}>Women's Combo T-Shirts</Text>
          <Text className= {style.footer_text}>Women's Nightwear</Text>
          <Text className= {style.footer_text}>Women's Plus Size Store</Text>
          <Text className= {style.footer_text} mt = {"20px"}>Batman T-Shirts</Text>
          <Text className= {style.footer_text}>Women's Bottom Wear</Text>
          <Text className= {style.footer_text}>Women's Pajamas</Text>
          <Text className= {style.footer_text}>Women's Boxer Shorts</Text>
          <Text className= {style.footer_text}>Women's Jeans</Text>
          <Text className= {style.footer_text}>Women's Joggers</Text>
          <Text className= {style.footer_text}>Women's Shorts</Text>
          <Text className= {style.footer_text} mt = {'20px'}>BAGS</Text>
          <Text className= {style.footer_text}>Laptop Bags</Text>
          <Text className= {style.footer_text}>Small Backpacks</Text>
          <Text className= {style.footer_text} mt = {"20px"}>Featured</Text>
          <Text className= {style.footer_text}>Women's Slides</Text>
          <Text className= {style.footer_text}>Women's Flip Flops</Text>
        </Flex>
        <Flex  flexDirection={'column'}>
          <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>MOBILE COVERS</Text>
          <Text mt = {"20px"} className= {style.footer_text}>Brands</Text>
          <Text className= {style.footer_text}>Apple</Text>
          <Text  className= {style.footer_text}>Realme</Text>
          <Text className= {style.footer_text}>Samsung</Text>
          <Text  className= {style.footer_text}>Xiaomi</Text>
          <Text  className= {style.footer_text}>Oneplus</Text>
          <Text  className= {style.footer_text}>Vivo</Text>
          <Text  className= {style.footer_text}>Oppo</Text>
        </Flex>
        <Flex  flexDirection={'column'}>
        <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>FANBOOK</Text>
        <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>OFFERS</Text>
        <Text color = {'#32b8cc'} fontSize={"20"} fontWeight={"bold"}>SITEMAP</Text>

        </Flex>





      </Flex>

      




     </Box>

      
    </Box>
    </>
  )
}

export default Footer