import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from './imports';


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={Blog01} date='March 9, 2023' title='GPT-3 and Open AI is the future. Let us explore how it is?' />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={Blog02} date='March 9, 2023' title='GPT-3 and Open AI is the future. Let us explore how it is?' />
          <Article imgUrl={Blog03} date='March 9, 2023' title='GPT-3 and Open AI is the future. Let us explore how it is?' />
          <Article imgUrl={Blog04} date='March 9, 2023' title='GPT-3 and Open AI is the future. Let us explore how it is?' />
          <Article imgUrl={Blog05} date='March 9, 2023' title='GPT-3 and Open AI is the future. Let us explore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog;
