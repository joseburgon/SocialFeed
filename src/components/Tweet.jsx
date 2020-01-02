import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/Tweet.scss';

const convertDate = (inputFormat) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const d = new Date(inputFormat)
  const dateString = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${d.toTimeString()}`

  return dateString
}

const stringToURL = (value) => {
  if (value) {
    const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const text = value.replace(exp, "<a href='$1' target='_blank'>$1</a>")
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }
}

const Tweet = ({ id, created_at, user, text }) => (
  <div className='card h-100 mx-auto'>
    <div className='card-body'>
      <h5 className='card-title'>{user.name}</h5>
      <h6 className='card-subtitle mb-2 text-muted'>{convertDate(created_at)}</h6>
      <p className='card-text'>{stringToURL(text)}</p>
    </div>
  </div>
);

Tweet.propTypes = {
  created_at: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default Tweet;
