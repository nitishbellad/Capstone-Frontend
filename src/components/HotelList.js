// // src/components/HotelList.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../style/HotelList.css'; // Add styling for the component

// function HotelList({ hotels, searchDone }) { // Receive searchDone prop
//   if (!searchDone) {
//     return null; // Do not render anything if search has not been done
//   }

//   return (
//     <div className="hotel-list">
//       <h2>Available Hotels</h2>
//       <ul>
//         {hotels.length === 0 ? (
//           <p>No Hotels Available</p>
//         ) : (
//           hotels.map(hotel => (
//             <li key={hotel.id} className="hotel-item">
//               <img src={hotel.image} alt={hotel.name} className="hotel-image" />
//               <div className="hotel-info">
//                 <h3>{hotel.name}</h3>
//                 <p>{hotel.place}</p>
//                 <p><strong>Price:</strong> ₹{hotel.price} per night</p>
//                 <Link to={`/hotel/${hotel.id}`} className="view-details">View Details</Link>
//               </div>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default HotelList;

import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HotelList.css';

function HotelList({ hotels, searchDone }) {
  if (!searchDone) {
    return null;
  }

  return (
    <div className="hotel-list">
      {hotels.length === 0 ? (
        <p className="no-hotels">No Hotels Available</p>
      ) : (
        <div className="hotel-grid">
          {hotels.map(hotel => (
            <div key={hotel.id} className="hotel-item">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.place}</p>
                <p><strong>Price:</strong> ₹{hotel.price} per night</p>
                <Link to={`/hotel/${hotel.id}`} className="view-details">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelList;
