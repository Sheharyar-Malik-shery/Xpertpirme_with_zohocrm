// components/Toast.tsx
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  duration?: number; // in ms, default 4000
  onClose: () => void;
}

export default function Toast({ message, duration = 4000, onClose }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 300); // wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all duration-300 ease-in-out transform ${
        show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-[#f29d28] text-white px-5 py-3 rounded shadow-lg font-medium min-w-[200px]">
        {message}
      </div>
    </div>
  );
}
