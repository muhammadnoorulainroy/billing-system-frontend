import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Features from './Features'

export default function PlanForm (props) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          maxLength={20}
          minLength={3}
          required
          placeholder='Enter plan name'
          onChange={(e) => {
            props.setName(e.target.value)
          }}
        />
      </Form.Group>
      <Features
        featureIDs={props.featureIDs}
        setFeatureIDs={props.setFeatureIDs}
        features={props.features}
        setFeatures={props.setFeatures}
      />
      <Button variant='primary' type='submit' onClick={props.handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}
