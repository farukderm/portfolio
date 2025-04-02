const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <div>Logo</div>
      </div>
      <div
        className="flex items-center flex-wrap
       justify-center space-x-10 space-y-4 text-white font-bold"
      >
        <div>Home.</div>
        <div>Services.</div>
        <div>Project.</div>
        <div>Contact.</div>
      </div>
      <p className="text-white opacity-60 mt-6 text-center">
        2025 All Rights Reserved by
        FarukDerm
      </p>
    </div>
  );
};

export default Footer;
