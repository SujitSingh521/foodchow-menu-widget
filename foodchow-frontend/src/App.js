import { useEffect, useState } from "react";
import Header from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import Cart from "./components/Cart";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import { fetchMenuData } from "./api/fetchMenuData";

// --- Static Deals Data ---
const dealsData = [
  {
    id: 1,
    title: "My Spcl Deal",
    price: "Rs.150.00",
    subtitle: "Save Upto 20%",
    img: "./images/img-1.png",
  },
  {
    id: 2,
    title: "Burger/Pizza/Chocolate Milk/Cold Coffee/Cold Drink",
    price: "Rs.400.00",
    subtitle: "Enjoy Our Combo Deal With ...",
    img: "./images/img-2.png",
  },
];

// --- DealCard Component ---
const DealCard = ({ deal }) => (
  <div className="rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
    <div className="relative rounded-t-lg overflow-hidden">
      <img
        src={deal.img}
        alt={deal.title}
        className="w-full h-44 object-cover rounded-t-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 rounded-b-lg text-white">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg leading-snug max-w-[70%]">
            {deal.title}
          </h3>
          <span className="font-semibold text-base">{deal.price}</span>
        </div>
        <p className="text-xs mt-1">{deal.subtitle}</p>
      </div>
    </div>

    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex gap-6 text-sm text-gray-700">
        <div className="flex flex-col items-center gap-1">
          <img
            src="./images/take-away-icon.png"
            alt="Take Away"
            className="h-16 w-16 object-contain"
          />
          <span className="font-semibold">Take Away</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src="./images/dine-in-icon.png"
            alt="Dine In"
            className="h-16 w-16 object-contain"
          />
          <span className="font-semibold">Dine-In</span>
        </div>
      </div>

      <button className="border border-black rounded-full px-6 py-1 text-sm font-medium hover:bg-black hover:text-white transition">
        Add
      </button>
    </div>
  </div>
);

// --- App Component ---
export default function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSidebar, setActiveSidebar] = useState("Deals");
  const [activeTab, setActiveTab] = useState("Main Menu");

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

  const activeCategory = categories.find(
    (cat) =>
      cat.CategryName.toLowerCase() ===
      (activeSidebar === "Shakes and Juices"
        ? "shakes and juices"
        : activeSidebar.toLowerCase())
  );

  const filteredItems =
    activeCategory?.ItemListWidget?.filter((item) =>
      item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <>
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

      {/* Main Layout */}
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1" style={{ backgroundColor: "#f4f7fb" }}>
          {/* Sidebar */}
          <Sidebar
            categories={["Deals", "Shakes and Juices"]}
            activeCategory={activeSidebar}
            setActiveCategory={setActiveSidebar}
          />

          {/* Content */}
          <div className="w-3/5 px-6 overflow-y-auto max-h-screen">
            {/* Search Bar */}
            <div
              className="sticky top-0 z-10 pb-4"
              style={{ backgroundColor: "#f4f7fb" }}
            >
              <div className="flex justify-center mb-2">
                <div className="relative w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="Search for dishes"
                    className="w-full px-4 py-3 pr-12 border border-black rounded-full focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    fill="currentColor"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 
                      0 0016 9.5 6.5 6.5 0 109.5 16c1.61 
                      0 3.09-.59 4.23-1.57l.27.28v.79l5 
                      4.99L20.49 19l-4.99-5zM10 14a4 4 
                      0 110-8 4 4 0 010 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Menu / Deals Section */}
            <div className="bg-white rounded-xl border border-gray-300">
              {/* Header */}
              <div className="mb-4 pb-4 border-b border-gray-300 px-6 pt-6">
                <h2 className="font-[700] text-2xl">{activeSidebar}</h2>
                <p className="text-gray-500 font-semibold text-sm">
                  {activeSidebar === "Deals"
                    ? `${dealsData.length} Items`
                    : activeCategory?.ItemListWidget?.length > 0
                    ? `${activeCategory.ItemListWidget.length} Items`
                    : ""}
                </p>
              </div>

              {/* Content Grid */}
              {activeSidebar === "Deals" ? (
                <div className="grid grid-cols-2 gap-5 px-6 pb-10">
                  {dealsData.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}

                  <div className="flex justify-between items-center col-span-2 border-t border-gray-300 pt-6 px-6">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Deal With Ex Tax
                      </h3>
                      <p className="text-gray-700 text-sm">Test</p>
                      <p className="font-semibold mt-1">Rs.500.00</p>
                    </div>
                    <button className="border border-black rounded-full px-6 py-1 text-sm font-medium hover:bg-black hover:text-white transition">
                      Add
                    </button>
                  </div>
                </div>
              ) : filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 pb-6">
                  {filteredItems.map((item, idx) => (
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

      <Footer />
    </>
  );
}
