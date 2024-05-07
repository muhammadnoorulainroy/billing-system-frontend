import React, { useState, useEffect } from 'react'
import BuyerInfo from './BuyerInfo'
import Loading from '../api_loading/Loading'
import { getSubscriptionData } from '../../api'

export default function Subscriptions () {
  const [loading, setLoading] = useState(true)
  const [subscriptionData, setSubscriptionData] = useState([])

  useEffect(() => {
    getSubscriptionData().then((res) => {
      setSubscriptionData(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className='content container'>
      <div className='card w-100 p-3'>
        <div className='card-body'>
          <h4 className='card-title'>All Subscriptions</h4>
          <hr />
          {loading ? <Loading /> : <BuyerInfo data={subscriptionData} />}
        </div>
      </div>
    </div>
  )
}
