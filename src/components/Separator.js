export default function Separator() {
  return (
    <div className="flex items-center justify-center gap-4 py-12">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[var(--accent)]"></div>
      <div className="text-[var(--primary)] text-2xl">
        <svg 
          viewBox="0 0 100 100" 
          className="w-10 h-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple Mandala/Flower design as separator */}
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[var(--accent)]"></div>
    </div>
  );
}
