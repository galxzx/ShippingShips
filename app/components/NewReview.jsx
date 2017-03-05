import React from 'react';
import {Link }from 'react-router';

export default function NewReview(props) {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const reviewContent = props.reviewContent
  const reviewStars = props.reviewStars
  const  user = props.user
    let starsArray = []
    for(var i = 0; i<reviewStars; i++) {
      starsArray.push(<span key={i} className='glyphicon glyphicon-star'> </span>)
    }

  return (
    <div>
    {
      props.reviewContent&&(
      <div className='well margin10'>
        <div >
          <div className='row' >
            content: {reviewContent}
          </div>
          <div className='row' >
            stars: {starsArray.map(star=>(star))}
          </div>
        </div>
      </div>
      )
    }

      <div className="well" >
        <form  className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
            <legend>New Review</legend> 
              <div className="form-group">
                <label className="col-xs-2 control-label">Content</label>
                <div className="col-xs-10">
                  <input
                  value={reviewContent}
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name='reviewContent'
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-2 control-label">Stars</label>
                <div className="col-xs-10">
                  <select value={reviewStars} onChange={handleChange} name='reviewStars'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                    <button
                     type='submit'
                      className="btn btn-success">
                      Submit Review
                    </button>
                </div>
              </div>
              <input type="hidden" name="user" value={user} />
            </fieldset>
        </form>
    </div>
  </div>
  );

}

