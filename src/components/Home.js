// // // src/components/Home.js

// // import React from 'react';

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Welcome to the Hotel Booking Application</h1>
// //       <p>
// //         This application allows users to search for hotels, view details, and make bookings.
// //         You can also register a new account or log in to manage your bookings.
// //       </p>
// //     </div>
// //   );
// // }

// // export default Home;

// // src/components/Home.js

// // src/components/Home.js

// import React from 'react';
// import './Home.css'; // Importing custom CSS for styling

// function Home() {
//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to the Hotel Booking Application</h1>
//       <p className="home-description">
//         This application allows users to search for hotels, view details, and make bookings.
//         You can also register a new account or log in to manage your bookings.
//       </p>

//       <div className="cards-container">
//         <div className="card">
//           <img
//             src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/24095758/AAG_66605233-H1-TBK_Poolside_13503__CMYK-3x2.jpg"
//             alt="Search Hotels"
//             className="card-image"
//           />
//           <div className="card-content">
//             <h2 className="card-title">Search Hotels</h2>
//             <p className="card-text">
//               Find the best hotels in your desired location with just a few clicks.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://pix10.agoda.net/hotelImages/109/109719/109719_14072911540020544350.jpg?s=1024x768"
//             alt="View Details"
//             className="card-image"
//           />
//           <div className="card-content">
//             <h2 className="card-title">View Details</h2>
//             <p className="card-text">
//               Get detailed information about hotels, including amenities, room types, and reviews.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://tse2.mm.bing.net/th/id/OIP.ez4U9EeiLM8WL3tMnzKBGQHaFj?rs=1&pid=ImgDetMain"
//             alt="Make a Booking"
//             className="card-image"
//           />
//           <div className="card-content">
//             <h2 className="card-title">Make a Booking</h2>
//             <p className="card-text">
//               Book your stay easily and securely using our seamless booking process.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Home.css'; // Importing custom CSS for styling

function Home() {
  const navigate = useNavigate();

  const handleSearchHotels = () => {
    // Navigate to the Search Hotels page
    navigate('/search');
  };

  const handleViewDetails = () => {
    // Navigate to the Booking History page
    navigate('/booking-history');
  };

  const handleMakeBooking = () => {
    // Navigate to the Display page
    navigate('/display');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Hotel Booking Application</h1>
      <p className="home-description">
        This application allows users to search for hotels, view details, and make bookings.
        You can also register a new account or log in to manage your bookings.
      </p>

      <div className="cards-container">
        <div className="card" onClick={handleSearchHotels}>
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/24095758/AAG_66605233-H1-TBK_Poolside_13503__CMYK-3x2.jpg"
            alt="Search Hotels"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Search Hotels</h2>
            <p className="card-text">
              Find the best hotels in your desired location with just a few clicks.
            </p>
          </div>
        </div>

        <div className="card" onClick={handleViewDetails}>
          <img
            src="https://pix10.agoda.net/hotelImages/109/109719/109719_14072911540020544350.jpg?s=1024x768"
            alt="View Details"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Booking History</h2>
            <p className="card-text">
              Get detailed information about hotels, room types, and reviews.
            </p>
          </div>
        </div>

        <div className="card" onClick={handleMakeBooking}>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.ez4U9EeiLM8WL3tMnzKBGQHaFj?rs=1&pid=ImgDetMain"
            alt="Make a Booking"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Our Services</h2>
            <p className="card-text">
            "Indulge in a serene spa experience with our selection of revitalizing treatments tailored to your needs."
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Hotel Booking Application. All rights reserved.</p>
          <div className="footer-links">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

