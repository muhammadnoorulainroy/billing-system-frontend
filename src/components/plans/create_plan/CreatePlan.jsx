import React, { useState } from 'react'
import { postPlanData } from '../../../api'
import Errors from './Errors'
import { useNavigate } from 'react-router-dom'
import CreateForm from './PlanForm'

export default function CreatePlan () {
  const [name, setName] = useState('')
  const [featureIDs, setFeatureIDs] = useState([])
  const [features, setFeatures] = useState([])
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    postPlanData(name, featureIDs)
      .then(() => {
        window.alert('Plan has been created successfully')
        navigate('/', { replace: true })
      })
      .catch((error) => {
        setErrors(error.response.data)
      })
  }
  return (
    <div className='content container'>
      <div className='card w-100 p-3'>
        <div className='card-body'>
          <h4 className='card-title'>Create Plan</h4>
          <hr />
          <CreateForm
            featureIDs={featureIDs}
            setFeatureIDs={setFeatureIDs}
            features={features}
            setFeatures={setFeatures}
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
          />
          {errors.length ? <Errors err={errors} /> : ''}
        </div>
      </div>
    </div>
  )
}
