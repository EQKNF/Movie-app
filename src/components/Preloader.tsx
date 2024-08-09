import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader flex flex-col">
      <div className="spinner"></div>
      <p className="text-white font-medium text-xl">Loading...</p>
    </div>
  );
};

export default Preloader;
