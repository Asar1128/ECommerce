import NikeLogo from "../assets/imgs/NikeLogo.svg";
import kronos from "../assets/imgs/kronosLogo.png"

// Section 01 
import Shipping from '../assets/imgs/shipping.svg'
import refund from "../assets/imgs/dollar.svg"
import support from "../assets/imgs/support.png"


export default function StaticDataPage() {
  return (
    <div className="space-y-12 p-6 mt-[50px]">
      {/* 🔹 First Static Section */}
      <div className="flex flex-wrap gap-8 justify-center p-6">
  <div className="flex flex-col items-center text-center max-w-[250px]">
    <img src={Shipping} alt="Shipping Icon" className="w-16 h-16 mb-3" />
    <div>
      <p className="text-gray-800 font-semibold text-lg">How to Improve Web Performance</p>
      <p className="text-gray-600 text-sm mt-1">Optimize your website for better speed and efficiency.</p>
    </div>
  </div>

  <div className="flex flex-col items-center text-center max-w-[250px]">
    <img src={refund} alt="Refund Icon" className="w-16 h-16 mb-3" />
    <div>
      <p className="text-gray-800 font-semibold text-lg">How to Improve Web Performance</p>
      <p className="text-gray-600 text-sm mt-1">Optimize your website for better speed and efficiency.</p>
    </div>
  </div>

  <div className="flex flex-col items-center text-center max-w-[250px]">
    <img src={support} alt="Support Icon" className="w-16 h-16 mb-3" />
    <div>
      <p className="text-gray-800 font-semibold text-lg">How to Improve Web Performance</p>
      <p className="text-gray-600 text-sm mt-1">Optimize your website for better speed and efficiency.</p>
    </div>
  </div>
</div>


      {/* 🔹 Second Static Section */}
      <div className="second-sec bg-gray-100 py-10">
  <div className="sec-sec-heading text-2xl font-bold text-gray-900 text-center mb-6">
    Latest News
  </div>

  <div className="flex flex-wrap gap-8 justify-center">
    <div className="flex items-start gap-4 bg-white p-4 shadow-lg rounded-lg max-w-[250px]">
      <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16 rounded-full object-contain" />
      <div className="flex flex-col">
        <p className="text-gray-500 text-xs">April 1, 2025</p>
        <p className="text-gray-800 font-semibold text-lg">Fashion Industry</p>
        <p className="text-gray-600 text-sm mt-1">Learn how to style efficiently using Tailwind.</p>
      </div>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 shadow-lg rounded-lg max-w-[250px]">
      <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16 rounded-full object-contain" />
      <div className="flex flex-col">
        <p className="text-gray-500 text-xs">April 5, 2025</p>
        <p className="text-gray-800 font-semibold text-lg">Best Design Tools</p>
        <p className="text-gray-600 text-sm mt-1">Explore new JavaScript features for modern development.</p>
      </div>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 shadow-lg rounded-lg max-w-[250px]">
      <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16 rounded-full object-contain" />
      <div className="flex flex-col">
        <p className="text-gray-500 text-xs">April 10, 2025</p>
        <p className="text-gray-800 font-semibold text-lg">HR Community</p>
        <p className="text-gray-600 text-sm mt-1">Ensure your site is accessible to all users.</p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
