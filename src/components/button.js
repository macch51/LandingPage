
function Button({text, color}) {
  return (
    <button className={`bg-${color} hover:bg-secondary text-white p-2 rounded`}>
      {text}
    </button>
  );
}

export default Button;