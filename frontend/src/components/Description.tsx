import React from "react";

const Description: React.FC = () => {
  return (
    <section className=" py-12 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Most homes could benefit with Askan
        </h2>
        <p className="text-gray-100 text-lg mb-6">
          More than half of homes still rely on manual meter readings, which can lead to delays, errors, and unexpected bills.
          Askan offers a smarter alternative — our automatic reading devices instantly track energy use with precision and reliability.
        </p>
        <p className="text-gray-100 text-lg">
          If your current system still relies on manual readings — for electricity, gas, or water — switching to Askan can make your home smarter,
          more efficient, and cost-effective.
        </p>
      </div>
    </section>
  );
};

export default Description;
