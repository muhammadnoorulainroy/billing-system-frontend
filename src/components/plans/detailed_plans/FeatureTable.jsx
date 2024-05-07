import React from 'react'

export default function FeatureTable (props) {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='container'>
        <p className='d-flex justify-content-center'>Features</p>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit price</th>
                <th>Max Unit Limit</th>
                {Object.prototype.hasOwnProperty.call(props.data.features[0], 'usage') ? <th>Usage</th> : ''}
              </tr>
            </thead>
            <tbody>
              {props.data.features.map((feature) => {
                return (
                  <tr key={feature.id}>
                    <td>{feature.name}</td>
                    <td>{feature.unit_price}</td>
                    <td>{feature.max_unit_limit}</td>
                    {Object.prototype.hasOwnProperty.call(props.data.features[0], 'usage') ? <td>{feature.usage.usage}</td> : ''}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
