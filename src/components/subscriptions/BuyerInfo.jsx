import React from 'react'
import FeatureTable from '../plans/detailed_plans/FeatureTable'
import './BuyerInfo.css'
export default function BuyerInfo (props) {
  return (
    <div>
      {props.data.map((subscription) => {
        return (
          <div key={subscription.id}>
            <div className='textbox'>
              <h5 className='align-left'>{subscription.plan.name}</h5>
              <h5 className='align-right'>{subscription.buyer.name}</h5>
            </div>
            <div div className='textbox'>
              <h5 className='align-left'>
                Price: US$ {subscription.plan.monthly_fee}/mo
              </h5>
              <h5 className='align-right'>{subscription.buyer.email}</h5>
            </div>
            <FeatureTable data={subscription.plan} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}
