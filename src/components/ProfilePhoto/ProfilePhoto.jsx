import React from 'react';
import '../../assets/styles/components/ProfilePhoto.scss';

const ProfilePhoto = (props) => {
  const stylePhoto = {
    background: `url(${props.photo}) no-repeat center / cover`,
    height: `${props.dimension}px`,
    width: `${props.dimension}px`,
  };
  return (
    <div className='rounded-photo' style={stylePhoto} />
  );
};

export default ProfilePhoto;
