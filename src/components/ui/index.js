export const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-[var(--card)] rounded-2xl shadow-xl overflow-hidden border border-[var(--accent)]/20 ${className}`}>
      {children}
    </div>
  );
};

export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:opacity-90",
    secondary: "bg-[var(--accent)] text-[var(--background)] hover:opacity-90",
    outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
  };

  return (
    <button
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
