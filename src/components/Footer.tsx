const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-white font-bold mt-6">
      @alfism1 - {currentYear}
    </div>
  );
};

export default Footer;
