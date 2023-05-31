import React from "react";
import ItemForm from "./ItemForm";

function FormComponent() {
  return (
    <div class="class-form">
      <ItemForm label="First"></ItemForm>
      <ItemForm label="Last"></ItemForm>
      <ItemForm label="Phone"></ItemForm>
      <ItemForm label="Location"></ItemForm>
      {/* <label>First</label>
      <input />

      <label>Last</label>
      <input />

      <label>Email</label>
      <input />

      <label>Phone</label>
      <input />

      <label>Location</label>
      <input />

      <label>Location</label>
      <input />
      <label>Location</label>
      <input />
      <label>Location</label>
      <input /> */}

      <button id="button">Create</button>
    </div>
  );
}

export default FormComponent;
