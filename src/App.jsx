import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Sectiongrid from './SectionGrid.jsx';
import Category from './components/category.jsx';

function App() {
  const [value,setValue]=useState([]);

     async function getData(){
      try {
          const ApiData= await fetch(import.meta.env.VITE_BLINKIT_API_URL);
    const data= await ApiData.json();
    setValue(data)
   
      } catch (error) {
        console.log(error)
      }
  }
 useEffect(
  ()=>{
   getData()
  },
  []
 )
const chocolate= value.filter((data,index)=>{return data.search_query=="chocolate"})
const ColdDrinks= value.filter((data,index)=>{return data.search_query=="Cold Drinks"})
const Rice= value.filter((data,index)=>{return data.search_query=="Rice"})
const Hookah= value.filter((data,index)=>{return data.search_query=="Hookah"})
  return(
    <>
    <Navbar/> 
    <Hero/>
    <Category/>
    <Sectiongrid heading={"chocolate"} name={chocolate} />
   <Sectiongrid heading={'ColdDrinks'} name={ColdDrinks} />
    <Sectiongrid heading={'Rice'} name={Rice} />
    <Sectiongrid heading={'Hookah'} name={Hookah} />
   < Footer/>
    </>
    
  )
}
export default App;