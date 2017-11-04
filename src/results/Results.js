import React, { Component } from 'react';
import { Table, Container } from 'semantic-ui-react';
import style from './results.css'

function appendComma(array) {
  if(array == 'Startups and Innovation'){
    return 'Startups and Innovation'
  }

  var sliced = array.map((obj) => {
    return obj.slice(9)
  })

  return sliced.join(', ')
}

class Results extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <Container>
        <br/>
        <Table
          >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Agency</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Deadline</Table.HeaderCell>
              <Table.HeaderCell>Estimated Grant Value</Table.HeaderCell>
              <Table.HeaderCell>Website</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.results.map((obj) => {
              return (
                <Table.Row>
                  <Table.Cell>
                    {(obj['Title'])}
                  </Table.Cell>
                  <Table.Cell>
                    {(obj['Agency'])}
                  </Table.Cell>
                  <Table.Cell>
                    {appendComma(obj['Category'])}
                  </Table.Cell>
                  <Table.Cell>
                    {(obj['Deadline'])}
                  </Table.Cell>
                  <Table.Cell>
                    {(obj['Estimated Grant Value'])}
                  </Table.Cell>
                  <Table.Cell>
                    <a href={'http://' + (obj['From where'])} target="_blank" >{(obj['From where'])}</a>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Results;
