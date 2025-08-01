// "use client";
//
// import { signOut } from "next-auth/react";
//
// export default function SignOutButton() {
//   return <button onClick={() => signOut({ callbackUrl: "/ " })}>logout</button>;
// }
//

"use client";

import { signOut } from "next-auth/react";

interface SignOutButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function SignOutButton({
  className,
  onClick,
}: SignOutButtonProps) {
  const handleClick = () => {
    // Jika ada fungsi onClick dari props, jalankan dulu
    if (onClick) {
      onClick();
    }
    // Kemudian jalankan signOut
    signOut({ callbackUrl: "/" });
  };

  return (
    <button onClick={handleClick} className={className}>
      Logout
    </button>
  );
}
