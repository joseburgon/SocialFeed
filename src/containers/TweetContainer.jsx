import React from 'react';
import Tweet from '../components/Tweet';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/components/TweetContainer.scss';

const TweetContainer = ({ url, postsNumber, intervalTime }) => {

    var initialState = useInitialState(url, postsNumber, intervalTime);

    return (
        <div className='row row-cols-1 row-cols-md-4'>
            {
                initialState.map(item =>
                    <div className='col mb-4' key={item.id}>
                        <Tweet {...item} />
                    </div>
                )
            }
        </div>
    );
}

export default TweetContainer;