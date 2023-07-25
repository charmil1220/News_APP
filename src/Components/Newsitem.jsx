import React from 'react'

const Newsitem =(props)=>{
  
   
    let {title , description, imageUrl,newsurl,author,date,source} = props;
    return (
      <div> 
        <div className="card"  >
            <span className="position-absolute top-0   translate-middle badge badge-pill badge-danger bg-danger" style={{left:"90%",zIndex:"1"}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {title}  </h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'>By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} target={'_blank'} className="btn btn-sm btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default Newsitem
