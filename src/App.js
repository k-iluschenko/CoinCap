import React, { Component } from 'react';
import Coins from './Coins';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCoins: undefined,
    };
  }
  componentWillMount(){
    this.getCoints();
  }

  componentDidMount() {
    setInterval(() => {
      this.getCoints();
    }, 5000);
  }

  getCoints() {
    fetch('https://api.coincap.io/v2/assets?limit=2000')
      .then(res => (res.status === 200 ? res : new Error(res)))
      .then(response => response.json())
      .then(response => {
        this.setState({ allCoins: response.data });
      })
      .catch (error => console.log('error', error));
  }

  render() {
    if (!this.state.allCoins) {
      return null;
    }
    return (
      <div className="table__scroll ">
        <table className="table__main">
          <thead>
            <tr className="table__head">
              <th>
                <span className="head__title">Наименование</span>
              </th>
              <th>
                <span className="head__title">Стоимость</span>
              </th>
              <th className="mobile__td-hidden">
                <span className="head__title">Рыночная капитализация</span>
              </th>
              <th className="mobile__td-hidden">
                <span className="head__title">Суточный объем </span>
              </th>
            </tr>
          </thead>
          <Coins coins={this.state.allCoins}/>
        </table>
      </div>
    );
  }
}

export default App;
