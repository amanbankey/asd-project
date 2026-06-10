// import { useState } from "react";

// import {
//   FiMenu,
//   FiSearch,
//   FiBell,
//   FiMail,
//   FiSun,
//   FiMoon,
//   FiPlus,
//   FiUsers,
//   FiShield,
//   FiCreditCard,
//   FiDatabase,
//   FiFileText,
//   FiGlobe,
//   FiPackage,
//   FiTruck,
//   FiCpu,
//   FiPieChart,
//   FiLink,
//   FiMonitor,
//   FiHelpCircle,
//   FiGrid,
//   FiSettings,
//   FiChevronRight,
//   FiUserPlus,
//   FiUserCheck,
//   FiPlusCircle,
//   FiAlertCircle,
//   FiCheckCircle,
//   FiXCircle,
//   FiHome,
//   FiCamera,
//   FiLock,
//   FiSend,
// } from "react-icons/fi";
// import {
//   FaTrash,
//   FaCheck,
//   FaBox,
//   FaBell,
//   FaChevronLeft,
//   FaFileLines,
//   FaListCheck,
//   FaGripVertical,
//   FaPlus,
//   FaSliders,
//   FaEye,
//   FaClock,
//   FaUser,
//   FaFloppyDisk,
//   FaPaperPlane,
//   FaUsers,
//   FaIndianRupeeSign,
//   FaRotate,
//   FaArrowUp,
//   FaStar,
//   FaChevronRight,
//   FaRobot,
// } from "react-icons/fa6";

// import {
//   FiEdit,
//   FiTrash2,
//   FiCheck,
//   FiDollarSign,
//   FiRefreshCw,
//   FiUser,
// } from "react-icons/fi";
// import {
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { RxCross1 } from "react-icons/rx";
// import { FaCalendarAlt, FaTimes } from "react-icons/fa";

// import {
//    FiUpload, FiPhone,
//   FiArrowUpRight,  FiMaximize2,
//   FiAlertTriangle, } from "react-icons/fi";
// import {
//   MdOutlineTrackChanges, MdOutlineLocalShipping
// } from "react-icons/md";
// import { BsGlobe2, BsBoxSeam } from "react-icons/bs";
// import { TbShip } from "react-icons/tb";

// import user from "../../assets/icon/user.png";
// import order from "../../assets/icon/orders.png";
// import supplier from "../../assets/icon/suppliers.png";

// import buyer from "../../assets/icon/Buyers.png";

// import analytical from "../../assets/icon/analytical.png";

// import document from "../../assets/icon/document.png";

// import payment from "../../assets/icon/payment.png";
// import ai from "../../assets/icon/ai.png";

// import support from "../../assets/icon/supportCenter.png";
// import setting from "../../assets/icon/settings.png";

// import up from "../../assets/icon/up.png";

// import Us from "../../assets/icon/us.png";
// import european from "../../assets/icon/european.png";

// import sea from "../../assets/icon/sea.png";
// import vietnam from "../../assets/icon/vietnam.png";

// import truck from "../../assets/icon/truck.png";

// import dashboard from '../../assets/icon/home.png'
// import { BsCalendarCheck, BsPersonPlus, BsGraphUp } from "react-icons/bs";
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { RiWhatsappLine } from "react-icons/ri";
// import { FiX } from "react-icons/fi";
// import map from "../../assets/Images/logo.png";

// const trendingProducts = [
//   { name: "Electronics", pct: "38.4%" },
//   { name: "Machinery", pct: "29.1%" },
//   { name: "Pharmaceuticals", pct: "18.2%" },
//   { name: "Chemicals", pct: "15.33%" },
//   { name: "Textiles", pct: "12.4" },
// ];

// const fastCountries = [
//   { name: "India", pct: "28.4%" },
//   { name: "Vietnam", pct: "32.0%" },
//   { name: "Mexico", pct: "18.3" },
//   { name: "Indonesia", pct: "12.53" },
//   { name: "UAE", pct: "12.4" },
// ];

// const suppliers = [
//   {
//     name: "Shenzhan Tech Ltd.",
//     reliability: "90%",
//     quality: "90%",
//     ontime: "90%",
//     risk: "Low",
//   },
//   {
//     name: "Global Machinery Co.",
//     reliability: "90%",
//     quality: "90%",
//     ontime: "90%",
//     risk: "Low",
//   },
//   {
//     name: "Global Machinery Co.",
//     reliability: "90%",
//     quality: "90%",
//     ontime: "90%",
//     risk: "Medium",
//   },
//   {
//     name: "Global Machinery Co.",
//     reliability: "90%",
//     quality: "90%",
//     ontime: "90%",
//     risk: "Medium",
//   },
// ];

// const buyers = [
//   {
//     name: "Amazon Retail",
//     order: 256,
//     ontime: "90%",
//     payment: "98/100",
//     growth: "28.4%",
//   },
//   {
//     name: "Walmart Inc",
//     order: 189,
//     ontime: "90%",
//     payment: "95/100",
//     growth: "28.4%",
//   },
//   {
//     name: "Best Buy Co.",
//     order: 142,
//     ontime: "90%",
//     payment: "92/100",
//     growth: "28.4%",
//   },
//   {
//     name: "Costco Wholesale",
//     order: 76,
//     ontime: "90%",
//     payment: "90/100",
//     growth: "28.4%",
//   },
// ];

// const mapPins = [
//   { top: "28%", left: "18%", label: "🇺🇸", value: "$2.8M", bg: "bg-blue-200" },
//   { top: "22%", left: "46%", label: "🇩🇪", value: "$1.4M", bg: "bg-teal-200" },
//   { top: "35%", left: "60%", label: "🇮🇳", value: "$4.3M", bg: "bg-purple-200" },
//   { top: "55%", left: "27%", label: "🇧🇷", value: "$2.4M", bg: "bg-green-300" },
//   { top: "62%", left: "72%", label: "🇦🇺", value: "$1.4M", bg: "bg-yellow-200" },
// ];

// const mapRegions = [
//   {
//     top: "22%",
//     left: "12%",
//     w: "w-20",
//     h: "h-14",
//     color: "bg-blue-200",
//     opacity: "opacity-70",
//   },
//   {
//     top: "48%",
//     left: "18%",
//     w: "w-14",
//     h: "h-20",
//     color: "bg-green-300",
//     opacity: "opacity-80",
//   },
//   {
//     top: "18%",
//     left: "42%",
//     w: "w-20",
//     h: "h-12",
//     color: "bg-teal-200",
//     opacity: "opacity-70",
//   },
//   {
//     top: "36%",
//     left: "46%",
//     w: "w-10",
//     h: "h-14",
//     color: "bg-yellow-100",
//     opacity: "opacity-60",
//   },
//   {
//     top: "26%",
//     left: "58%",
//     w: "w-24",
//     h: "h-14",
//     color: "bg-purple-100",
//     opacity: "opacity-60",
//   },
//   {
//     top: "60%",
//     left: "68%",
//     w: "w-12",
//     h: "h-8",
//     color: "bg-yellow-300",
//     opacity: "opacity-70",
//   },
// ];

// const navItems = [
//   { icon: dashboard, label: "Dashboard" },
//   { icon: user, label: "My Shipment" },
//   { icon: order, label: "Orders" },
//   { icon: supplier, label: "Suppliers" },

//   { icon: buyer, label: "Buyers" },

//   { icon: analytical, label: "Analytics" },
//   { icon: document, label: "Documents" },
//   { icon: payment, label: "Payments" },
//   { icon: ai, label: "Ai Insights" },

//   { icon: support, label: "Support Center " },
//   { icon: setting, label: "Settings" },
// ];

// const statCards = [
//   { label: "Global Trade Volume", value: "12,450", change: "28.4%" },
//   { label: "Active Containers", value: "24,875", change: "28.4%" },
//   { label: "Revenue (YTD)", value: "4,320", change: "28.4%" },
//   { label: "Trade Growth", value: "$ 2.48B", change: "28.4%" },
//   { label: "AI Market Forecast", value: "23", change: "28.4%" },
//   { label: "Supplier Network Score", value: "$ 1.26M", change: "28.4%" },
// ];

// const globalTrade = [
//   {
//     name: "Live Shipment",
//     color: "text-red-600",
//     no: "1246",
//   },
//   {
//     name: "In Transit",
//     color: "text-green-500",
//     no: "892",
//   },
//   {
//     name: "Port",
//     color: "text-black",
//     no: "184",
//   },
//   {
//     name: "Delivered",
//     color: "text-black",
//     no: "171",
//   },
// ];

// const stats = [
//   { label: "Active Shipment", value: "128", change: "28.4%" },
//   { label: "Pending Orders", value: "45", change: "28.4%" },
//   { label: "Total Imports", value: "₹2.5Cr", change: "28.4%" },
//   { label: "Total Exports", value: "$ 2.48B", change: "28.4%" },
//   { label: "Monthly Revenue", value: "23", change: "28.4%" },
//   { label: "AI Trade Score", value: "87/100", change: null },
// ];

// const trackingSteps = [
//   { label: "Departed", sub: "Shanghai Port\n10 may 2026", done: true },
//   { label: "Customs Clearance", sub: "12 May 2025", done: true },
//   { label: "In Transit", sub: "On The way", done: true },
//   { label: "Rotterdam, NL", sub: "Rotterdam port", done: false },
//   { label: "Delivered", sub: "Pending", done: false, orange: true },
// ];

// const highDemand = [
//   { name: "Electronics", val: "28.4%" },
//   { name: "Machinery", val: "22.1%" },
//   { name: "Pharmaceuticals", val: "18.2" },
//   { name: "Chemicals", val: "16.33" },
//   { name: "Textiles", val: "12.4" },
// ];

// const bestCountries = [
//   { name: "India", val: "28.4%" },
//   { name: "Vietnam", val: "22.1%" },
//   { name: "Mexico", val: "18.2" },
//   { name: "Indonesia", val: "16.33" },
//   { name: "UAE", val: "12.4" },
// ];

// const riskAlerts = [
//   { name: "Red Sea Route", val: "28.4%", icon: sea },
//   { name: "European Delays", val: "22.1%", icon: european },
//   { name: "Us Customs", val: "18.2", icon: Us },
// ];

// const notifications = [
//   { title: "Shipment TCLU 1234567", sub: "Departed from Shanghai Port", time: "10m ago" },
//   { title: "Invoice INV-2025-0456", sub: "Payment received successfully", time: "1h ago" },
//   { title: "Customs Clearance update", sub: "Your Shipment is cleared", time: "3h ago" },
//   { title: "New AI Insight available", sub: "Check your trade recommendations", time: "5h ago" },
// ];

//  function Dashboard() {
//   const [message, setMessage] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 lg:px-8 py-4 sm:py-6">

//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
//           <div>
//             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Welcome Abhishek</h1>
//             <p className="text-xs sm:text-base text-gray-500 mt-0.5">Here&apos;s your global trade overview</p>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             <button className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
//               <img src={truck} size={15} /> Track Shipment
//             </button>
//             <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
//               <FiUpload size={13} /> Upload Documents
//             </button>
//             <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
//               <FiPlusCircle size={13} /> Create Inquiry
//             </button>
//             <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
//               <FiPhone size={13} /> Contact Supplier
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-5">
//           {stats.map((s) => (
//             <div key={s.label} className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">

//               <p className="text-xs sm:text-base  text-gray-500 mb-1 leading-[100%]">{s.label}</p>
//                <div className="flex justify-between">
//               <p className="text-lg sm:text-xl font-bold text-gray-900">{s.value}</p>
//               {s.change && (
//                 <p className="text-xs  text-[#31FF07] font-medium flex items-center gap-0.5 mt-0.5">
//                   <img src={up} size={12} /> {s.change}
//                 </p>
//               )}
//               </div>
//             </div>
//           ))}
//         </div>

//       <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4 items-start ">

//          <div className="bg-white rounded-3xl h-full max-h-svh shadow-md p-3 ">

//                     <div className="flex  justify-between beween py-3 max-h-40"><h2 className="text-lg sm:text-xl font-semibold text-black mb-4">
//                      Live Shipment Tracking
//                     </h2>
//                     <button className="border bg-[#D1FAF5] text-[#0F8A7D] px-[10px] py-[4px]  rounded-lg font-medium">
//                       In Transit</button></div>

//                    <div className="relative w-full  h-[320px] bg-[#F7F9FC] rounded-2xl overflow-hidden flex items-center justify-between px-4">

//                     {/* LEFT SIDE */}
//                     <div className="w-[32%] xl:w-[36%] bg-[#ECECEC] rounded-2xl p-4 h-[60%] xl:h-[70%] flex flex-col justify-between z-10">

//                       {/* TOP */}
//                       <div className="flex gap-1">

//                         {/* CIRCLE + LINE */}
//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-green-500 z-10"></div>
//                           <div className="w-[2px] h-12 xl:h-14 bg-gray-300"></div>
//                         </div>

//                         {/* TEXT */}
//                         <div>
//                           <p className="font-semibold text-xs text-black">
//                             Shanghai CN
//                           </p>

//                           <p className="text-[0.6rem] xl:text-xs text-gray-500">
//                             Shanghai Port
//                           </p>
//                         </div>
//                       </div>

//                       {/* CENTER */}
//                       <div className="flex gap-1">

//                         {/* CIRCLE + LINE */}
//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-gray-400 z-10"></div>
//                           <div className="w-[2px] h-12 xl:h-14 bg-gray-300"></div>
//                         </div>

//                         {/* TEXT */}
//                         <div>
//                           <p className="font-semibold text-xs text-black uppercase">
//                             SINAR BINTAN
//                           </p>

//                           <p className="text-[0.5rem] xl:text-[0.6rem] text-gray-500 uppercase">
//                             Container: TCLU 122781
//                           </p>
//                         </div>
//                       </div>

//                       {/* BOTTOM */}
//                       <div className="flex gap-1">

//                         {/* CIRCLE */}
//                           <div className="flex flex-col items-center">
//                         <div className="w-3 h-3 rounded-full bg-orange-400 mt-1"></div>
//                          </div>
//                         {/* TEXT */}
//                         <div>
//                           <p className="font-semibold text-[0.6rem] xl:text-xs text-black">
//                             Rotterdam, NL
//                           </p>

//                           <p className="text-[0.6rem] xl:text-xs  text-gray-500">
//                             Rotterdam port
//                           </p>
//                         </div>
//                       </div>

//                     </div>

//                     {/* MAP IMAGE */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <img
//                         src="https://res.cloudinary.com/dhuabv2it/image/upload/v1778229817/Map_hhooem.webp"
//                         alt="map"
//                         className="w-[55%] object-contain"
//                       />
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="relative z-10 flex flex-col justify-between h-[70%]">

//                       {/* ITEM */}
//                       <div className="flex gap-1">

//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-green-500 z-10"></div>
//                           <div className="w-[2px] h-10 bg-green-500"></div>
//                         </div>

//                         <div>
//                           <p className="font-semibold text-xs text-black">
//                             Departed
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             Shanghai Port
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             10 May 2026
//                           </p>
//                         </div>
//                       </div>

//                       {/* ITEM */}
//                       <div className="flex gap-1 ">

//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-green-500 z-10"></div>
//                           <div className="w-[2px] h-9 bg-green-500"></div>
//                         </div>

//                         <div>
//                           <p className="font-semibold text-xs text-black">
//                             Customs Clearance
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             12 May 2025
//                           </p>
//                         </div>
//                       </div>

//                       {/* ITEM */}
//                       <div className="flex gap-1">

//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-green-500 z-10"></div>
//                           <div className="w-[2px] h-8 bg-gray-300"></div>
//                         </div>

//                         <div>
//                           <p className="font-semibold text-xs text-black">
//                             In Transit
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             On The Way
//                           </p>
//                         </div>
//                       </div>

//                       {/* ITEM */}
//                       <div className="flex gap-1">

//                         <div className="flex flex-col items-center">
//                           <div className="w-3 h-3 rounded-full bg-gray-300 z-10"></div>
//                           <div className="w-[2px] h-8 bg-gray-300"></div>
//                         </div>

//                         <div>
//                           <p className="font-semibold text-xs text-black">
//                             Rotterdam, NL
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             Rotterdam port
//                           </p>
//                         </div>
//                       </div>

//                       {/* LAST */}
//                       <div className="flex gap-1">

//                         <div className="w-3 h-3 rounded-full bg-orange-400 mt-1"></div>

//                         <div>
//                           <p className="font-semibold text-sm xl:text-[0.6rem] text-black">
//                             Delivered
//                           </p>

//                           <p className="text-[0.65rem] text-gray-500">
//                             Pending
//                           </p>
//                         </div>
//                       </div>

//                     </div>
//                   </div>

//                     <div className="flex items-center justify-between mt-3">
//                     <div className="flex border px-2 py-1 rounder-md flex-col  justify-around">
//                      <div className="  text-xs font-medium text-[#A20000]" >ETA</div>
//                      <div className="  text-xs font-semibold">24 may 2026</div>
//                       <div className="  text-xs">3 days left</div>
//                     </div>

//                     <div ><button className="rounded-lg border text-xs  sm:text-sm border-gray-200 py-2 px-3 font-normal">View Shipment details</button></div>
//                     </div>
//           </div>

//          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">

//   {/* LEFT SIDE */}
//   <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-4">

//     {/* Header */}
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
//         AI Trade Insights
//       </h2>

//       <button className="text-xs text-gray-500 flex items-center gap-1 hover:text-teal-600 transition-colors">
//         View All
//         <FiChevronRight size={12} />
//       </button>
//     </div>

//     {/* 4 CARDS */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

//       {/* Card 1 */}
//       <div className="border border-gray-200 rounded-xl p-3 shadow-md">
//         <p className="text-xs font-bold text-gray-800 mb-1">
//           High Demand Products
//         </p>

//         <p className="text-[10px] sm:text-xs text-gray-400 mb-2">
//           This Month
//         </p>

//         {highDemand.map((item) => (
//           <div
//             key={item.name}
//             className="flex items-center justify-between py-1"
//           >
//             <span className="text-[10px] sm:text-xs text-gray-600">
//               {item.name}
//             </span>

//             <span className="  w-14 text-[10px] sm:text-xs text-[#31FF07] font-medium flex items-center gap-1">
//               <img src={up} size={12} />
//               {item.val}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Card 2 */}
//       <div className="border border-gray-200 rounded-xl p-3 shadow-md">
//         <p className="text-xs font-bold text-gray-800 mb-1">
//           Best Import Countries
//         </p>

//         <p className="text-[10px] sm:text-xs text-gray-400 mb-2">
//           This Month
//         </p>

//         {bestCountries.map((item) => (
//           <div
//             key={item.name}
//             className="flex items-center justify-between py-1"
//           >
//             <span className="text-[10px] sm:text-xs text-gray-600">
//               {item.name}
//             </span>

//             <span className=" w-14 text-[10px] sm:text-xs text-[#31FF07] font-medium flex items-center gap-1">
//                <img src={up} size={12} />
//               {item.val}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Card 3 */}
//       <div className="border border-gray-200 rounded-xl p-3 shadow-md">
//         <p className="text-xs font-bold text-gray-800 mb-1">
//           Risk Alerts
//         </p>

//         <p className="text-[10px] sm:text-xs text-gray-400 mb-2">
//           This Month
//         </p>

//         {riskAlerts.map((item) => (
//           <div
//             key={item.name}
//             className="flex items-center justify-between py-1"
//           >
//             <span className="text-[10px] sm:text-xs text-gray-600 flex items-center gap-1">
//                <img src={item.icon} />
//               {item.name}
//             </span>

//             <span className=" w-14 text-[10px] sm:text-xs text-[#31FF07] font-medium flex items-center gap-1">
//                <img src={up} size={12} />
//               {item.val}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Card 4 */}
//       <div className="border border-gray-200 rounded-xl p-3 shadow-md flex flex-col justify-between">
//         <div>
//           <p className="text-xs font-bold text-gray-800 mb-1">
//             AI Recommendation
//           </p>

//           <p className="text-[10px] sm:text-xs text-gray-400 mb-2">
//             For Your Business
//           </p>

//           <p className="text-[10px] sm:text-xs text-gray-600 mb-1">
//             Increase imports from
//           </p>

//           <p className="text-xs font-semibold flex items-center gap-2 text-gray-800">
//              <img src={vietnam} />
//           <span>   Vietnam</span>
//           </p>

//           <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
//             Electronics demand is
//           </p>

//           <p className="text-sm lg:text-base font-semibold text-teal-600">
//             29% this month
//           </p>
//         </div>

//         <button className="mt-3 w-full bg-teal-50 hover:bg-teal-100 text-teal-600 text-xs font-semibold py-2 rounded-lg border border-teal-200 transition-colors">
//           View Opportunities
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* RIGHT SIDE */}
//   <div className="flex flex-col gap-4">

//     {/* AI ASSISTANT */}
//     <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">

//       <div className="flex items-center justify-between mb-3">
//         <div>
//           <p className="text-sm font-bold text-gray-900">
//             AI Trade Assistant
//           </p>

//           <p className="text-xs text-green-500 font-medium flex items-center gap-1">
//             <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
//             Online
//           </p>
//         </div>

//         <FiMaximize2
//           size={14}
//           className="text-gray-400"
//         />
//       </div>

//       <div className="space-y-2 mb-4">
//         {[1, 2, 3].map((i) => (
//           <div
//             key={i}
//             className="h-3 bg-gray-100 rounded-full w-full"
//           />
//         ))}
//       </div>

//       <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Ask anything about trade..."
//           className="flex-1 text-xs text-gray-600 placeholder-gray-400 outline-none bg-transparent"
//         />

//         <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg transition-colors">
//           <FiSend size={12} />
//         </button>
//       </div>
//     </div>

//     {/* NOTIFICATION */}
//     <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">

//       <div className="flex items-center justify-between mb-4">
//         <p className="text-sm font-bold text-gray-900">
//           Notification
//         </p>

//         <button className="text-xs text-gray-500 flex items-center gap-1 hover:text-teal-600 transition-colors">
//           View All
//           <FiChevronRight size={12} />
//         </button>
//       </div>

//       <div className="space-y-3">
//         {notifications.map((n, i) => (
//           <div
//             key={i}
//             className="flex items-start gap-3"
//           >
//             <div className="flex-1 min-w-0">
//               <p className="text-xs font-semibold text-gray-800 break-words">
//                 {n.title}
//               </p>

//               <p className="text-[10px] whitespace-nowrap sm:text-xs text-gray-400 break-words">
//                 {n.sub}
//               </p>
//             </div>

//             <span className="text-[10px] sm:text-xs text-gray-400 flex-shrink-0">
//               {n.time}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>

//   </div>
// </div>

//       </div>
//         {/* </div> */}

//       </div>
//     </div>
//   );
// }

// export default function UserDashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("Dashboard");
//   const [chatInput, setChatInput] = useState("");
//   const riskColor = {
//     Low: "bg-teal-100 text-teal-600",
//     Medium: "bg-orange-100 text-orange-500",
//     High: "bg-red-100 text-red-500",
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
//       {/* Overlay for mobile */}

//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:static inset-y-0 left-0 z-30 w-52 xl:w-60
//            bg-white text-white flex flex-col
//           transform transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0 flex-shrink-0
//         `}
//       >
//         {/* Logo */}
//         <div className="flex items-center  justify-center gap-2 px-4 py-2 border-b border-gray-700">
//           <img src={logo} className="h-12" />
//         </div>

//         {/* Nav */}
//         <nav className="flex-1 bg-gray-900 overflow-y-auto  pr-3 py-7 space-y-0.5">
//           {navItems.map(({ icon: Icon, label }) => (
//             <button
//               key={label}
//               onClick={() => {
//                 setActiveNav(label);
//                 setShowBot(false);
//                 setSidebarOpen(false);
//               }}
//               className={`w-full flex items-center gap-2 pl-10 py-2 rounded-r-lg text-xs transition-colors text-left
//                 ${
//                   activeNav === label
//                     ? "bg-teal-500 text-white"
//                     : "text-gray-400 hover:bg-gray-700 hover:text-white"
//                 }`}
//             >
//               {/* <Icon size={13} className="flex-shrink-0" /> */}
//               <img src={Icon} />
//               <span className="truncate text-[0.9rem] font-medium font-base ">{label}</span>
//             </button>
//           ))}
//         </nav>
//       </aside>

//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden  ">
//         {/* Topbar */}
//         <header className="bg-white border-b border-gray-200 px-3 sm:px-4 py-1 flex items-center gap-3 flex-shrink-0">
//           <button
//             className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <FiMenu size={18} />
//           </button>

//           <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
//             <div className="relative">
//               <FiSearch
//                 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={14}
//               />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-teal-400"
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-1.5 ml-auto">
//             <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 relative">
//               <FiBell size={16} />
//               <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
//             </button>
//             <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
//               <FiMail size={16} />
//             </button>
//             <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
//               <FiSun size={16} />
//             </button>
//             <div className="flex items-center gap-2 ml-1 pl-2 py-2 border-l border-gray-200">
//               <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                 A
//               </div>
//               <div className="hidden sm:block leading-tight">
//                 <p className="text-xs sm:text-sm font-semibold text-gray-800">
//                   Abhishek
//                 </p>
//                 <p className="text-gray-400 text-xs sm:text-sm">
//                  user@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}

//         <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-10 ">
//           {activeNav === "Dashboard" && (
//           <div> <Dashboard/> </div>
//           )}

//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import logo from "../../assets/Images/logo.png";
// import { FiAlertCircle } from "react-icons/fi";
import {
  FiArrowLeft,
  FiSave,
  FiDownload,
  FiPlus,
  FiInfo,
  FiCopy,
  FiStar,
  FiDatabase,
  FiAlertCircle,
  FiAnchor,
  FiCpu,
  FiHash,
  FiGift,
  FiTruck,
  FiMap,
  FiPackage,
  FiRadio,
  FiFileText,
  FiUsers,
  FiBookmark,
  FiClipboard,
  FiBarChart2,
  FiCreditCard,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronRight,
  FiShare2,
  FiSend,
  FiCheck,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { BsAirplane } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import HSCodeLookup from "./HsCodeLookUp";
import IncentiveChecker from "./IncentiveChecker";
import ShipmentPlanning from "./ShipmentPlanning";

const sidebarSections = [
  {
    title: "Dashboard",
    items: [],
  },
  {
    title: "AI & Trade Tools",
    items: [
      {
        icon: FiCpu,
        label: "AI CargoMate Assistant",
        badge: "Core",
        badgeColor: "bg-teal-500",
      },
      { icon: FiHash, label: "HS Code Lookup" },
      { icon: FiGift, label: "Incentive Checker" },
      { icon: FiTruck, label: "Freight Calculator" },
      { icon: FiMap, label: "Shipment Planning" },
    ],
  },
  {
    title: "Shipment Operations",
    items: [
      { icon: FiPackage, label: "My Shipments" },
      { icon: FiRadio, label: "Shipment Tracking" },
      { icon: FiFileText, label: "Documents Center" },
      { icon: FiUsers, label: "Vendor Recommendations" },
    ],
  },
  {
    title: "Reports & Insights",
    items: [
      {
        icon: FiBookmark,
        label: "Saved Reports",
        badge: "New",
        badgeColor: "bg-yellow-500",
      },
      { icon: FiClipboard, label: "Audit Logs" },
      { icon: FiBarChart2, label: "Analytics & Trends" },
    ],
  },
  {
    title: "Account & Support",
    items: [
      {
        icon: FiCreditCard,
        label: "Subscription",
        badge: "Pro Plan",
        badgeColor: "bg-purple-600",
      },
      {
        icon: FiBell,
        label: "Notifications",
        badge: "6",
        badgeColor: "bg-red-500",
      },
      { icon: FiHelpCircle, label: "Help & Support" },
      { icon: FiSettings, label: "Profile Settings" },
    ],
  },
];

const recCards = [
  {
    label: "HS Code",
    main: "6109.10.00",
    sub: "T-shirts, singlets and other vests, of cotton",
    rows: [
      ["IGST Rate (India)", "12%"],
      ["UAE Customs Duty", "5%"],
    ],
    link: "View HS Code Details",
  },
  {
    label: "Incentive (India)",
    main: "₹8,420",
    mainColor: "text-emerald-600",
    sub: "Total Incentive Value",
    rows: [
      ["RoDTEP", "₹3,420"],
      ["MEIS", "₹5,000"],
      ["State Incentive (TN)", "₹0"],
    ],
    link: "View Incentive Details",
  },
  {
    label: "Freight (Air)",
    routeLabel: "Route",
    route: "Tirupur → Dubai",
    rows: [
      ["Mode", "Air Freight"],
      ["Est. Freight Cost", ""],
    ],
    freightCost: "₹24,860",
    link: "View Freight Breakdown",
  },
  {
    label: "Landed Cost (Est.)",
    main: "₹1,24,680",
    sub: "Total Landed Cost",
    rows: [
      ["Product Cost", "₹76,230"],
      ["Freight & Insurance", "₹24,860"],
      ["Duties & Taxes", "₹13,590"],
      ["Other Charges", "₹9,99"],
    ],
    link: "View Cost Breakdown",
  },
];

const analysisTabs = [
  "HS Code Analysis",
  "Incentive Analysis",
  "Freight Analysis",
  "Landed Cost Breakdown",
  "Compliance & Documents",
  "Market Insights",
];

const tabContent = {
  "HS Code Analysis": {
    left: [
      ["HS Code", "6109.10.00"],
      ["Description", "T-shirts, singlets and other vests, of cotton"],
      ["Classification Basis", "Chapter 61, Note 7, Section XI"],
      ["IGST (India)", "12%"],
      ["UAE Customs Duty", "5%"],
      ["Applicable Cess", "NA"],
    ],
    insight:
      "This HS code covers cotton T-shirts. Ensure accurate declaration of fabric composition and HS classification to avoid customs delays.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
  "Incentive Analysis": {
    left: [
      ["RoDTEP", "₹3,420"],
      ["MEIS", "₹5,000"],
      ["State Incentive (TN)", "₹0"],
      ["Total Incentive", "₹8,420"],
    ],
    insight:
      "RoDTEP scheme replaces MEIS for most textile exports. Verify eligibility and current rates before filing.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
  "Freight Analysis": {
    left: [
      ["Route", "Tirupur → Dubai, UAE"],
      ["Mode", "Air Freight"],
      ["Est. Freight Cost", "₹24,860"],
      ["Transit Time", "3–5 Days"],
    ],
    insight:
      "Air freight is fastest but costlier. Consider sea freight for large volumes to reduce landed cost significantly.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
  "Landed Cost Breakdown": {
    left: [
      ["Product Cost", "₹76,230"],
      ["Freight & Insurance", "₹24,860"],
      ["Duties & Taxes", "₹13,590"],
      ["Other Charges", "₹9,99"],
      ["Total Landed Cost", "₹1,24,680"],
    ],
    insight:
      "Total landed cost is ₹1,24,680. Duties and taxes account for ~11% of landed cost.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
  "Compliance & Documents": {
    left: [
      ["Certificate of Origin", "Required"],
      ["GSP Form A", "Recommended"],
      ["Packing List", "Required"],
      ["Commercial Invoice", "Required"],
      ["Airway Bill", "Required"],
    ],
    insight:
      "Ensure all documents are prepared and verified before shipment to avoid customs clearance delays at Dubai port.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
  "Market Insights": {
    left: [
      ["UAE Market Demand", "High"],
      ["Avg. Selling Price (UAE)", "AED 18–24 / piece"],
      ["Key Competitors", "Bangladesh, China"],
      ["India Market Share", "14.2%"],
    ],
    insight:
      "India's textile exports to UAE are growing. Leverage FTA benefits and competitive pricing to gain market share.",
    assumption:
      "Product is 100% cotton, knitted. Shipment weight is 500kg. Prices and duties are based on current available data and may change.",
    disclaimer:
      "All results are for reference only. Please verify with official government and customs sources before making business decisions.",
    tariffLink: "View Official Tariff Page",
    buttonText: "Create Shipment from this Result",
  },
};

const resultSummary = [
  {
    icon: BsAirplane,
    label: "Best Mode",
    value: "Air Freight",
    iconColor: "text-teal-500",
  },
  {
    icon: BsAirplane,
    label: "Recommended Route",
    value: "Tirupur, India → Dubai, UAE",
    iconColor: "text-blue-500",
    small: true,
  },
  {
    icon: FiClock,
    label: "Est. Transit Time",
    value: "3 – 5 Days",
    iconColor: "text-yellow-500",
  },
  {
    icon: FiDollarSign,
    label: "Total Landed Cost (Est.)",
    value: "₹1,24,680",
    iconColor: "text-red-500",
  },
  {
    icon: FiGift,
    label: "Total Incentive (Est.)",
    value: "₹8,420",
    iconColor: "text-emerald-500",
    valueColor: "text-emerald-600",
  },
];

const auditLog = [
  {
    color: "bg-teal-500",
    time: "09:25 AM",
    text: "Query Submitted by Arjun Soni",
  },
  { color: "bg-blue-500", time: "09:25 AM", text: "AI Processing Started" },
  {
    color: "bg-yellow-500",
    time: "09:25 AM",
    text: "HS Code Identified: 6109.10.00",
  },
  {
    color: "bg-teal-500",
    time: "09:26 AM",
    text: "Incentives Calculated Successfully",
  },
  {
    color: "bg-teal-500",
    time: "09:26 AM",
    text: "Freight Rates Fetched (Air)",
  },
  {
    color: "bg-emerald-500",
    time: "09:26 AM",
    text: "Report Generated Successfully",
  },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("AI CargoMate Assistant");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [analysisTab, setAnalysisTab] = useState("HS Code Analysis");
  const content = tabContent[analysisTab];

  return (
    <div className="flex h-screen bg-gray-100  font-sans">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-52 xl:w-60
           bg-white text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 flex-shrink-0
        `}
      >
        <div className="flex items-center  justify-center gap-2 px-4 py-2   ">
          <img src={logo} className="h-10" />
        </div>

        <nav className="flex-1 overflow-y-auto py-3 bg-gray-900">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-[#4a6080]">
                {section.title}
              </p>
              {section.items.map(({ icon: Icon, label, badge, badgeColor }) => (
                <button
                  key={label}
                  className={`w-full flex items-center gap-2  px-4 py-2 text-xs text-left transition-colors
                    ${
                      activeTab === label
                        ? "bg-teal-500 text-white"
                        : "text-[#8aa0bc] hover:bg-teal-500 hover:text-white"
                    }`}
                >
                  <Icon className="text-base  flex-shrink-0" />
                  <span
                    onClick={() => setActiveTab(label)}
                    className="flex-1 font-semibold text-sm truncate  "
                  >
                    {label}
                  </span>
                  {badge && (
                    <span
                      className={`${badgeColor} text-white text-[9px] px-1.5 py-0.5 rounded-full font-semibold`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
          <div className="bg-[#0f1c2e] rounded-xl p-4 text-white flex flex-col">
            <h3 className="text-sm font-semibold mb-4">AI Queries Left</h3>

            <div className="flex-1 flex items-center justify-center rounded-lg bg-[#15253d] min-h-[100px]">
              <img
                src={"/ai-query-placeholder.png"}
                alt="AI Queries"
                className=" object-contain"
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-xl font-bold">42 / 100</p>
              <p className="text-xs text-slate-300 mt-1">
                Monthly Queries Remaining
              </p>
            </div>

            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold py-2 rounded-lg">
              Upgrade Plan
            </button>
          </div>
        </nav>
      </aside>

      {activeTab === "Dashboard" && <div> Dashboard </div>}
      {activeTab === "AI CargoMate Assistant" && (
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center gap-3 flex-shrink-0">
            <button
              className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
              onClick={() => setSidebarOpen(true)}
            >
              <FiSettings size={18} />
            </button>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>Dashboard</span>
              <FiChevronRight size={12} />
              <span>AI CargoMate Assistant</span>
              <FiChevronRight size={12} />
              <span className="text-teal-500 font-medium">AI Result</span>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-4 lg:p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                    AI CargoMate Assistant
                  </h1>
                  <span className="flex items-center gap-1 bg-yellow-50 text-yellow-800 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-yellow-200">
                    <FiStar size={10} className="text-yellow-500" /> Core Module
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 mt-0.5">
                  Your AI trade assistant for smarter decisions
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm  font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
                  <FiArrowLeft size={13} /> New Query
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm f dium font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
                  <FiSave size={13} /> Save Report
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm   font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
                  <FiDownload size={13} /> Download Report (PDF)
                </button>
                <button className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-sm f  font-semibold px-3 py-1.5 rounded-lg">
                  <FiPlus size={13} /> Create Shipment from this Result
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2.5 mb-4 text-sm font-medium text-blue-800">
              <FiInfo
                size={14}
                className="text-blue-500 flex-shrink-0 mt-0.5"
              />
              This result is AI-generated based on the data sources and
              assumptions listed below. Please review before making any trade
              decisions.
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4">
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-base font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <MdOutlineRocketLaunch className="text-teal-500 text-base" />{" "}
                    Your Query
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiMap className="text-blue-500 text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                          Best shipment option for exporting 500kg of cotton
                          t-shirt (100% cotton, knitted) from Tirupur, India to
                          Dubai, UAE by air. Include HS code, duty, incentives,
                          and total landed cost.
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs font-medium  text-gray-400">
                          <span>Query ID: AIQ-2025-04-24-000123</span>
                          <span>• 24 Apr 2025, 09:25 AM</span>
                          <span>• User: Arjun Soni</span>
                        </div>
                      </div>
                      <button className="flex-shrink-0 flex items-center text-xs gap-1 border border-gray-200 bg-white text-gray-500 text-[10px] px-2 py-1 rounded-md hover:bg-gray-50">
                        <FiCopy size={14} /> Copy Query
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <p className="text-base sm:text-lg  font-bold text-gray-900 flex items-center gap-2">
                      <FiStar className="text-teal-500 text-base" /> AI
                      Recommended Summary
                    </p>
                    <div className="flex gap-3">
                      <button className="flex items-center  gap-1 text-xs text-blue-500 font-medium">
                        <FiDatabase size={12} /> Data Sources (6)
                      </button>
                      <button className="flex items-center gap-1 text-xs font-medium text-gray-400">
                        <FiAlertCircle size={12} /> Disclaimer
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                    {recCards.map((card, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col"
                      >
                        <p className="text-sm text-gray-500 font-medium mb-1">
                          {card.label}
                        </p>
                        {card.route ? (
                          <>
                            <p className="text-[11px] font-bold text-gray-800 mb-0.5">
                              Route
                            </p>
                            <p className="text-sm font-bold text-gray-900 mb-2">
                              {card.route}
                            </p>
                          </>
                        ) : (
                          <>
                            <p
                              className={`text-xl font-bold mb-1 ${
                                card.mainColor || "text-gray-900"
                              }`}
                            >
                              {card.main}
                            </p>
                            <p className="text-xs font-medium  text-gray-500 mb-2 leading-tight">
                              {card.sub}
                            </p>
                          </>
                        )}
                        <div className="flex flex-col gap-1 flex-1">
                          {card.rows.map(([k, v], j) => (
                            <div
                              key={j}
                              className="flex justify-between text-[10px]"
                            >
                              <span className="text-gray-500 text-xs font-medium">
                                {k}
                              </span>
                              <span className="text-gray-800   text-xs font-medium">
                                {v}
                              </span>
                            </div>
                          ))}
                          {card.freightCost && (
                            <p className="text-base font-bold text-gray-900 mt-1">
                              {card.freightCost}
                            </p>
                          )}
                        </div>
                        <button className="text-teal-500 text-xs sm:text-sm font-medium text-left mt-2 hover:underline">
                          {card.link}
                        </button>
                        <button className="mt-2 w-full border border-teal-500 text-teal-500 text-xs    font-semibold py-1.5 rounded-lg hover:bg-teal-50">
                          Create Shipment from this Result
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FiClipboard className="text-teal-500 text-base" /> Detailed
                    AI Analysis
                  </p>

                  <div className="flex overflow-x-auto border-b border-gray-200 mb-4 gap-1 pb-0">
                    {analysisTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setAnalysisTab(tab)}
                        className={`px-3 py-2 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors
                        ${
                          analysisTab === tab
                            ? "border-teal-500 text-teal-500"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {content.left.map(([k, v], i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-xs">
                        <span className="text-gray-500">{k}</span>
                        <span className={`font-medium text-right max-w-[55%] ${k === "Total Landed Cost" || k === "Total Incentive" ? "text-teal-600" : "text-gray-800"}`}>
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 h-fit">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-yellow-800 mb-2">
                      <FiStar size={12} className="text-yellow-500" /> AI Insight
                    </p>
                    <p className="text-xs text-yellow-900 leading-relaxed">{content.insight}</p>
                  </div>
                </div> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      {content.left.map(([k, v], i) => (
                        <div
                          key={i}
                          className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-xs"
                        >
                          <span className="text-gray-500  font-medium text-sm">
                            {k}
                          </span>

                          <span
                            className={`font-medium text-sm  sm:text-sm text-right max-w-[55%] ${
                              k === "Total Landed Cost" ||
                              k === "Total Incentive"
                                ? "text-teal-600"
                                : "text-gray-800"
                            }`}
                          >
                            {v}
                          </span>
                        </div>
                      ))}

                      <button className="mt-3 font-xs font-semibold text-blue-600 hover:text-blue-700">
                        {content.tariffLink}
                      </button>

                      <button className="mt-4 w-full border  border-gray-200 bg-white text-teal-600 text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-50">
                        {content.buttonText}
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                        <p className="flex items-center gap-1.5 text-sm font-semibold text-emerald-800 mb-2">
                          <FiStar size={12} className="text-emerald-500" />
                          AI Insight
                        </p>

                        <p className="text-sm font-medium text-emerald-900 leading-relaxed">
                          {content.insight}
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <p className="flex items-center gap-1.5 t text-sm font-semibold text-gray-700 mb-2">
                          <FiClipboard size={12} />
                          Assumptions
                        </p>

                        <p className="text-sm font-medium text-gray-600 leading-relaxed">
                          {content.assumption}
                        </p>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <p className="flex items-center gap-1.5 text-sm font-semibold text-orange-700 mb-2">
                          <FiAlertCircle size={12} />
                          Disclaimer
                        </p>

                        <p className="text-sm font-medium text-orange-800 leading-relaxed">
                          {content.disclaimer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm sm:text-base font-bold text-gray-900 mb-3">
                    Result Summary
                  </p>
                  {resultSummary.map(
                    (
                      {
                        icon: Icon,
                        label,
                        value,
                        iconColor,
                        small,
                        valueColor,
                      },
                      i
                    ) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-xs font-medium"
                      >
                        <div
                          className={`flex items-center text-sm font-medium gap-2 text-gray-500`}
                        >
                          <Icon size={14} className={iconColor} /> {label}
                        </div>
                        <span
                          className={`font-medium text-right max-w-[50%] ${
                            valueColor || "text-gray-900"
                          } ${small ? "text-sm font-medium " : "text-sm font-medium"}`}
                        >
                          {value}
                        </span>
                      </div>
                    )
                  )}
                  <button className="mt-3 w-full bg-teal-500 hover:bg-teal-600 text-white text-sm   font-semibold py-2.5 rounded-xl">
                    Create Shipment from this Result
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm sm:text-base font-bold   text-gray-900 mb-3">
                    Report Information
                  </p>
                  {[
                    ["Report ID", "AIR-2025-04-24-000123"],
                    ["Generated On", "24 Apr 2025, 09:25 AM"],
                    ["Generated By", "Arjun Soni"],
                    ["Plan", "Pro Plan"],
                    ["AI Model Version", "v2.1.0"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between py-1.5 text-[11px]"
                    >
                      <span className="text-gray-500 text-sm  font-medium">
                        {k}
                      </span>
                      <span className="text-gray-800  text-sm font-medium">
                        {v}
                      </span>
                    </div>
                  ))}
                  <button className="mt-3 w-full flex items-center justify-center gap-2 border text-sm  border-gray-200 bg-white text-gray-700 t s font-medium py-2 rounded-lg hover:bg-gray-50">
                    <FiDownload size={13} /> Download Report (PDF)
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                    Save & Share
                  </p>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    Save this report for future reference or share with your
                    team.
                  </p>
                  <div className="grid grid-cols-1 gap-2 pz">
                    <button className="flex items-center justify-center whitespace-nowrap  gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50">
                      <FiBookmark size={16} /> Save to Saved Reports
                    </button>
                    <button className="flex items-center justify-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50">
                      <FiShare2 size={16} /> Share Report
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm sm:text-base font-bold text-gray-900">
                      Audit Log (This Query)
                    </p>
                    <button className="text-teal-500 text-sm font-medium hover:underline">
                      View All
                    </button>
                  </div>
                  {auditLog.map((entry, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 py-1.5 border-b border-gray-100 last:border-0"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${entry.color} flex-shrink-0 mt-1`}
                      />
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {entry.time}
                      </span>
                      <span className="text-xs font-medium   text-gray-600">
                        {entry.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
                  Data Sources Used
                </h3>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2  text-gray-700">
                    <FiDatabase size={14} />
                    DGFT (India)
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FiDatabase size={14} />
                    ICEGATE
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FiDatabase size={14} />
                    Shipping Lines
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FiDatabase size={14} />
                    Customs (UAE)
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FiDatabase size={14} />
                    Trade APIs
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <FiDatabase size={14} />
                    Market Data
                  </div>
                </div>

                <button className="mt-4 text-teal-500 text-xs sm:text-sm font-medium hover:underline">
                  View All Sources
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
                  Connected To Live Data
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  All modules are connected to backend systems and databases for
                  real-time, accurate information.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs sm:text-sm font-medium text-emerald-700">
                    Connected
                  </span>
                </div>
              </div>

              <div className="bg-white  rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm  sm:text-base font-medium text-gray-900 mb-4">
                  Need Help?
                </h3>

                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-4">
                  Our trade experts are here to help you.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-gray-700">
                    <FiPhone />
                    +91 22 1234 5678
                  </div>

                  <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-gray-700">
                    <FiSend />
                    support@asdcargomate.com
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="/support-agent.png"
                  alt="Support"
                  className="h-24 object-contain"
                />
              </div>
            </div>
          </main>
        </div>
      )}

      {activeTab === "HS Code Lookup" && <HSCodeLookup />}
      {activeTab === "Incentive Checker" && <IncentiveChecker />}
      {activeTab === "Shipment Planning" && <ShipmentPlanning />}
    </div>
  );
}
{
}
