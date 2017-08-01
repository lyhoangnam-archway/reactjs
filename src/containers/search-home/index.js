import React, { Component } from "react";
import SearchBox from "../../components/search-box";
import ImageList from "../../components/image-list";
import Loading from "../../components/loading";
import Api from "../../api";
import { checkScrollToBottom } from "../../utils/browser";
import "./style.scss";

export default class SearchHome extends Component {
  static propTypes = {};

  state = {
    search: "",
    photos: [],
    isLoading: false,
    pagination: {
      total_pages: 0,
      page: 0
    }
  };

  onChangeSearch(search) {
    this.setState(
      {
        search: search,
        photos: []
      },
      () => {
        this.getPhotos(1);
      }
    );
  }

  getPhotos(page = 1) {
    this.setState({
      isLoading: true
    });
    Api.getPhotos({ search: this.state.search, page }).then(({ data }) => {
      let photos = [];
      if (page > 1) {
        photos = [...this.state.photos, ...data.photos];
      } else {
        photos = data.photos;
      }

      this.setState({
        isLoading: false,
        photos: photos,
        pagination: {
          page: page,
          total_pages: data.total_pages
        }
      });
    });
  }

  handleScroll() {
    if (checkScrollToBottom(100) && !this.state.isLoading) {
      this.getPhotos(this.state.pagination.page + 1);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  render() {
    return (
      <div className="searchHome">
        <div className="container">
          <SearchBox onSubmit={this.onChangeSearch.bind(this)} />
          <ImageList data={this.state.photos} />
          {this.state.isLoading && <Loading />}
        </div>
      </div>
    );
  }
}
