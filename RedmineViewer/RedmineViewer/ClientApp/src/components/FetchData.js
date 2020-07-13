import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { issues: [], loading: true };
  }

  componentDidMount() {
    this.GetAllIssues();
  }

  static renderIssuesTable(issues) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
          <th>Id</th>
            <th>Project</th>
            <th>Tracker</th>
            <th>Status</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue =>
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.project}</td>
              <td>{issue.tracker}</td>
              <td>{issue.status}</td>
              <td>{issue.subject}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderIssuesTable(this.state.issues);

    return (
      <div>
        <h1 id="tabelLabel" >List of Issues</h1>
        <p>This component demonstrates list of all issues reported by you.</p>
        {contents}
      </div>
    );
  }

  async GetAllIssues() {
    const response = await fetch('RedmineViewer');
    const data = await response.json();
    this.setState({ issues: data, loading: false });
  }
}
