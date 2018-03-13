import React, { Component } from 'react';

import zipCodes from '../../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIdx: 0,
    areaIdx: 0
  }
  onChangeCity = (e) => {
    const cityIdx = e.target.value;

    this.setState({
      cityIdx,
      areaIdx: 0
    });
  }
  onChangeArea = (e) => {
    const areaIdx = e.target.value;

    this.setState({
      areaIdx
    });
  }

  render() {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];

    return (
      <div className="container">
        <div className="row">
          <select className="form-control col-md-5" value={cityIdx} onChange={this.onChangeCity}>
            {zipCodes.map((item, idx) => (
              <option key={item.name} value={idx}>{item.name}</option>
            ))}
          </select>
          <select className="form-control col-md-5" value={areaIdx} onChange={this.onChangeArea}>
            {city.areas.map((item, idx) => (
              <option key={item.name} value={idx}>{item.name}</option>
            ))}
          </select>
          <h3 className="col-md-2">
            {area.zip}
          </h3>
        </div>
      </div>
    );
  }
}

export default RegionSelect;
