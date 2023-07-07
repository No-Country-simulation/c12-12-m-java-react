import React from "react";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

function PaymentMethods() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Payment Methods</h3>
      <div className="flex flex-wrap md:flex-row gap-2 md:gap-4">
        <a
          href="https://www.mastercard.com.pe/es-pe.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaCcMastercard size={45} />
        </a>
        <a
          href="https://www.visa.com.pe/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaCcVisa size={45} />
        </a>
        <a
          href="https://www.paypal.com/pe/home"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaCcPaypal size={45} />
        </a>
      </div>
    </div>
  );
}

export default PaymentMethods;
