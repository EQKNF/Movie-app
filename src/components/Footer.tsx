import logo from "./../assets/images/logo2.png";

function Footer() {
  const footerContent = [
    { name: "Privacy statement" },
    { name: "Disnot Terms of Service" },
    { name: "Guidelines for cookies" },
    { name: "UK & EU privacy policy" },
    { name: "Subscription agreement" },
    { name: "Help" },
    { name: "Supported devices" },
    { name: "About us" },
    { name: "Interest-based advertising" },
    { name: "Manage privacy settings" },
  ];

  return (
    <div className="w-full h-[176px] bg-[#0e0b14] mx-0 my-auto ">
      <div className="relative pt-5 pb-2 flex justify-center">
        <img src={logo} alt="Disnot logo" className="w-[160px]" />
      </div>
      <div className="relative flex justify-center flex-wrap bg-inherit">
        {footerContent.map((item) => (
          <a
            href="#"
            key={"footer" + item.name}
            className="text-white px-3 py-2 text-xs font-medium transition-all duration-150 ease-in-out hover:text-gray-300"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="bg-inherit mt-1 ">
        <h2 className="flex justify-center px-3 py-3  text-white text-xs">
          © Disnot. No rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
