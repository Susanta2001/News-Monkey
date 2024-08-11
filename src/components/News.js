import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      articlesPerPage: 6,
      loading: true,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  fetchArticles = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const { country, category, apiKey } = this.props;
    const { currentPage, articlesPerPage } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${articlesPerPage}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  fetchMoreData = async () => {
    this.setState({ currentPage: this.state.currentPage + 1, loading: true });
    const { country, category, apiKey } = this.props;
    const { currentPage, articlesPerPage } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${currentPage + 1}&pageSize=${articlesPerPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    }));
  };

  render() {
    const { articles, loading } = this.state;
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 60) : "No title is available"}
                    description={element.description ? element.description.slice(0, 80) : "No description is available"}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
