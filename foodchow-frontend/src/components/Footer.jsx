export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6 md:px-12 text-sm text-gray-700">
      <div className="flex items-center justify-between">
        {/* Empty div to balance the space on left side */}
        <div className="w-1/3"></div>

        {/* Centered FSSAI License */}
        <p className="font-semibold text-center w-1/3 text-base">
          Fssai Lic. No : DKDKDKDKDK
        </p>

        {/* Right side: Powered by with logo */}
        <div className="flex items-center gap-3 w-1/3 justify-end text-gray-600 font-semibold text-base">
          Food Ordering System By
          <img
            src="/images/foodchow-logo.png"
            alt="Food Chow Logo"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
}
