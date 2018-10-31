import React, {Component} from 'react';

const Standing5 = props =>{
  //console.log(scorer);
  return (
    <tr>
    <td>{props.item.position}</td>     
    <td>{props.item.team.name}</td>
    <td>{props.item.playedGames}</td>
    <td>{props.item.won}</td>
    <td>{props.item.draw}</td>
    <td>{props.item.lost}</td>
    <td>{props.item.goalsFor}</td>
    <td>{props.item.goalsAgainst}</td>
    <td>{props.item.goalDifference}</td>
    <td>{props.item.points}</td>
  </tr>
  );

};
export default Standing5;
