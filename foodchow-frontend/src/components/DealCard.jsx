function DealCard({ deal }) {
  return (
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
              src="/images/take-away-icon.png"
              alt="Take Away"
              className="h-16 w-16 object-contain"
            />
            <span className="font-semibold">Take Away</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <img
              src="/images/dine-in-icon.png"
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
}


export default DealCard;