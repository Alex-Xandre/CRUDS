import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import AddInvoice from "./layouts/AddInvoce";
import ViewList from "./layouts/ViewList";
import EditInvoice from "./layouts/EditInvoice";

export const Routess = [
  {
    Path: "/",
    Element: ViewList,
  },
  {
    Path: "/new",
    Element: AddInvoice,
  },
  {
    Path: "/edit/:id",
    Element: EditInvoice,
  },
];
export default function App() {
  return (
    <GlobalProvider>
      <div className="w-screen flex justify-center align-center h-screen shadow-md bg-slate-50 ">
        <Routes>
          {Routess.map((rts, index) => {
            return (
              <Route key={index} path={rts.Path} element={<rts.Element />} />
            );
          })}
        </Routes>
      </div>
    </GlobalProvider>
  );
}
