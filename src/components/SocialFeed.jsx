import React from 'react';
import { useForm } from 'react-hook-form';
import TweetContainer from '../containers/TweetContainer';

var url = null
var intervalTime = 1000
var postsNumber = 4
var loadingTweets = false

const SocialFeed = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    url = data.url
    intervalTime = data.intervalTime
    postsNumber = data.postsNumber
    loadingTweets = true
  }
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>Social Feed</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home
            <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control mr-sm-2' type='url' placeholder='Feed URL' ref={register({ required: true })} name='url' />
            {errors.url && alert('URL is required!')}
            <input
              className='form-control mr-sm-2'
              type='number' name='postsNumber' placeholder='Number of posts'
              ref={register({ required: true, min: 3 })}
            />
            {errors.postsNumber && alert('Number of posts invalid!')}
            <label className="mr-sm-2" htmlFor="intervalTime">Update Interval:</label>
            <select name="intervalTime" className="form-control mr-sm-2" ref={register({ required: true })} id="intervalTime">
              <option value="1000">1 Sec</option>
              <option value="2000">2 Sec</option>
              <option value="5000">5 Sec</option>
            </select>
            {errors.intervalTime && alert('Update interval is required!')}
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Go!</button>
          </form>
        </div>
      </nav>
      {
        loadingTweets ?
          <TweetContainer
            url={url}
            intervalTime={intervalTime}
            postsNumber={postsNumber}
          />
          : null
      }
    </div>
  );
}

export default SocialFeed;
