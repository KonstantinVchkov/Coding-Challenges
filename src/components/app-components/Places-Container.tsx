import { Component } from 'react';
import Place from './Place';

export type Props = {
  id: number;
  place: string;
  desc: string;
  img: string;
};

type State = {
  dataBase: Props[]; 
};

export default class PlacesContainer extends Component<{}, State> {
  state: State = {
    dataBase: []
  }

  componentDidMount(){
    fetch(`http://localhost:5001/places`)
    .then(res => res.json())
    .then(data => {
      this.setState({ dataBase: data });
    })    
  }


  render() {
    console.log(this.state)
    return (
      <div className='PlaceContainer'>
        {this.state.dataBase.map(item => (
          <Place id={item.id} place={item.place} desc={item.desc} img={item.img}/>
        ))}
      </div>
    );
  }
}
