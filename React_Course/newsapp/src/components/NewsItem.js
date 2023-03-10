import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style ={
            {display:`felx`,
            justifyContent:`flex-end`,
            position:`absolute`,
            right:`0`}
          }>

          
        <span className=" badge rounded-pill bg-danger" >
                {source}                
              </span>
        </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.livemint.com/img/2023/02/22/600x338/bses_1666573590055_1677110262404_1677110262404.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
