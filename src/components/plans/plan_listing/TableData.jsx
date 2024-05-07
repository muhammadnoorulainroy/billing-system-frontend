import { useState } from "react";
import PlanModal from "../show_plan/PlanModal"

export default function TableData (props) {
  const [plan, setPlan] = useState({})
  const handleShow=(plan)=>{
    setPlan(plan);
    props.handleShow();
  }
  const tableData = props.tableData.map((plan) => {
    return (
      <tr key={plan.id}>
        <td>{plan.name}</td>
        <td>{plan.monthly_fee} USD</td>
        <td><button className="btn btn-primary" onClick={()=>handleShow(plan)}>View</button></td>
        <td><button className='btn btn-danger' onClick={() => props.handleDelete(plan.id)}>Delete</button></td>
      </tr>
    )
  })

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Monthly Charges</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
      <PlanModal plan={plan} show={props.show} onClose={props.handleClose} />
    </table>
  )
}
