export default function MenuCard({ item }) {
  return (
    <div className="flex flex-col md:flex-row bg-white justify-between items-center py-5 px-4 md:px-6 border-b border-gray-200">
      
      {/* Left: Name & Price */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-[700] text-gray-900">
          {item?.ItemName || "Unnamed Dish"}
        </h3>
        <p className="text-base font-semibold text-gray-900 mt-1">
          Rs.{parseFloat(item?.Price || 0).toFixed(2)}
        </p>
      </div>

      {/* Right: Add Button */}
      <button className="mt-4 md:mt-0 px-5 py-1.5 border border-gray-900 text-gray-900 rounded-full text-sm hover:bg-gray-900 hover:text-white transition-all duration-200">
        Add
      </button>
    </div>
  );
}
