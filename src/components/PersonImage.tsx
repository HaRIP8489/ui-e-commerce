import React from 'react';

const PersonImage: React.FC = () => {
  return (
    <img
      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      alt="Person"
      width={200}
      style={{ borderRadius: 8 }}
    />
  );
};

export default PersonImage;
