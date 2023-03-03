import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

import banner from '../assets/images/MaskGroup.png';
import '../styles/Home.css';

export default function Home({ apartmentList }) {
console.log(apartmentList);
  return (
    <main className='Home'>
        <Banner img = { banner } page = {'home'} />
        <section className="Home__card-list">
          

{/*           
        <Card />
        <Card />
        <Card /> */}

          {
            apartmentList.map( apartment => <Card key = {apartment.id} {...apartment}/> )
        
          }
          
        </section>
    </main>
  )
}