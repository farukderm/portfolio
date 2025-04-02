import {
  FaAddressBook,
  FaAddressCard,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500
         to-emerald-900 flex items-center justify-center flex-col"
        >
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Phone
          </h1>
          <h1 className="text-base sm:text-lg text-white opacity-70">
            +123456789
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500
         to-emerald-900 flex items-center justify-center flex-col"
        >
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Email Adress
          </h1>
          <h1 className="text-base sm:text-lg text-white opacity-70">
            farukderm@gmail.com
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500
         to-emerald-900 flex items-center justify-center flex-col"
        >
          <FaAddressCard className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Adress
          </h1>
          <h1 className="text-base sm:text-lg text-white opacity-70">
            Soma/MANİSA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
