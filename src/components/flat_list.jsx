import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
      <div className='flat-list'>
        {
          this.props.flats.map((flat)=> {
            return (
            <Flat
              name={flat.name}
              key={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
              lat={flat.lng}
              lng={flat.lat}/>
            )
          })
        }
      </div>
    );
  }
}

export default FlatList;
