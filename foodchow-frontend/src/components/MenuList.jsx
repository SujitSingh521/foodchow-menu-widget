import MenuCard from "./MenuCard";

function MenuList({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="w-3/5 p-4">
        <p className="text-gray-500">Loading menu...</p>
      </div>
    );
  }
  return (
    <div className="w-3/5 p-4 overflow-y-auto">
      {items.map((category, i) => (
        <div key={i} className="mb-6">
          <h2 className="font-bold text-xl mb-3">{category.CategoryName}</h2>

          {category.ItemList && category.ItemList.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {category.ItemList.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No items in this category.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuList;
