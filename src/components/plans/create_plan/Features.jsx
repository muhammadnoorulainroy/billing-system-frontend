import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { getFeatureData } from "../../../api";

export default function Features(props) {
  useEffect(() => {
    getFeatureData().then((res) => {
      props.setFeatures(res.data);
    });
  }, [props]);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) props.setFeatureIDs([...props.featureIDs, value]);
    else props.setFeatureIDs(props.featureIDs.filter(e => e !== value));
  };

  return (
    <>
      <p>Please select the features you want to include in the plan</p>
      <Form.Group className="mb-3 d-flex flex-row">
        {props.features.map((feature) => {
          return (
            <Form.Check
              className="m-1"
              key={feature.id}
              type="checkbox"
              label={feature.name}
              value={feature.id}
              name={feature.name}
              onChange={handleCheckbox}
            />
          );
        })}
      </Form.Group>
    </>
  );
}
