import React from 'react'
import PopularAccountItem from '../popularAccountItem/popularAccountItem';
import HorizontalRule from '../horizontalRule/horizontalRule';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const  PopularAccountSection=()=> {
  const navigate = useNavigate()
    const gotoSignup =()=>{
      navigate("/signup", { replace: true });
    }
  return (
    <div className='h-[70vh] overflow-y-auto'>
        <HorizontalRule></HorizontalRule>
        <p className='py-2 text-lightGray text-[15px]'>
        Don’t have an Account? Sign Up to share videos,
         follow creators, like videos and make comments
        </p>
        <button 
        className='bg-gradient-to-r from-[#000000] to-[#8E00FE] w-full text-white py-2 mb-3 rounded-[4px]'
        onClick={gotoSignup}>
            Sign Up</button>
            <HorizontalRule></HorizontalRule>

            <h5 className='mb-3'>Popular accounts</h5>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
            <PopularAccountItem></PopularAccountItem>
           
            
            

            <Link to="/" className='text-primary'> See more</Link>
            <HorizontalRule></HorizontalRule>
            <h5 className='mb-3'>Trending Hashtags</h5>

    </div>
  )
}

export default PopularAccountSection;