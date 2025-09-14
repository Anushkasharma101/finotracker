import React from "react";
import { ShieldCheck, CreditCard } from "lucide-react";

const SpecialFeatures = () => {
  return (
    <section className="w-full h-full bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        <div>
          <p className="text-indigo-600 font-medium">Special features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Finance management <br /> is much easier now.
          </h2>
          <div className="mt-8 flex items-start space-x-4">
            <div className="flex-shrink-0 text-orange-500">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-600">
                Secured transaction
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Your data is protected with top-level security, ensuring safe and reliable payments. <br/>
                Enjoy peace of mind knowing every transaction is fully encrypted.
              </p>
            </div>
          </div>

          
          <div className="mt-6 flex items-start space-x-4">
            <div className="flex-shrink-0 text-gray-800">
              <CreditCard size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Direct bank connection
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Easily connect your bank accounts for real-time tracking and insights.<br/> No manual entry, just smooth and secure syncing.
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center w-[100%] h-full">
          <img
            src="/Assets/specialfeaturesImage.jpg"
            alt="Finance App"
            className="w-[320px] md:w-[380px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
