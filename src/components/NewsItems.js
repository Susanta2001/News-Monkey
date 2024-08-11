import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
                       {source}</span>
                    <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">{`By ${author?author:"Unknown"} published at ${new Date(date).toGMTString()}`}</small></p>
                        <a href={newsUrl} className="btn btn-dark btn-sm" target='_blank' rel="noopener noreferrer">Read More</a>

                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;
