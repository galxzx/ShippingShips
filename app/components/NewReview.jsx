import React from 'react';

export default class NewReview extends React.Component {

    constructor(props) {
      super(props)
      this.state = {reviewContent: '' ,
                    reviewStars: undefined
                    }
      this.handleChange=props.handleChange.bind(this)
      this.handleSubmit=props.handleSubmit.bind(this)
    }



  render() {
  const props = this.props
  let starsArray = []
    for(var i = 0; i<this.state.reviewStars; i++) {
      starsArray.push(<span key={i} className='glyphicon glyphicon-star'> </span>)
   }

  console.log('nrprops',props)
  return (
    <div>

    <div className='well margin10'>
        
        <div >
      <div className='row' >
      content: {this.state.reviewContent}
      </div>
      <div className='row' >
      stars: {starsArray.map(star=>(star))}
      </div>
   
        </div>
        
          </div>



    <div className="well" >
      <form onSubmit={e=>{this.handleSubmit(e)}} className="form-horizontal" >
        <fieldset>
          <legend>New Review</legend> 
          <div className="form-group">
            <label className="col-xs-2 control-label">Content</label>
            <div className="col-xs-10">
              <input
                value={this.state.reviewContent}
                onChange={e=>this.handleChange(e)}
                className="form-control"
                type="text"
                name='reviewContent'
              />
            </div>
          </div>
           <div className="form-group">
            <label className="col-xs-2 control-label">Stars</label>
            <div className="col-xs-10">
              <input
                value={this.state.reviewStars}
                onChange={e=>this.handleChange(e)}
                className="form-control"
                type="text"
                name='reviewStars'
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success">
                Submit Review
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    </div>
  );

}

}