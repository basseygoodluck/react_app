import React from 'react';

function Profile() {
  const user = {
    name: "Diamond Gold",
    age: 25,
    bio: "I love coding and exploring new technologies.",
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
}

export default Profile;