import { faker } from "@faker-js/faker";
import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const initialState = {
  id: faker.datatype.uuid(),
  invoiceNumber: Number,
  invoiceDate: "",
  customerName: "",
  productName: "",
  productPrice: Number,
  productQuantity: Number,
};

const formInputs = [
  {
    label: "Invoice Number",
    id: "invoiceNumber",
  },
  {
    label: "Invoice Date",
    id: "invoiceDate",
    type: "date",
  },
  {
    label: "Customer Name",
    id: "customerName",
  },
  {
    label: "Product Name",
    id: "productName",
  },
  {
    label: "Product Price",
    id: "productPrice",
  },
  {
    label: "Product Quantity",
    id: "productQuantity",
  },
];

const AddInvoice = () => {
  const data = React.useRef(initialState);
  const { addInvoice } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleChange = React.useCallback(
    (id, value) => {
      data.current = { ...data.current, [id]: value };
    },
    [data]
  );

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (
      data.current.invoiceNumber === 0 ||
      data.current.invoiceDate === "" ||
      data.current.customerName === "" ||
      data.current.productName === "" ||
      data.current.productPrice === 0 ||
      data.current.productQuantity === 0
    )
      return alert("Please Fill all the fields");
    addInvoice(data.current);
    alert("Invoice Added Succesfully");
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-6/12 flex flex-wrap relative justify-center align-center gap-x-5 h-fit rounded mt-20 p-4 bg-white pb-10"
    >
      <h1 className="text-lg  w-full mb-4 font-light text-center">
        Add Invoice
      </h1>
      {formInputs.map((x, index) => {
        return (
          <div className="w-80">
            {" "}
            <Input
              type={x.type}
              id={x.id}
              label={x.label}
              key={index}
              handleChange={handleChange}
            />
          </div>
        );
      })}
      <Button
        text="Submit"
        type="submit"
        cN="rounded hover:bg-sky-700 w-fit px-2 text-center mt-4"
      />
    </form>
  );
};

export default AddInvoice;
