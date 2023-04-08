import React from 'react';
import './brand.css';

import { Google, Slack, Atlassian, Dropbox, Shopify } from './imports';


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand'>
        <img src={Google} alt='google' />
      </div>
      <div className='gpt3__brand'>
        <img src={Slack} alt='slack' />
      </div>
      <div className='gpt3__brand'>
        <img src={Atlassian} alt='atlassian' />
      </div>
      <div className='gpt3__brand'>
        <img src={Dropbox} alt='dropbox' />
      </div>
      <div className='gpt3__brand'>
        <img src={Shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand;
