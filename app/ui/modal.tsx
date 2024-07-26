"use client";

import { Fragment, useContext } from "react";
import { ModalContext } from "./provider";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Modal = () => {
   const { modal, setModal } = useContext(ModalContext);

   return (
      <Fragment>
         {modal && (
            <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-neutral-900/50 px-4" onClick={() => setModal(!modal)}>
               <div className="relative bg-gray-700 text-white p-4 md:p-6 rounded-md shadow z-50">
                  <ExclamationTriangleIcon className="w-12 block mx-auto text-yellow-500" />
                  <p className="md:text-lg text-center mt-2">Sorry, the menu is currently unavailable</p>
               </div>
            </div>
         )}
      </Fragment>
   );
};

export default Modal;
