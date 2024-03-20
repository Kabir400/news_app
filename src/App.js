import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Spnier from "./components/Spnier";
import Hamburgar from "./components/Hamburgar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      totalpage: 0,
      artical: [],
      loading: true,
      page: 1,
      isnewshandler: false,
      catagory: "Headlines",
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=215d3543d96c4ab095c1e08ca8c3ed03&page=1&pagesize=6";
    this.setState({ loading: false });
    let data = (await fetch(url)).json();
    data.then((res) => {
      this.setState({
        artical: res.articles,
        totalpage: res.totalResults,
        loading: true,
      });
    });
  }

  next_btn = async (a = "") => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&${a}apiKey=215d3543d96c4ab095c1e08ca8c3ed03&page=${
      this.state.page + 1
    }&pagesize=6`;
    this.setState({ loading: false });
    let data = (await fetch(url)).json();
    data.then((res) => {
      this.setState({ artical: res.articles, loading: true });
    });
    this.setState({
      page: this.state.page + 1,
    });
  };
  previous_btn = async (a = "") => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&${a}apiKey=215d3543d96c4ab095c1e08ca8c3ed03&page=${
      this.state.page - 1
    }&pagesize=6`;
    this.setState({ loading: false });
    let data = (await fetch(url)).json();
    data.then((res) => {
      this.setState({ artical: res.articles, loading: true });
    });
    this.setState({
      page: this.state.page - 1,
    });
  };
  newshandler = async (e) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${e}&apiKey=215d3543d96c4ab095c1e08ca8c3ed03&page=1&pagesize=6`;
    this.setState({ loading: false });
    let data = (await fetch(url)).json();
    data.then((res) => {
      this.setState({
        artical: res.articles,
        totalpage: res.totalResults,
        loading: true,
        isnewshandler: true,
        catagory: `${e}`,
      });
    });
  };

  render() {
    return (
      <div>
        <Navbar newshandler={this.newshandler} />
        <Hamburgar newshandler={this.newshandler} />
        {this.state.loading ? "" : <Spnier />}
        <div className="justify-content-center gap-3 row mt-5">
          {this.state.loading ? (
            <center>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#565050",
                  marginTop: "10px",
                }}
              >
                NewsFlash-{this.state.catagory}
              </h2>
            </center>
          ) : (
            ""
          )}
          {this.state.loading
            ? this.state.artical.map((e) => {
                return (
                  <News
                    title={e.title ? e.title : "..."}
                    description={e.description ? e.description : "..."}
                    time={e.publishedAt ? e.publishedAt : ""}
                    source={e.source.name ? e.source.name : ""}
                    imgurl={
                      !e.urlToImage
                        ? "https://thehill.com/wp-content/uploads/sites/2/2023/04/GettyImages-939238396.jpg?w=1280"
                        : e.urlToImage
                    }
                    key={e.url}
                    url={e.url}
                  />
                );
              })
            : ""}
        </div>
        {this.state.loading ? (
          <div className="d-flex justify-content-between container mt-5 gap-5">
            <button
              type="button"
              className="btn btn-dark"
              onClick={
                this.state.isnewshandler
                  ? () => {
                      this.previous_btn(`category=${this.state.catagory}&`);
                    }
                  : this.previous_btn
              }
              disabled={this.state.page <= 1}
            >
              <span className="fs-6">&laquo;</span> Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={
                this.state.isnewshandler
                  ? () => {
                      this.next_btn(`category=${this.state.catagory}&`);
                    }
                  : this.next_btn
              }
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalpage / 6)
              }
            >
              Next <span className="fs-6">&raquo;</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
