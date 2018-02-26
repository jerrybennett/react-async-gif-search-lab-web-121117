import React from 'react';

const GifList = ({data}) => {
  return (
    <ul>
      {data.map(vid =>
        <li>
          <img src={vid.images.fixed_width.webp} />
        </li>)}
    </ul>
  );
}

export default GifList
