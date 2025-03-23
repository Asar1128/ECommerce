import NikeLogo from "../assets/imgs/NikeLogo.svg";

export default function StaticDataPage() {
  return (
    <div className="space-y-12 p-6 mt-[50px]">
      {/* 🔹 First Static Section */}
      <div className="flex flex-wrap gap-[30px] justify-center">
      
        <div className="flex items-start gap-4 max-w-[250px]">
          <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">March 22, 2025</p>
            <p className="text-gray-800 font-semibold">How to Improve Web Performance</p>
            <p className="text-gray-600 text-sm">Optimize your website for better speed and efficiency.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 max-w-[250px]">
          <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">March 23, 2025</p>
            <p className="text-gray-800 font-semibold">Best Practices for Responsive Design</p>
            <p className="text-gray-600 text-sm">Create adaptable layouts for all devices.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 max-w-[250px]">
          <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">March 24, 2025</p>
            <p className="text-gray-800 font-semibold">Understanding CSS Grid and Flexbox</p>
            <p className="text-gray-600 text-sm">Master modern CSS layout techniques.</p>
          </div>
        </div>
      </div>

      {/* 🔹 Second Static Section */}
     <div className="second-sec">
      <div className="sec-sec-heading">Latest News</div>
      <div className="flex flex-wrap gap-[30px] justify-center">
             
             <div className="flex items-start gap-4 max-w-[250px]">
               <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
               <div className="flex flex-col">
                 <p className="text-gray-500 text-sm">April 1, 2025</p>
                 <p className="text-gray-800 font-semibold">Introduction to Tailwind CSS</p>
                 <p className="text-gray-600 text-sm">Learn how to style efficiently using Tailwind.</p>
               </div>
             </div>
     
             <div className="flex items-start gap-4 max-w-[250px]">
               <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
               <div className="flex flex-col">
                 <p className="text-gray-500 text-sm">April 5, 2025</p>
                 <p className="text-gray-800 font-semibold">Mastering JavaScript ES6 Features</p>
                 <p className="text-gray-600 text-sm">Explore new JavaScript features for modern development.</p>
               </div>
             </div>
     
             <div className="flex items-start gap-4 max-w-[250px]">
               <img src={NikeLogo} alt="Nike Logo" className="w-16 h-16" />
               <div className="flex flex-col">
                 <p className="text-gray-500 text-sm">April 10, 2025</p>
                 <p className="text-gray-800 font-semibold">Web Accessibility Best Practices</p>
                 <p className="text-gray-600 text-sm">Ensure your site is accessible to all users.</p>
               </div>
             </div>
           </div>
     </div>
    </div>
  );
}
