import React from 'react'
import FeatureTable from './FeatureTable'

export default function PlanCard (props) {
  return (
    <div>
      {props.data.map((plan) => {
        return (
          <div key={plan.id}>
            <h5>{plan.name}</h5>
            <h5>Price: US$ {plan.monthly_fee}/mo</h5>
            <FeatureTable data={plan} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}
