import React, { Component } from 'react';

class Coins extends Component {
  listCoint() {
    const sortCoint = this.props.coins.sort((a, b) => {
      if (+a.marketCapUsd < +b.marketCapUsd) {
        return 1;
      }
      if (+a.marketCapUsd > +b.marketCapUsd) {
        return -1;
      }
      return 0;
    });
    sortCoint.length = 15;
    
    return sortCoint.map(item => {
      const price = +item.priceUsd;
      return <tr key={item.id}>
          <td>{item.name}</td>
        <td>$ {price.toFixed(6)}</td>
          <td className="mobile__td-hidden">{item.marketCapUsd}</td>
          <td className="mobile__td-hidden">{item.volumeUsd24Hr}</td>
        </tr>;
    });
  }

  render() {
    if (!this.props.coins) {
      return null;
    }
    return <tbody className="table__body">{this.listCoint()}</tbody>;
  }
}

export default Coins;
