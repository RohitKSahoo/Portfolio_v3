export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-900 bg-[#050505] text-center">
      <p className="text-gray-500 text-sm font-mono">
        © {new Date().getFullYear()} Rohit Kumar Sahoo. All rights reserved.
      </p>
    </footer>
  );
}