export default function Cart() {
  return (
    <aside className="w-[full] md:w-[28%] mr-9 sticky top-24 h-[68vh] bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 border-b pb-4 text-gray-900">
        Your Cart
      </h2>

      <div className="flex flex-col items-center text-center text-gray-700">
        <img
          src="https://foodchowdemoindia.foodchow.com/angular/v2/assets/Images/empty.png"
          alt="Empty Cart"
          className="w-40 mb-6"
        />

        <p className="text-lg font-semibold leading-relaxed text-gray-800">
          Your Cart Is Empty! Add Some
          <br />
          Delicious Food Items And Satisfy
          <br />
          Your Cravings. 🍽 😋
        </p>
      </div>
    </aside>
  );
}
