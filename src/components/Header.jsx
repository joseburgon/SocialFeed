import React from 'react';
// import { NavLink } from 'react-router-dom';
// import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

// import Photo from '../assets/static/andrea_pirlo.jpg';
// import HomeIcon from '../assets/static/home.svg';
// import FavoriteIcon from '../assets/static/favorites.svg';
// import MenuIcon from '../assets/static/menu.svg';

//import '../assets/styles/components/Header-Blue.scss';

const Header = () => (
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
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Update Interval
          </a>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <a className='dropdown-item' href='#'>1 Sec</a>
            <a className='dropdown-item' href='#'>2 Sec</a>
            <a className='dropdown-item' href='#'>5 Sec</a>
            <div className='dropdown-divider' />
            <a className='dropdown-item' href='#'>Something else here</a>
          </div>
        </li>
      </ul>
      <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2' type='search' placeholder='Feed URL' aria-label='Search' />
        <input className='form-control mr-sm-2' type='search' placeholder='Number of posts' aria-label='Posts' />
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Go!</button>
      </form>
    </div>
  </nav>
);

export default Header;
