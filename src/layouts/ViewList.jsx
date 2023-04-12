import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ViewList = () => {
  const { invoice, delInvoice } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onDelete = (id) => {
    delInvoice(id);
  };
  return (
    <div className="lg:w-full flex flex-col relative justify-center align-center  h-fit rounded mt-20 p-4 bg-white pb-10">
      <h1 className="text-lg  w-full mb-4 font-light text-center">
        Invoice List
      </h1>
      {invoice.length === 0 ? (
        <h2 className="w-full text-center">List Currently Empty</h2>
      ) : (
        <main>
          <div className="overflow-x-auto relative h-[calc(100vh-500px)]">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Invoice Number
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Invoice Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Customer Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Product Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Product Quantity
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Product Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Total
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.map((x, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                      >
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.invoiceNumber}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.invoiceDate}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.customerName}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.productName}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.productQuantity}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.productPrice}
                        </td>
                        <td className="max-w-xs break-all py-2 px-6 text-left">
                          {x.productQuantity * x.productPrice}
                        </td>
                        <td className="py-2 px-6 text-left flex flex-wrap">
                          {" "}
                          <Button
                            text="Edit"
                            onClick={() => navigate(`/edit/${x.id}`)}
                            cN="bg-sky-500 text-white m-0 mx-1"
                          />
                          <Button
                            text="Delete"
                            onClick={() => onDelete(x.id)}
                            cN="bg-red-500 text-white m-0 mx-1"
                          />
                        </td>
                      </tr>
                    );
                  })}
                  {/* {task?.map((tsk) => {
                return (
                  <tr
                    key={tsk.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                  >
                    <td className="max-w-xs break-all py-2 px-6 text-left">
                      {tsk.title}
                    </td>
                    <td className="max-w-xs break-all py-2 px-6 text-left">
                      {tsk.description}
                    </td>

                    <td className="max-w-xs break-all py-2 px-6 text-left">
                      {tsk.status ? "Done" : "Pending"}
                    </td>

                    <td className="py-2 px-6 text-left flex flex-wrap">
                      <Button
                        text="Edit"
                        icon={<EditIcon />}
                        onClick={() => navigate(`/edit/${tsk.id}`)}
                        cN="bg-sky-500 text-white m-0 mx-1"
                      />
                      {tsk.status === false ? (
                        <Button
                          text="Mark as Finished"
                          icon={<CheckIcon />}
                          onClick={() => update(tsk, true)}
                          cN="bg-green-500 text-white m-0 mx-1"
                        />
                      ) : (
                        <Button
                          text="Mark as Unfinished"
                          icon={<CloseIcon />}
                          onClick={() => update(tsk, false)}
                          cN="bg-red-500 text-white m-0 mx-1"
                        />
                      )}
                      <Button
                        text="Delete"
                        icon={<DeleteIcon />}
                        onClick={() => remove(tsk.id)}
                        cN="bg-red-500 text-white m-0 mx-1"
                      />
                    </td>
                  </tr>
                );
              })} */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}

      <div className="flex justify-center align-center">
        <Button
          text="Create New"
          onClick={() => navigate("/new")}
          cN="rounded hover:bg-sky-700 w-fit px-2 text-center mt-4"
        />
      </div>
    </div>
  );
};

export default ViewList;
