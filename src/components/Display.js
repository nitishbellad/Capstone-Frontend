import React from 'react';
import "../style/Display.css"; // Import the CSS file for styling

function HotelServices() {
  return (
    <div className="hotel-services">
      <h2 className="services-title">Our Hotel Services</h2>
      <div className="services-cards">
        <div className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src="https://tse1.mm.bing.net/th/id/OIP.6tKSR5YEfiond9aLjbHbiAHaE1?w=283&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Spa Service"
          />
          <div className="card-body">
            <h5 className="card-title">Relaxing Spa</h5>
            <p className="card-text">
              Experience our luxurious spa treatments designed to rejuvenate your body and mind.
            </p>
            
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src="https://www.visittreasurelake.com/wp-content/uploads/2017/11/fine-dining-meal.jpg"
            alt="Dining Service"
          />
          <div className="card-body">
            <h5 className="card-title">Fine Dining</h5>
            <p className="card-text">
              Savor gourmet dishes prepared by world-class chefs in our elegant dining room.
            </p>
            
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src="https://tse1.mm.bing.net/th/id/OIP.feR_cBVQGeAyLKAEJBCgNgHaE7?rs=1&pid=ImgDetMain"
            alt="Pool Service"
          />
          <div className="card-body">
            <h5 className="card-title">Infinity Pool</h5>
            <p className="card-text">
              Take a dip in our stunning infinity pool with breathtaking views of the city skyline.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelServices;
