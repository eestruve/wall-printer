export default function LogoIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Google Material Symbols "diamond" icon */}
      <path d="M480-80 80-480l400-400 400 400L480-80Zm0-145 255-255-255-255-255 255 255 255Z" />
    </svg>
  );
}
