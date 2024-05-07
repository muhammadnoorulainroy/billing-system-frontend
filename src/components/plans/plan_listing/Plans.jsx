import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePlanData, getPlanData } from "../../../api";
import Loading from "../../api_loading/Loading";
import TableData from "./TableData";

export default function Plans() {
  const [planData, setPlanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPlanData().then((res) => {
      const { data: plans } = res.data;
      setPlanData(plans);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure to delete the plan? This operation cannot be undo."
      )
    ) {
      deletePlanData(id).then(() => {
        window.alert("Plan has been deleted successfully");
        setPlanData(planData.filter((plan) => plan.id !== id));
      });
    }
  };

  return (
    <div className="container content">
      <div className="card w-100 p-3">
        <div className="card-body">
          <h4 className="card-title">All Plans</h4>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-success" to="/create-plan">
              Create New Plan
            </Link>
          </div>
          <hr />
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : (
              <TableData
                tableData={planData}
                handleDelete={handleDelete}
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
