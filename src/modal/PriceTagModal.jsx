import React, { useState } from 'react'
import InputField from "../modal/InputField";
import image1 from '../modal/Vector.png'
import image2 from '../modal/map2.jpeg'




const PriceTagModal = () => {

    const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className='modal-container'>
    <img className='img pricetag' src={image1} alt="" />
    <InputField   label="Price Range" value={location} onChange={handleLocationChange} /> 
    <img className='img map' src={image2} alt="" />
      <InputField label="Location" value={priceRange} onChange={handlePriceRangeChange} />
      
    </div>
  )
}

export default PriceTagModal