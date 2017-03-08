import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Search by Title"
        onChange={props.onHandleChange}
        size="10"
        type="text"
      />
    </form>
  );
}

export default FilterInput;
