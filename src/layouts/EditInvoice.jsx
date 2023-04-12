import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Input from "../components/Input";
import Button from "../components/Button";

const EditInvoice = () => {
  const params = useParams();
  const { invoice, editInvoice } = useContext(GlobalContext);
  const data = React.useRef(invoice.filter((x) => x.id == params.id));
  const navigate = useNavigate();

 
  const handleChange = React.useCallback(
    (id, value) => {
      data.current[0] = { ...data.current[0], [id]: value };
    },
    [data]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.current);
      editInvoice(data.current[0]);
      alert("Invoice Updated Succesfully");
      navigate("/");
    // };
  };

  const formInputs = [
    {
      label: "Invoice Number",
      id: "invoiceNumber",
      value: data.current[0]?.invoiceNumber,
    },
    {
      label: "Invoice Date",
      id: "invoiceDate",
      type: "date",
      value: data.current[0]?.invoiceDate,
    },
    {
      label: "Customer Name",
      id: "customerName",
      value: data.current[0]?.customerName,
    },
    {
      label: "Product Name",
      id: "productName",
      value: data.current[0]?.productName,
    },
    {
      label: "Product Price",
      id: "productPrice",
      value: data.current[0]?.productPrice,
    },
    {
      label: "Product Quantity",
      id: "productQuantity",
      value: data.current[0]?.productQuantity,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-6/12 flex flex-wrap relative justify-center align-center gap-x-5 h-fit rounded mt-20 p-4 bg-white pb-10"
    >
      <h1 className="text-lg  w-full mb-4 font-light text-center">
        Edit Invoice
      </h1>
      {formInputs.map((x, index) => {
        return (
          <div className="w-80" key={index}>
            {" "}
            <Input
              type={x.type}
              id={x.id}
              label={x.label}
              key={index}
              handleChange={handleChange}
              defaultValue={x.value}
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

export default EditInvoice;
