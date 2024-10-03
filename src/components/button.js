function Button({ text, bgColor, textColor, radius, width, height , size, fontFamily, padding, weight}) {
  return (
    <button className={`${bgColor} ${textColor} p-2 ${radius} ${width} ${height} ${size} ${fontFamily} ${padding} ${weight} hover:shadow-lg`}>
      {text}
    </button>
  );
}

export default Button;
