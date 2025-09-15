import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Cart from "./components/Cart";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import { fetchMenuData } from "./api/fetchMenuData";
import DealCard from "./components/DealCard";

// Static Deals Data
const dealsData = [
  {
    id: 1,
    title: "My Spcl Deal",
    price: "Rs.150.00",
    subtitle: "Save Upto 20%",
    img: "/images/img-1.png",
  },
  {
    id: 2,
    title: "Burger/Pizza/Chocolate Milk/Cold Coffee/Cold Drink",
    price: "Rs.400.00",
    subtitle: "Enjoy Our Combo Deal With ...",
    img: "/images/img-2.png",
  },
];

export default function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSidebar, setActiveSidebar] = useState("Deals");
  const [activeTab, setActiveTab] = useState("Main Menu");

  //  Fetch menu data on load
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetchMenuData();
        if (data?.data) {
          const parsedData = JSON.parse(data.data);
          setCategories(parsedData.CategoryList || []);
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading menu...</p>;

  //  Filter logic
  const activeCategory = categories.find(
    (cat) =>
      cat.CategryName?.toLowerCase() ===
      (activeSidebar === "Shakes and Juices"
        ? "shakes and juices"
        : activeSidebar.toLowerCase())
  );

  const categoryFilteredItems =
    activeCategory?.ItemListWidget?.filter((item) =>
      item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div style={{ backgroundColor: "#f4f7fb" }} className="min-h-screen">
      <Header />

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-8 mb-8">
        {["Main Menu", "Breakfast"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar
            categories={["Deals", "Shakes and Juices"]}
            activeCategory={activeSidebar}
            setActiveCategory={setActiveSidebar}
          />

          {/* Main Content */}
          <div className="w-3/5 px-6 overflow-y-auto max-h-screen">
            {/* 🔍 Search Bar */}
            <div
              className="sticky top-0 z-10 pb-4"
              style={{ backgroundColor: "#f4f7fb" }}
            >
              <div className="flex justify-center mb-2">
                <div className="relative w-full max-w-[50rem]">
                  <input
                    type="text"
                    placeholder="Search for dishes"
                    className="w-full h-[52px] px-5 pr-14 border-[2px] border-black rounded-lg focus:outline-none text-[16px] font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {/* Bigger Icon */}
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471  0 0016 9.5 6.5 6.5 0 109.5 16c1.61  0 3.09-.59 4.23-1.57l.27.28v.79l5  4.99L20.49 19l-4.99-5zM10 14a4 4  0 110-8 4 4 0 010 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="bg-white rounded-xl border border-gray-300 mt-4">
              {/* Section Header */}
              <div className="mb-4 pb-4 border-b border-gray-300 px-6 pt-6">
                <h2 className="font-[700] text-2xl">{activeSidebar}</h2>
                <p className="text-gray-500 font-semibold text-sm">
                  {activeSidebar === "Deals"
                    ? `${dealsData.length} Items`
                    : categoryFilteredItems.length
                    ? `${categoryFilteredItems.length} Items`
                    : "No Items"}
                </p>
              </div>

              {/* Grid Content */}
              {activeSidebar === "Deals" ? (
                <div className="grid grid-cols-2 gap-5 px-6 pb-10">
                  {dealsData.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              ) : categoryFilteredItems.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 pb-6">
                  {categoryFilteredItems.map((item, idx) => (
                    <MenuCard key={idx} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-6 px-6">
                  No items found in "{activeSidebar}"
                </p>
              )}
            </div>
          </div>

          {/* Cart */}
          <Cart />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
