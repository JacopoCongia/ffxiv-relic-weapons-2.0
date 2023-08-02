import classNames from "classnames";

function Button({ children, check, uncheck, ...rest }) {
  const defaultClassNames = classNames(
    "px-5 py-2 rounded-[4px] hover:opacity-80 text-[1rem]",
    { "bg-green-700": check, "bg-red-900": uncheck }
  );

  return (
    <button
      {...rest}
      className={defaultClassNames}
    >
      {children}
    </button>
  );
}

export default Button;
