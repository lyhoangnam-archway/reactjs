import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default class SearchBox extends Component {
  static propTypes = {
	  onSubmit: PropTypes.func
  };

  state = {
    search: ""
  };

  handleChangeSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit(e){
  	if(e.keyCode === 13){
  		this.props.onSubmit(this.state.search);
	  }
  }

  render() {
    return (
      <div className="searchForm">
        <h1 className="searchForm__title">Tìm kiếm hình ảnh</h1>
        <input
          type="text"
          className="form-control searchForm__input"
          placeholder="Sky, nature, ..."
          onChange={this.handleChangeSearch.bind(this)}
          onKeyUp={this.handleSubmit.bind(this)}
          value={this.state.search}
        />
      </div>
    );
  }
}
