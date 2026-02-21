import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
    const base =
        "rounded-md px-6 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2";

    const styles =
        variant === "secondary"
            ? "bg-purple-600 text-black hover:bg-purple-700"
            : variant === "tertiary"
            ? "bg-orange-600 text-black hover:bg-orange-700"
            : "bg-green-600 text-black hover:bg-green-700";

return (
    <button
        className={`${base} ${styles} ${className}`}
        {...props}
    />
    );
}