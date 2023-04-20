import {  Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
     <Flex  bgColor={"#eeeeee"} justifyContent={"space-around"} p = {"10px"}>
        <Flex alignItems={"center"} gap={"20px"} ml={"-190px"}>
        <Text  fontSize={"13px"}>Offers</Text>
        <Text fontSize={"13px"}>Fanbook</Text>
        <Text fontSize={"13px"}>Download Apps</Text>
        <Text fontSize={"13px"}>TriBe Membership</Text>
        </Flex>
      <Flex gap={"20px"} mr={"-200px"}>
        <Text fontSize={"13px"}>contact us</Text>
        <Text fontSize={"13px"}>Track order</Text>
      </Flex>

     </Flex>

     <Flex  p = {"10px"} justifyContent={"space-around"}>
      <Flex gap = {"6%"} alignItems={"center"}>
        <Image w = {"38%"}  ml = {"-10px"}src = "https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo-bday-y23.svg"/>

        <Text>MEN</Text>
        <Text>WOMEN</Text>
        <Text>MOBILE COVERS</Text>      
      </Flex>


      <Flex alignItems={"center"} gap = {"6%"} >
        <Input bgColor={"#eaeaea"} w = {"400px"} fontSize={"13px"} placeholder=' Search by product,category or collection'/>

        <Text bgColor={"yellow"} pl = {"6px"} pr = {"6px"} >Login</Text>
        <Text fontSize={"23px"}><AiOutlineHeart/></Text>
        <Text  fontSize={"20px"}><BsBag/></Text>

      </Flex>
     </Flex>
     <hr></hr>
     <Flex justifyContent={"center"} gap = {"7%"} p = {"1%"}>
      <Text fontWeight={400} cursor={"pointer"} fontSize={"18px"}>MEN</Text>
      <Text fontWeight={400} cursor={"pointer"} fontSize={"18px"}>WOMEN</Text>
      <Text fontWeight={400} cursor={"pointer"} fontSize={"18px"}>ACCESSORIES</Text>
      <Text fontWeight={400} cursor={"pointer"} fontSize={"18px"}>LIVE NOW</Text>
      <Text fontWeight={400} cursor={"pointer"} fontSize={"18px"}>TEENS</Text>
     </Flex>

   







































    </>
  )
}

export default Navbar