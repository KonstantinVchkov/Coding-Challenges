import  { Component } from 'react';
import { Props } from './Places-Container';

type PlacesProps = Props;

export default class Place extends Component<PlacesProps> {
  render() {
    return (
<div className='card' key={this.props.id}>
        <div className="text-card">
        <h2>{this.props.place}</h2>
            <p>{this.props.desc}</p>
        </div>
            <img src={this.props.img} alt="place-img" />
          </div>
    );
  }
}
