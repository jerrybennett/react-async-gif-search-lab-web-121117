import React from 'react';

const GifSearch = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
      <input value={props.search} type="text" onChange={props.handleChange}/>
      <button type="submit" >Search</button>
    </form>
  );
}
export default GifSearch
