import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useLocation, Link } from 'react-router-dom';
import { types } from '../components/static/static';
import './style.css';

const Video: FC = () => {
  const dispatch = useDispatch();
  const locationGetter = useLocation();
  const currentLocation: string = locationGetter.pathname.split('/')[1];

  const [location, setLocation] = useState<string>(currentLocation);

  const videos = useSelector((state: any) => state.videos.videos);
  const amount = useSelector((state: any) => state.videos.amount);
  const reduxOffset = useSelector((state: any) => state.videos.offset);

  useEffect(() => {
    dispatch({ type: types.FETCH_VIDEOS_AMOUNT, payload: location });
  }, [amount]);

  interface dataChange {
    locationData: string;
    offset?: number;
  }

  const changeData = ({ locationData, offset }: dataChange): void => {
    setLocation(locationData);
    dispatch({ type: types.GENERIC, payload: locationData, locationData, offset });
  };

  const add6More = ({ locationData }: dataChange): void => {
    dispatch({ type: types.FETCH_MORE_VIDEOS, payload: locationData, offset: reduxOffset + 6 });
  };

  const showVideos = () => {
    return videos.map((video: any) => {
      if (video) {
        return (
          <video
            poster={video.previewImages[0].links.url}
            key={video.url}
            className='videos-div'
            autoPlay
          >
            <source src={video.url} type='video/mp4'></source>
          </video>
        );
      } else {
        return;
      }
    });
  };

  const showButton = () => {
    if (videos.length < amount) {
      return (
        <button className='show-more-button' onClick={() => add6More({ locationData: location })}>
          Show more
        </button>
      );
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1>#{location}</h1>
      </div>
      <div className='mini-container'>{videos && videos.length > 0 && showVideos()}</div>

      <div className='menu'>
        <h3 className='h3-mints'>Mints</h3>
        <Router>
          <div className={location === 'new-in' ? 'link-div link-selected' : 'link-div'}>
            <Link
              className='link'
              to='/new-in'
              onClick={() => changeData({ locationData: 'new-in' })}
            >
              # new in
            </Link>
          </div>
          <div className={location === 'best-sellers' ? 'link-div link-selected' : 'link-div'}>
            <Link
              className='link'
              to='best-sellers'
              onClick={() => changeData({ locationData: 'best-sellers' })}
            >
              # Best sellers
            </Link>
          </div>
          <div className={location === 'on-sale' ? 'link-div link-selected' : 'link-div'}>
            <Link
              className='link'
              to='/on-sale'
              onClick={() => changeData({ locationData: 'on-sale' })}
            >
              # On sale
            </Link>
          </div>
          <div className={location === 'product-video' ? 'link-div link-selected' : 'link-div'}>
            <Link
              className='link'
              to='/product-video'
              onClick={() => changeData({ locationData: 'product-video' })}
            >
              # Product video
            </Link>
          </div>
        </Router>
      </div>

      {amount && amount > 6 && showButton()}
    </div>
  );
};

export default Video;
