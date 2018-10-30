import React, {Component} from 'react';
import { Table, Container } from 'reactstrap';


const Table1 = props =>{
  const scorer = props.item;
  console.log(scorer);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Club</th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.item.scorers.player.name}</td>
          <td>{props.item.team.name}</td>
          <td>{props.item.numberOfGoals}</td>
        </tr>
      </tbody>
    </Table>
  );

};
export default Table1;
