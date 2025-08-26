import Image from "next/image";
import img from "/public/Copilot_20250826_120950-removebg-preview.png"; // ✅ correct path

export default function Logo({ ...rest }) {
  return (
    <Image
      src={img}
      alt="Logo"
      width={60} // set width
      height={60} // set height
      {...rest}
    />
  );
}
