// components/Loader.tsx
export default function Loader() {
  return (
   <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/40 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-[#f29d28] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
