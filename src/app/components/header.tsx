import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={160}
        height={30}
        objectFit="contain"
      />
    </div>
  );
};
