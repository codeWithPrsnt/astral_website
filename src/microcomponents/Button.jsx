import Link from "next/link";

const Button = ({
  children,
  href,
  textColor = "text-[#0060AF]",
  className,
  style,
}) => {
  return (
    <Link
      href={href}
      style={style}
      className={`${textColor} ${className} !bg-white w-fit p-2 px-4 rounded-full`}
    >
      {children}
    </Link>
  );
};

export default Button;
