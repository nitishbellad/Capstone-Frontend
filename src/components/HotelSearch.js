// // // src/components/HotelSearch.jsx

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import HotelList from './HotelList';

// // const places = [
// //   'New Delhi', 'Mumbai', 'Bangalore' 
  
// // ];

// // const HotelSearch = () => {
// //   const [place, setPlace] = useState('');
// //   const [hotels, setHotels] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [noHotels, setNoHotels] = useState(false);
// //   const [searchDone, setSearchDone] = useState(false); // New state to track if search has been done

// //   const handleSearch = async () => {
// //     if (!place.trim()) {
// //       setError('Please select a place to search.');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');
// //     setNoHotels(false);
// //     setSearchDone(true); // Set searchDone to true when search starts

// //     try {
// //       const response = await axios.get(`http://localhost:9999/hotel/show?place=${place}`);
// //       if (response.data.length === 0) {
// //         setNoHotels(true);
// //       }
// //       setHotels(response.data);
// //     } catch (err) {
// //       setError('Failed to fetch hotels. Please try again later.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Hotel Search</h1>
// //       <select
// //         value={place}
// //         onChange={(e) => setPlace(e.target.value)}
// //       >
// //         <option value="">Select a place</option>
// //         {places.map((city, index) => (
// //           <option key={index} value={city}>{city}</option>
// //         ))}
// //       </select>
// //       <button onClick={handleSearch} disabled={loading}>
// //         {loading ? 'Searching...' : 'Search'}
// //       </button>
// //       {error && <p>{error}</p>}
// //       {noHotels && <p>No Hotels Available</p>}
// //       <HotelList hotels={hotels} searchDone={searchDone} /> {/* Pass searchDone to HotelList */}
// //     </div>
// //   );
// // };

// // export default HotelSearch;

// import React, { useState } from 'react';
// import axios from 'axios';
// import HotelList from './HotelList';
// import './HotelSearch.css'; // Import the CSS file

// const places = [
//   'New Delhi', 'Mumbai', 'Bangalore' 
// ];

// const HotelSearch = () => {
//   const [place, setPlace] = useState('');
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [noHotels, setNoHotels] = useState(false);
//   const [searchDone, setSearchDone] = useState(false);

//   const handleSearch = async () => {
//     if (!place.trim()) {
//       setError('Please select a place to search.');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setNoHotels(false);
//     setSearchDone(true);

//     try {
//       const response = await axios.get(`http://localhost:9999/hotel/show?place=${place}`);
//       if (response.data.length === 0) {
//         setNoHotels(true);
//       }
//       setHotels(response.data);
//     } catch (err) {
//       setError('Failed to fetch hotels. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="hotel-search-container"> {/* Add a container class */}
//       <h1>Hotel Search</h1>
//       <select
//         value={place}
//         onChange={(e) => setPlace(e.target.value)}
//         className="hotel-search-select"
//       >
//         <option value="">Select a place</option>
//         {places.map((city, index) => (
//           <option key={index} value={city}>{city}</option>
//         ))}
//       </select>
//       <button onClick={handleSearch} disabled={loading} className="hotel-search-button">
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       {error && <p className="hotel-search-error">{error}</p>}
//       {noHotels && <p className="hotel-search-nohotels">No Hotels Available</p>}
//       <HotelList hotels={hotels} searchDone={searchDone} />
//     </div>
//   );
// };

// export default HotelSearch;

// import React, { useState } from 'react';
// import axios from 'axios';
// import HotelList from './HotelList';
// import './HotelSearch.css'; // Import the CSS file

// const places = [
//   'New Delhi', 'Mumbai', 'Bangalore'
// ];

// const HotelSearch = () => {
//   const [place, setPlace] = useState('');
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [noHotels, setNoHotels] = useState(false);
//   const [searchDone, setSearchDone] = useState(false);

//   const handlePlaceClick = async (selectedPlace) => {
//     setPlace(selectedPlace);
//     setLoading(true);
//     setError('');
//     setNoHotels(false);
//     setSearchDone(true);

//     try {
//       const response = await axios.get(`http://localhost:9999/hotel/show?place=${selectedPlace}`);
//       if (response.data.length === 0) {
//         setNoHotels(true);
//       }
//       setHotels(response.data);
//     } catch (err) {
//       setError('Failed to fetch hotels. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="hotel-search-container">
//       <h1>Hotel Search</h1>
//       <div className="place-selection">
//         {places.map((city, index) => (
//           <button
//             key={index}
//             onClick={() => handlePlaceClick(city)}
//             className="place-button"
//             disabled={loading}
//           >
//             {city}
//           </button>
//         ))}
//       </div>
//       {error && <p className="hotel-search-error">{error}</p>}
//       {noHotels && <p className="hotel-search-nohotels">No Hotels Available</p>}
//       <HotelList hotels={hotels} searchDone={searchDone} />
//     </div>
//   );
// };

// export default HotelSearch;

// import React, { useState } from 'react';
// import axios from 'axios';
// import HotelList from './HotelList';
// import './HotelSearch.css'; // Import the CSS file

// const places = [
//   { name: 'New Delhi', image: 'path/to/new-delhi-image.jpg' },
//   { name: 'Mumbai', image: 'path/to/mumbai-image.jpg' },
//   { name: 'Bangalore', image: 'path/to/bangalore-image.jpg' }
// ];

// const HotelSearch = () => {
//   const [place, setPlace] = useState('');
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [noHotels, setNoHotels] = useState(false);
//   const [searchDone, setSearchDone] = useState(false);

//   const handlePlaceClick = async (selectedPlace) => {
//     setPlace(selectedPlace);
//     setLoading(true);
//     setError('');
//     setNoHotels(false);
//     setSearchDone(true);

//     try {
//       const response = await axios.get(`http://localhost:9999/hotel/show?place=${selectedPlace}`);
//       if (response.data.length === 0) {
//         setNoHotels(true);
//       }
//       setHotels(response.data);
//     } catch (err) {
//       setError('Failed to fetch hotels. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="hotel-search-container">
//       <h1>Hotel Search</h1>
//       <div className="place-selection">
//         {places.map((place, index) => (
//           <div key={index} className="place-item">
//             <img src={place.image} alt={place.name} className="place-image" />
//             <button
//               onClick={() => handlePlaceClick(place.name)}
//               className="place-button"
//               disabled={loading}
//             >
//               {place.name}
//             </button>
//           </div>
//         ))}
//       </div>
//       {error && <p className="hotel-search-error">{error}</p>}
//       {noHotels && <p className="hotel-search-nohotels">No Hotels Available</p>}
//       <HotelList hotels={hotels} searchDone={searchDone} />
//     </div>
//   );
// };

// export default HotelSearch;

import React, { useState } from 'react';
import axios from 'axios';
import HotelList from './HotelList';
import './HotelSearch.css'; // Import the CSS file

const places = [
  { name: 'New Delhi', image: 'https://tse4.mm.bing.net/th/id/OIP.rDKAZOiDpe7CWSZx5VQvxgHaE7?rs=1&pid=ImgDetMain' },
  { name: 'Mumbai', image: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg' },
  { name: 'Bangalore', image: 'https://tse2.mm.bing.net/th/id/OIP.1q_rTtGGvQLPrT7cC6a-hwHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
];

const HotelSearch = () => {
  const [place, setPlace] = useState('');
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noHotels, setNoHotels] = useState(false);
  const [searchDone, setSearchDone] = useState(false);

  const handlePlaceClick = async (selectedPlace) => {
    setPlace(selectedPlace);
    setLoading(true);
    setError('');
    setNoHotels(false);
    setSearchDone(true);

    try {
      const response = await axios.get(`http://localhost:9999/hotel/show?place=${selectedPlace}`);
      if (response.data.length === 0) {
        setNoHotels(true);
      }
      setHotels(response.data);
    } catch (err) {
      setError('Failed to fetch hotels. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hotel-search-container">
      <h1>Hotel Search</h1>
      <div className="place-selection">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <div className="place-details">
              <h3>{place.name}</h3>
              <button
                onClick={() => handlePlaceClick(place.name)}
                className="place-button"
                disabled={loading}
              >
                Search
              </button>
            </div>
          </div>
        ))}
      </div>
      {error && <p className="hotel-search-error">{error}</p>}
      {noHotels && <p className="hotel-search-nohotels">No Hotels Available</p>}
      <HotelList hotels={hotels} searchDone={searchDone} />
    </div>
  );
};

export default HotelSearch;


