import React from 'react';
import { Check } from 'lucide-react'; // Ensure this is correctly imported
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "Quarterly",
      price: 18000,
      length: "3 Months"
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Half Yearly",
      price: 22000,
      length: "6 Months"
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Yearly",
      price: 28000,
      length: "1 Year"
    }
  ];

  return (
    <section className='pricing'>
      <h1>BLOWN UP FITNESS PLANS....</h1>
      <div className="wrapper">
        {pricing.map(element => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length}</p>
            </div>
            <div className="description">
              <p>
                <Check /> Equipment
              </p>
              <p>
                <Check /> All Day Free Training
              </p>
              <p>
                <Check /> Free Restroom
              </p>
              <p>
                <Check /> 24/7 Skilled Support
              </p>
              <p>
                <Check /> 20 Days Freezing Option
              </p>
              <Link to='/'>Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
