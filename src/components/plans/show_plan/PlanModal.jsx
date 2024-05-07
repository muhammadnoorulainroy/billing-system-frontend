import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FeatureTable from '../detailed_plans/FeatureTable'
export default function PlanModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.plan.name} | US$ {props.plan.monthly_fee}/mo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <FeatureTable data={props.plan} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
