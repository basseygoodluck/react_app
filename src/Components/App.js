import React, { useState } from 'react';
import '../styles/app.css';  // Ensure the CSS file is in the correct directory

// Houses Data
const houses = [
  {
    id: 1,
    title: 'Luxury Villa',
    images: ['/images/luxuryvilla.jpg', '/images/luxuryvilla2.jpg'],
    price: '$1,200,000',
    description: 'A beautiful villa with a stunning view of the ocean.',
  },
  {
    id: 2,
    title: 'Country Cottage',
    images: ['/images/cottage.jpg', '/images/cottage2.jpg'],
    price: '$300,000',
    description: 'A cozy cottage in the countryside with a large garden.',
  },
];

// Contact Data
const contactInfo = {
  ownerName: 'Prakta Malibu',
  phone: '+123-456-7890',
  email: 'praktabu@example.com',
  address: '123 Ocean View Drive, Malibu, CA',
};

function App() {
  const [currentHouseIndex, setCurrentHouseIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactPage, setShowContactPage] = useState(false); // Track if contact page is open
  const [showAboutPage, setShowAboutPage] = useState(false); // Track if about page is open

  const currentHouse = houses[currentHouseIndex];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % currentHouse.images.length
    );
  };

  const handleSwitchHouse = () => {
    setCurrentHouseIndex((prevIndex) => (prevIndex + 1) % houses.length);
  };

  if (showContactPage) {
    // Contact Page
    return (
      <div className="contact-container">
        <h1>Contact Information</h1>
        <p><strong>Owner's Name:</strong> {contactInfo.ownerName}</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Email:</strong> {contactInfo.email}</p>
        <p><strong>Address:</strong> {contactInfo.address}</p>

        <button
          className="button"
          onClick={() => setShowContactPage(false)}
          style={{ marginTop: '20px' }}
        >
          Back to Houses
        </button>
      </div>
    );
  }

  if (showAboutPage) {
    // About Page
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          
          </p>

        <button
          className="button"
          onClick={() => setShowAboutPage(false)}
          style={{ marginTop: '20px' }}
        >
          Back to Houses
        </button>
      </div>
    );
  }

  // House Page
  return (
    <div className="container">
      <div className="house-info">
        <h1>{currentHouse.title}</h1>
        <p className="price">Price: {currentHouse.price}</p>

        <img
          src={currentHouse.images[currentImageIndex]}
          alt="House"
          className="house-image"
        />

        <p className="description">{currentHouse.description}</p>

        <button className="button" onClick={handleNextImage}>
          Next Image
        </button>

        <button
          className="button"
          onClick={handleSwitchHouse}
          style={{ marginTop: '10px' }}
        >
          Switch House
        </button>
      </div>

      {/* Button to go to Contact Page */}
      <button
        className="button"
        onClick={() => setShowContactPage(true)}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '80px', // Adjust position to leave space for the About button
        }}
      >
        Contact Info
      </button>

      {/* Button to go to About Page */}
      <button
        className="button"
        onClick={() => setShowAboutPage(true)}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}
      >
        About
      </button>
    </div>
  );
}

export default App;