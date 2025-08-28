import img from "/public/Copilot_20250826_120950-removebg-preview.png";

export default function Logo({ ...rest }) {
  return (
    <img
      src={img.src}  // 👈 use .src
      alt="Logo"
      width={60}
      height={60}
      {...rest}
    />
  );
}
