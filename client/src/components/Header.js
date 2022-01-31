import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { createBoat } from "../api/boatApi";
import { getAllSwimLanes } from "../api/swimLaneApi";
import { useSwimLaneContext } from "../context/SwimLaneContext";
import { toast } from "react-toastify";

export default function Header() {
  const [_, setSwimLanes] = useSwimLaneContext();
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
  });

  const handleClose = () => {
    setShowForm(false);
    setForm({ name: "" });
  };
  const handleShow = () => setShowForm(true);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      [name]: value,
    });
  };

  const handleSubmitForm = async () => {
    const response = await createBoat(form);
    if (response.status === 201) {
      const response = await getAllSwimLanes();
      setSwimLanes(response);
    } else {
      toast.error(response.data.message);
    }
    handleClose();
  };

  return (
    <div className="mx-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <div>
        <h2>FishFry Tours</h2>
      </div>
      <div>
        {location.pathname === "/" ? (
          <Button variant="success" onClick={() => handleShow()}>
            New Boat
          </Button>
        ) : null}
      </div>

      <Modal show={showForm} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Register a new boat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBoatName">
            <Form.Label>Boat Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter boat name"
              onChange={(e) => handleOnChange(e)}
            />
            <Form.Text
              style={{ color: form.name.length < 9 ? "black" : "red" }}
            >
              Please keep the boat name under 9 characters, current count{" "}
              {form.name.length}
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => handleSubmitForm()}
            disabled={form.name.length >= 9}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
