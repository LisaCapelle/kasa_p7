import React from 'react';
// import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import banner from '../assets/images/MaskGroup.png';

import Card from '../components/Card';

import '../styles/Home.css';

export default function Home({ apartmentList }) {
// console.log(apartmentList);
  return (
    <main className='Home'>
        <Banner img = {banner} page = {'home'} />
        <section className="Home__card-list">
      
          { 
            apartmentList.map( apartment => <Card key = {apartment.id} {...apartment}/> )
          }
          
        </section>
    </main>
  )
}