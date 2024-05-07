import React, { useEffect, useState } from 'react'
import { getPlanData } from '../../../api'
import Loading from '../../api_loading/Loading'
import PlanCard from './PlanCard'

export default function DetailedPlan () {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPlanData().then((res) => {
      setPlans(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className='content container'>
      <div className='card w-100 p-3'>
        <div className='card-body'>
          <h4 className='card-title'>Detailed Plans</h4>
          <hr />
          {loading ? <Loading /> : <PlanCard data={plans} />}
        </div>
      </div>
    </div>
  )
}
