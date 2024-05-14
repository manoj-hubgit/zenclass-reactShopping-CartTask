import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Components/Product';

const App = () => {
const[value,setvalue]=useState(0);

  const cart=[{
  id:"1",
  item:"Fancy Product",
  money:{old:"$40.00",
  new:"$80.00"},
  star:" "

  },
{
  id:"2",
  item:"Special Item",
  money:{old:"$20.00",
  new:"$18.00"},
  star:"fa fa-star"
},
{
  id:"3",
  item:"Sale Item",
  money:{old:"$50.00",
  new:"$25.00"},
  star:" "
},
{
  id:"4",
  item:"Popular Item",
  money:{old:"",
  new:"$40.00"},
  star:"fa fa-star"
},
{
  id:"5",
  item:"Sale Item",
  money:{old:"$50.00",
  new:"$25.00"},
  star:" "
 
},
{
  id:"6",
  item:"Fancy Product",
  money:{old:"$120.00",
  new:"$280.00"},
  star:" "
},
{
  id:"7",
  item:"Special Item",
  money:{old:"$20.00",
  new:"$18.00"},
  star:"fa fa-star"
},
{
  id:"8",
  item:"Popular Item",
  money:{old:"",
  new:"$40.00"},
  star:"fa fa-star"
}]
const[obj,setobj]=useState(cart);
  return (
   <>
   <Navbar setvalue={setvalue} value={value}/>
   <Header />
   <Product setobj={setobj} obj={obj} setvalue={setvalue} value={value}/>
   <Footer />
   </>
  );
};

export default App;