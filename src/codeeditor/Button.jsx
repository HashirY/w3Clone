const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        style={{
          maxWidth: "140px",
          minWidth: "80px",
          // height: "30px",
          marginRight: "5px",
        }}
        onClick={onClick}
        className="bg-black p-2 rounded-xl "
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
