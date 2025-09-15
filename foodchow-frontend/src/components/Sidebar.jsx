export function Sidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="w-full lg:w-[28%] ml-0 lg:ml-9 p-4 bg-white rounded-lg shadow-md border border-gray-200 sticky top-24 h-[70vh] overflow-auto">
      <h2
        className="font-bold text-lg mb-4 pb-2"
        style={{
          color: "var(--dynamic-color)",
          borderBottom: "1px dashed rgb(204, 204, 204)",
        }}
      >
        CATEGORIES
      </h2>

      {/* Category list */}
      <ul className="space-y-1">
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`px-4 py-3 rounded cursor-pointer transition-all duration-200 ${
              activeCategory === cat
                ? "bg-black text-white font-semibold"
                : "hover:bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
