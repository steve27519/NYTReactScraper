import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      startYear: "",
      endYear: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.props.getNewArticles(this.state.query);
    this.setState({query:""});

  }

  render() {
    return <div>
        <form>
          <div className="form-group">
            <label>Search Query</label>
            <input type="text" className="form-control" id="query" name="query" aria-describedby="query" placeholder="Search Term" value={this.state.query} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input type="text" className="form-control" id="start-year" placeholder="Start Year" value={this.state.startYear} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input type="text" className="form-control" id="end-year" placeholder="End Year" value={this.state.endYear} onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmitButton}>
            Submit
          </button>
        </form>
      </div>;
  }
}

export default SearchForm;