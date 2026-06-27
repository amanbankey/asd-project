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
//   FaAngleDown,
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
//   FaDollarSign,
//   FaBoxOpen,
//   FaChartLine,
//   FaClipboardCheck,
// } from "react-icons/fa";
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
// import up from "../../assets/icon/up.png";
// import us from "../../assets/icon/us.png";

// import logo from "../../assets/Images/logo.png";

// import { BsCalendarCheck, BsPersonPlus, BsGraphUp } from "react-icons/bs";
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { RiWhatsappLine } from "react-icons/ri";
// import { FiX } from "react-icons/fi";

// import map from "../../assets/Images/logo.png";
// import india from "../../assets/icon/india.png";
// import jpn from "../../assets/icon/jpn.png";

// import home from "../../assets/icon/home.png";
// import china from "../../assets/icon/china.png";

// import user from "../../assets/icon/user.png";
// import exportInt from "../../assets/icon/orders.png";
// import supplier from "../../assets/icon/suppliers.png";

// import buyer from "../../assets/icon/Buyers.png";

// import analytical from "../../assets/icon/analytical.png";

// import document from "../../assets/icon/document.png";

// import payment from "../../assets/icon/payment.png";
// import ai from "../../assets/icon/ai.png";

// import support from "../../assets/icon/supportCenter.png";
// import setting from "../../assets/icon/setting.png";

// import report from "../../assets/icon/report.png";
// import insight from "../../assets/icon/insight.png";

// import germany from "../../assets/icon/germany.png";
// import risk from "../../assets/icon/risk.png";
// import settings from "../../assets/icon/settings.png";
// import cargo from "../../assets/icon/cargo.png";
// import world from "../../assets/icon/world.png";
// import port from "../../assets/icon/port.png";
// import live from "../../assets/icon/live.png";
// import data from "../../assets/icon/data.png";

// import active from "../../assets/icon/active.png";
// import highrisk from "../../assets/icon/highrisk.png";
// import customs from "../../assets/icon/customs.png";
// import portconn from "../../assets/icon/portconn.png";
// import montly from "../../assets/icon/monthly.png";
// import total from "../../assets/icon/total.png";

// const mapPins = [
//   { top: "28%", left: "18%", label: "🇺🇸", value: "$2.8M", bg: "bg-blue-200" },
//   { top: "22%", left: "46%", label: "🇩🇪", value: "$1.4M", bg: "bg-teal-200" },
//   { top: "35%", left: "60%", label: "🇮🇳", value: "$4.3M", bg: "bg-purple-200" },
//   { top: "55%", left: "27%", label: "🇧🇷", value: "$2.4M", bg: "bg-green-300" },
//   { top: "62%", left: "72%", label: "🇦🇺", value: "$1.4M", bg: "bg-yellow-200" },
// ];



// const statCards = [
//   {
//     label: "Live Shipment",
//     value: "236",
//     change: "28.4%",
//     icon: live,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#D1FAF5]",
//   },
//   {
//     label: "Country covered",
//     value: "236",
//     change: "28.4%",
//     icon: world,
//     color: "bg-[#FDECCE]",
//     text: "text-[#FDECCE]",
//   },

//   {
//     label: "Port connected",
//     value: "4,320",
//     change: "28.4%",
//     icon: portconn,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#14B8A6]",
//   },
//   {
//     label: "Data Updated",
//     value: "2 min ago",
//     change: "28.4%",
//     icon: data,
//     color: "bg-[#FDECCE]",
//     text: "text-[#D1FAF5]",
//   }, 
//   {
//     label: "Total Shipment",
//     value: "12,450",
//     change: "28.4%",
//     icon: cargo,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#D1FAF5]",
//   },
  
//   {
//     label: "Active Importers",
//     value: "24,875",
//     change: "28.4%",
//     icon: active,
//     color: "bg-[#FDECCE]",
//     text: "text-[#FDECCE]",
//   },
//   {
//     label: "Monthly Shipment value",
//     value: "12420",
//     change: "28.4%",
//     icon: montly,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#14B8A6]",
//   },
//   {
//     label: "Monthly import growth",
//     value: "15.62%",
//     change: "28.4%",
//     icon: total,
//     color: "bg-[#FDECCE]",
//     text: "text-[#FDECCE]",
//   },
//   {
//     label: "Port Activity",
//     value: "2558",
//     change: "28.4%",
//     icon: port,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#14B8A6]",
//   },
//   {
//     label: "Custom Clearance Rate",
//     value: "97%",
//     change: "28.4%",
//     icon: customs,
//     color: "bg-[#FDECCE]",
//     text: "text-[#FDECCE]",
//   },
//   {
//     label: "High risk shipment",
//     value: "97%",
//     change: "28.4%",
//     icon: highrisk,
//     color: "bg-[#D1FAF5]",
//     text: "text-[#FDECCE]",
//   },
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

// const countries = [
//   {
//     flag: us,
//     country: "United States",
//     importValue: "₹ 300k",
//     growth: "28.4%",
//   },
//   {
//     flag: germany,
//     country: "Germany",
//     importValue: "₹ 500k",
//     growth: "22.1%",
//   },
//   {
//     flag: china,
//     country: "China",
//     importValue: "₹ 3.50k",
//     growth: "18.2%",
//   },
//   {
//     flag: india,
//     country: "India",
//     importValue: "₹ 800k",
//     growth: "16.3%",
//   },
//   {
//     flag: jpn,
//     country: "Japan",
//     importValue: "₹ 800k",
//     growth: "16.3%",
//   },
//   {
//     flag: jpn,
//     country: "Japan",
//     importValue: "₹ 800k",
//     growth: "16.3%",
//   },
//   {
//     flag: jpn,
//     country: "Japan",
//     importValue: "₹ 800k",
//     growth: "16.3%",
//   },
// ];

// const insightt = [
//   { label: "Delivered", percent: 34.58, color: "#1FBC95" },
//   { label: "In Transit", percent: 34.58, color: "#3F88FC" },
//   { label: "Verified", percent: 34.58, color: "#8054E8" },
//   { label: "Custom hold ", percent: 34.58, color: "#F3846E" },
//   { label: "Priority", percent: 34.58, color: "#B8B8B8" },
// ];

// const trendData = [
//   { date: 1, month: "May", val: 2.5 },
//   { date: 8, month: "May", val: 4 },
//   { date: 15, month: "May", val: 3 },
//   { date: 22, month: "May", val: 7 },
//   { date: 29, month: "May", val: 5.5 },
//   { date: 1, month: "June", val: 4 },
// ];

// const shipmentData = [
//   { label: "01 May", shipment: 4200, tradeValue: 15 },
//   { label: "04 May", shipment: 4800, tradeValue: 35 },
//   { label: "08 May", shipment: 9500, tradeValue: 20 },
//   { label: "15 May", shipment: 11200, tradeValue: 55 },
//   { label: "22 May", shipment: 7800, tradeValue: 26 },
//   { label: "29 May", shipment: 10500, tradeValue: 23 },
//   { label: "1 june", shipment: 8200, tradeValue: 58 },
//   { label: "5 june", shipment: 8200, tradeValue: 48 },
// ];

// function smoothPath(points, xScale, yScale) {
//   const pts = points.map((p, i) => ({ x: xScale(i), y: yScale(p) }));
//   let d = `M ${pts[0].x} ${pts[0].y}`;
//   for (let i = 0; i < pts.length - 1; i++) {
//     const cp1x = pts[i].x + (pts[i + 1].x - pts[i].x) * 0.5;
//     const cp2x = cp1x;
//     d += ` C ${cp1x} ${pts[i].y}, ${cp2x} ${pts[i + 1].y}, ${pts[i + 1].x} ${
//       pts[i + 1].y
//     }`;
//   }
//   return d;
// }

// function TradeActivityChart() {
//   const [period, setPeriod] = useState("Monthly");

//   const W = 1000,
//     H = 180;
//   const padL = 48,
//     padR = 52,
//     padT = 14,
//     padB = 32;
//   const chartW = W - padL - padR;
//   const chartH = H - padT - padB;
//   const maxShipment = 15000;
//   const maxTrade = 60;

//   const xScale = (i) => padL + (i / (shipmentData.length - 1)) * chartW;
//   const yScaleShipment = (v) => padT + chartH - (v / maxShipment) * chartH;
//   const yScaleTrade = (v) => padT + chartH - (v / maxTrade) * chartH;

//   const tradeLine = smoothPath(
//     shipmentData.map((d) => d.tradeValue),
//     xScale,
//     yScaleTrade
//   );
//   const tradeArea =
//     tradeLine +
//     ` L ${xScale(shipmentData.length - 1)} ${padT + chartH} L ${xScale(0)} ${
//       padT + chartH
//     } Z`;

//   const yLabelsLeft = [0, 5000, 10000, 15000];
//   const yLabelsRight = [0, 20, 40, 60];

//   return (
//     <div className="bg-white rounded-2xl border border-slate-100 shadow-md  sm:p-5 py-3 w-full ">
//       <div className="px-5 ">
//         <h1 className="text-sm md:text-2xl px-2 py-2 font-medium">
//           Trade Activity (This Month){" "}
//         </h1>
//       </div>

//       <div className="flex gap-4 mb-3 px-8">
//         <div className="flex items-center gap-1.5">
//           <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
//           <span className="text-xs sm:text-lg text-slate-500">Shipment</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
//           <span className="text-xs sm:text-lg text-slate-500">Trade Value</span>
//         </div>
//       </div>

//       <div className="w-full overflow-x-auto">
//         <svg
//           viewBox={`0 0 ${W} ${H}`}
//           className="w-full min-w-[300px] h-auto"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="tradeGrad" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
//               <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.02" />
//             </linearGradient>
//           </defs>

//           {yLabelsLeft.map((v, i) => (
//             <g key={i}>
//               <line
//                 x1={padL}
//                 x2={W - padR}
//                 y1={yScaleShipment(v)}
//                 y2={yScaleShipment(v)}
//                 stroke="#f1f5f9"
//                 strokeWidth="1"
//               />
//               <text
//                 className="text-sm sm:text-lg text-[#3D3D3D] "
//                 x={padL - 6}
//                 y={yScaleShipment(v) + 4}
//                 textAnchor="end"
//                 fontSize="10"
//                 fill="#94a3b8"
//               >
//                 {v === 0 ? "0" : `${v / 1000}k`}
//               </text>
//             </g>
//           ))}

//           {yLabelsRight.map((v, i) => (
//             <text
//               className="text-sm sm:text-lg text-[#3D3D3D] "
//               key={i}
//               x={W - padR + 8}
//               y={yScaleTrade(v) + 4}
//               textAnchor="start"
//               fontSize="10"
//               fill="#2dd4bf"
//               fontWeight="600"
//             >
//               {v === 0 ? "0" : `${v}B`}
//             </text>
//           ))}

//           <path d={tradeArea} fill="url(#tradeGrad)" />
//           <path
//             d={tradeLine}
//             fill="none"
//             stroke="#2dd4bf"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />

//           {shipmentData.map((d, i) => (
//             <circle
//               key={i}
//               cx={xScale(i)}
//               cy={yScaleTrade(d.tradeValue)}
//               r="4"
//               fill="white"
//               stroke="#2dd4bf"
//               strokeWidth="2"
//             />
//           ))}

//           {shipmentData.map((d, i) => (
//             <text
//               className="text-xs sm:text-sm"
//               key={i}
//               x={xScale(i)}
//               y={H - 4}
//               textAnchor="middle"
//               fontSize="10"
//               fill="#94a3b8"
//             >
//               {d.label}
//             </text>
//           ))}
//         </svg>
//       </div>
//     </div>
//   );
// }

// function WorldMap() {
//   return (
//     <div className="relative w-full h-44 flex justify-center bg-blue-50 rounded-xl overflow-hidden">
//       <img src="https://res.cloudinary.com/dhuabv2it/image/upload/v1778229817/Map_hhooem.webp" />
//     </div>
//   );
// }



//   function AdvancedFilters() {
//   const [formData, setFormData] = useState({
//     country: "",
//     port: "",
//     shipmentType: "",
//     hsCode: "",
//     productCategory: "",
//     importer: "",
//     exporter: "",
//     startDate: "",
//     endDate: "",
//     shipmentValueMin: "",
//     shipmentValueMax: "",
//     quantityMin: "",
//     quantityMax: "",
//     customStatus: "",
//     shippingLine: "",
//     containerType: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//     };

//     console.log(payload);
//   };

//   const handleReset = () => {
//     setFormData({
//       country: "",
//       port: "",
//       shipmentType: "",
//       hsCode: "",
//       productCategory: "",
//       importer: "",
//       exporter: "",
//       startDate: "",
//       endDate: "",
//       shipmentValueMin: "",
//       shipmentValueMax: "",
//       quantityMin: "",
//       quantityMax: "",
//       customStatus: "",
//       shippingLine: "",
//       containerType: "",
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-md  p-4 sm:p-6 lg:p-8">
//       <h2 className="text-lg  font-medium mb-6">
//         Advanced Filters
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Country</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Port</label>
//               <input
//                 type="text"
//                 name="port"
//                 value={formData.port}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Shipment Type</label>
//               <input
//                 type="text"
//                 name="shipmentType"
//                 value={formData.shipmentType}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">HS Code</label>
//               <input
//                 type="text"
//                 name="hsCode"
//                 value={formData.hsCode}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Product Category</label>
//               <input
//                 type="text"
//                 name="productCategory"
//                 value={formData.productCategory}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Importer</label>
//               <input
//                 type="text"
//                 name="importer"
//                 value={formData.importer}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 items-center">
//               <label className="font-medium text-sm   text-[#525252]">Exporter</label>
//               <input
//                 type="text"
//                 name="exporter"
//                 value={formData.exporter}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <label className="block mb-2 font-medium text-sm text-[#525252]">Date Range</label>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />

//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2 font-medium   text-sm text-[#525252]">
//                 Shipment Value (USD)
//               </label>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <input
//                   type="number"
//                   name="shipmentValueMin"
//                   placeholder="Min"
//                   value={formData.shipmentValueMin}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />

//                 <input
//                   type="number"
//                   name="shipmentValueMax"
//                   placeholder="Max"
//                   value={formData.shipmentValueMax}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2 font-medium    text-sm text-[#525252]">
//                 Quantity Range
//               </label>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <input
//                   type="number"
//                   name="quantityMin"
//                   placeholder="Min"
//                   value={formData.quantityMin}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />

//                 <input
//                   type="number"
//                   name="quantityMax"
//                   placeholder="Max"
//                   value={formData.quantityMax}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 space-y-4">
//           <div>
//             <label className="block mb-2  font-medium text-sm   text-[#525252]">Custom Status</label>
//             <input
//               type="text"
//               name="customStatus"
//               value={formData.customStatus}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="block mb-2  font-medium text-sm   text-[#525252]">Shipping Line</label>
//             <input
//               type="text"
//               name="shippingLine"
//               value={formData.shippingLine}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium text-sm   text-[#525252]">Container Type</label>
//             <input
//               type="text"
//               name="containerType"
//               value={formData.containerType}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <button
//             type="submit"
//             className="w-full bg-[#398CE0] font-medium text-sm text-white py-3 rounded-lg"
//           >
//             Apply Filters
//           </button>

//           <button
//             type="button"
//             onClick={handleReset}
//             className="w-full border py-3 font-normal text-[#666666]  text-sm rounded-lg"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="mt-4 flex justify-center">
//           <button
//             type="button"
//             className="w-full sm:w-[300px] text-[#666666]  text-sm border py-3 rounded-lg"
//           >
//             Save Preset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default function ShipmentDatabase() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("Dashboard");
//   const { activeSubTab, setActiveSubTab } = useState("");
//   const [trendPeriod, setTrendPeriod] = useState("Monthly");

//   const [chatInput, setChatInput] = useState("");
//   const riskColor = {
//     Low: "bg-teal-100 text-teal-600",
//     Medium: "bg-orange-100 text-orange-500",
//     High: "bg-red-100 text-red-500",
//   };

//   const size = 160;
//   const cx = size / 2,
//     cy = size / 2;
//   const R = 60,
//     r = 40;
//   const gap = 0;
//   const total = insightt.reduce((s, d) => s + parseFloat(d.percent), 0);
//   let angle = -90;

//   const slices = insightt.map((d) => {
//     const val = parseFloat(d.percent);
//     const sweep = (val / total) * 360;
//     const startAngle = angle;
//     angle += sweep + gap;
//     return { ...d, startAngle, sweep: sweep - gap };
//   });

//   const toRad = (deg) => (deg * Math.PI) / 180;
//   const arcPath = (start, sweep) => {
//     const x1 = cx + R * Math.cos(toRad(start));
//     const y1 = cy + R * Math.sin(toRad(start));
//     const x2 = cx + R * Math.cos(toRad(start + sweep));
//     const y2 = cy + R * Math.sin(toRad(start + sweep));
//     const ix1 = cx + r * Math.cos(toRad(start + sweep));
//     const iy1 = cy + r * Math.sin(toRad(start + sweep));
//     const ix2 = cx + r * Math.cos(toRad(start));
//     const iy2 = cy + r * Math.sin(toRad(start));
//     const large = sweep > 180 ? 1 : 0;
//     return `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${r} ${r} 0 ${large} 0 ${ix2} ${iy2} Z`;
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden font-sans  ">
//       <main className="flex-1 overflow-y-auto bg-gray-50 sm:px-10 px-1  ">
//         <div
//           className="min-h-screen bg-gray-50 p-4 lg:p-1 xl:p-6 "
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           <link
//             href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
//             rel="stylesheet"
//           />
//           <div className="max-w-7xl mx-auto ">
//             <div className="mb-5">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 ">
//                 Global Shipment Database
//               </h1>
//               <p className="text-xs sm:text-lg text-gray-600 mt-0.5">
//                 AI powered export shipment Analytics and trade intelligence
//               </p>
//             </div>

//             {/* STAT CARDS */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
//               {statCards.map((s) => (
//                 <div
//                   key={s.label}
//                   className="bg-white h-fit  flex w-full  max-w-72 gap-3 rounded-2xl  shadow-md p-3"
//                 >
//                   <div
//                     className={` ${s.color} w-8 h-8 hidden sm:flex items-center justify-center rounded-md `}
//                   >
//                     {typeof s.icon === "string" ? (
//                       <img src={s.icon} alt="" className="w-5 h-5 " />
//                     ) : (
//                       s.icon && <s.icon size={18} className={` ${s.text} `} />
//                     )}
//                   </div>
//                   <div className="flex flex-col gap-3 p-1 sm:p-0 w-full">
//                 <p className="text-xs sm:text-sm text-[#787B7F] leading-tight">
//                   {s.label}
//                 </p>
//                 <div className="flex items-end justify-between w-full gap-2">
//                   <p className="text-xs md:text-sm xl:text-xl font-semibold text-gray-800">
//                     {s.value}
//                   </p>
//                   <p className="text-xs text-[#31FF07] flex items-center gap-0.5 font-medium">
//                     <img src={up} alt="arrow" className="w-3 h-3" />
//                     {s.change}
//                   </p>
//                 </div>
//               </div>
//                 </div>
//               ))}
//                 <div
//                   // key={s.label}
//                   className="bg-[#D1FAF5]  flex w-full  max-w-72 gap-2 rounded-2xl  shadow-md p-4"
//                 >
//                   <div
//                     className={`  w-12 h-8 hidden sm:flex items-center justify-center `}
//                   >
                 
//                       <img src={settings} alt="" className="w-5 h-5" />
                   
//                   </div>
//                   <div className="flex flex-col gap-1 c ">
//                     <div className="flex gap-3  ">
//                       <p className="text-xs sm:text-sm md:text-lg font-semiBold  mb-1 leading-tight">
//                         AI Insights
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-end justify-between">
//                       <p className="text-xs sm:text-base md:text-lg  text-[#787B7F]">
//                       Electronics Shipment From China to USA Increased by 18.6% this month. 
//                       </p>
//                       <p className="text-xs sm:text-base  text-[#398CE0] flex items-center gap-0.5 mt-0.5 font-medium">
//                       View Detail
//                       </p>{" "}
//                     </div>
//                   </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4  ">
//               <div className="bg-white rounded-3xl  max-h-96 xl:max-h-fit shadow-md p-5 ">
//                 <h2 className="text-lg sm:text-xl font-medium text-black mb-4">
//                   Global Shipment Map
//                 </h2>

//                 <WorldMap />

//                 <div className="grid grid-cols-4 gap-3 mt-6">
//                   {globalTrade.map((val, id) => (
//                     <div
//                       key={id}
//                       className="border border-gray-200 rounded-xl p-2"
//                     >
//                       <p
//                         className={`text-[0.4rem] sm:text-[0.5rem] whitespace-nowrap font-medium ${val.color}`}
//                       >
//                         {val.name}
//                       </p>

//                       <p className="text-xs sm:text-[0.8rem] font-bold text-black">
//                         {val.no}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="lg:col-span-2 col-span-1 flex flex-col   ">
//                   <AdvancedFilters />
//               </div>
//             </div>

            
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }






import React, { useState, useMemo } from 'react';
import { 
  Calendar, ChevronDown, List, ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown, HelpCircle, Columns,
  Filter, RotateCcw, Search, SlidersHorizontal, FileSpreadsheet, LayoutGrid
} from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

export default function ShipmentDatabase() {
  // Static Raw Data
  const rawShipmentsData = [
    { id: 'SHP-2025-1045', hs: '85', desc: 'Electrical Machinery & Equipment', importer: 'ABCImports Pvt. Ltd.', exporter: 'Global Exports Inc.', origin: 'China', originCode: 'CN', dest: 'India', destCode: 'IN', loading: 'Shenzhen', discharge: 'Nhava Sheva', shipDate: '24 Apr 2025', arrDate: '28 Apr 2025', value: 45.60, status: 'Delivered' },
    { id: 'SHP-2025-1044', hs: '84', desc: 'Machinery & Mechanical Appliances', importer: 'Global Retail Ltd.', exporter: 'Techno Trade Co.', origin: 'Germany', originCode: 'DE', dest: 'UAE', destCode: 'AE', loading: 'Hamburg', discharge: 'Jebel Ali', shipDate: '23 Apr 2025', arrDate: '27 Apr 2025', value: 38.75, status: 'Delivered' },
    { id: 'SHP-2025-1043', hs: '90', desc: 'Optical, Medical & Precision Instruments', importer: 'Medilink Pvt. Ltd.', exporter: 'Opto Instruments GmbH', origin: 'USA', originCode: 'US', dest: 'India', destCode: 'IN', loading: 'Los Angeles', discharge: 'Mumbai (JNPT)', shipDate: '22 Apr 2025', arrDate: '26 Apr 2025', value: 28.30, status: 'In Transit' },
    { id: 'SHP-2025-1042', hs: '39', desc: 'Plastics & Articles', importer: 'Prime Industries', exporter: 'Polymer Exports Ltd.', origin: 'UAE', originCode: 'AE', dest: 'India', destCode: 'IN', loading: 'Jebel Ali', discharge: 'Nhava Sheva', shipDate: '21 Apr 2025', arrDate: '24 Apr 2025', value: 18.90, status: 'In Transit' },
    { id: 'SHP-2025-1041', hs: '72', desc: 'Iron & Steel', importer: 'Shree Steel Pvt.Ltd.', exporter: 'Euro Steel AG', origin: 'Russia', originCode: 'RU', dest: 'India', destCode: 'IN', loading: 'Novorossiysk', discharge: 'Kandla', shipDate: '20 Apr 2025', arrDate: '25 Apr 2025', value: 16.20, status: 'Pending' },
    { id: 'SHP-2025-1040', hs: '27', desc: 'Mineral Fuels & Oils', importer: 'Energy India Ltd.', exporter: 'Gulf Petroleum LLC', origin: 'Saudi Arabia', originCode: 'SA', dest: 'India', destCode: 'IN', loading: 'Dammam', discharge: 'Tuticorin', shipDate: '19 Apr 2025', arrDate: '22 Apr 2025', value: 12.45, status: 'Delivered' },
    { id: 'SHP-2025-1039', hs: '30', desc: 'Pharmaceutical Products', importer: 'HealthCare Pvt. Ltd.', exporter: 'Pharma Global', origin: 'Switzerland', originCode: 'CH', dest: 'India', destCode: 'IN', loading: 'Basel', discharge: 'Mumbai (JNPT)', shipDate: '18 Apr 2025', arrDate: '21 Apr 2025', value: 11.30, status: 'Delivered' },
    { id: 'SHP-2025-1038', hs: '73', desc: 'Articles of Iron or Steel', importer: 'Metalix India Corp.', exporter: 'Metal Trade Corp.', origin: 'China', originCode: 'CN', dest: 'India', destCode: 'IN', loading: 'Tianjin', discharge: 'Nhava Sheva', shipDate: '17 Apr 2025', arrDate: '23 Apr 2025', value: 10.15, status: 'In Transit' },
    { id: 'SHP-2025-1037', hs: '62', desc: 'Articles of Apparel & Clothing Accessories', importer: 'Fashion Hub', exporter: 'Style Tex Ltd.', origin: 'Bangladesh', originCode: 'BD', dest: 'India', destCode: 'IN', loading: 'Chattogram', discharge: 'Kolkata', shipDate: '16 Apr 2025', arrDate: '20 Apr 2025', value: 8.75, status: 'Delivered' },
    { id: 'SHP-2025-1036', hs: '48', desc: 'Paper & Paperboard Articles', importer: 'Packwell Industries', exporter: 'Paper Source LLC', origin: 'Brazil', originCode: 'BR', dest: 'India', destCode: 'IN', loading: 'Santos', discharge: 'Cochin', shipDate: '15 Apr 2025', arrDate: '19 Apr 2025', value: 7.60, status: 'Pending' },
  ];

  // --- STATES FOR FILTERING ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('All Countries');
  const [selectedDest, setSelectedDest] = useState('All Countries');
  const [selectedImporter, setSelectedImporter] = useState('All Importers');
  const [selectedExporter, setSelectedExporter] = useState('All Exporters');
  const [selectedPort, setSelectedPort] = useState('All Ports');

  // --- DYNAMIC DROPDOWN OPTIONS GENERATION ---
  const uniqueOrigins = useMemo(() => ['All Countries', ...new Set(rawShipmentsData.map(s => s.origin))], []);
  const uniqueDests = useMemo(() => ['All Countries', ...new Set(rawShipmentsData.map(s => s.dest))], []);
  const uniqueImporters = useMemo(() => ['All Importers', ...new Set(rawShipmentsData.map(s => s.importer))], []);
  const uniqueExporters = useMemo(() => ['All Exporters', ...new Set(rawShipmentsData.map(s => s.exporter))], []);
  const uniquePorts = useMemo(() => ['All Ports', ...new Set(rawShipmentsData.map(s => s.loading))], []);

  // --- RESET FILTER FUNCTION ---
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedOrigin('All Countries');
    setSelectedDest('All Countries');
    setSelectedImporter('All Importers');
    setSelectedExporter('All Exporters');
    setSelectedPort('All Ports');
  };

  // --- DYNAMIC SEARCH & FILTER LOGIC ---
  const filteredShipments = useMemo(() => {
    return rawShipmentsData.filter(shipment => {
      const matchesSearch = 
        shipment.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.hs.includes(searchTerm) ||
        shipment.id.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesOrigin = selectedOrigin === 'All Countries' || shipment.origin === selectedOrigin;
      const matchesDest = selectedDest === 'All Countries' || shipment.dest === selectedDest;
      const matchesImporter = selectedImporter === 'All Importers' || shipment.importer === selectedImporter;
      const matchesExporter = selectedExporter === 'All Exporters' || shipment.exporter === selectedExporter;
      const matchesPort = selectedPort === 'All Ports' || shipment.loading === selectedPort;

      return matchesSearch && matchesOrigin && matchesDest && matchesImporter && matchesExporter && matchesPort;
    });
  }, [searchTerm, selectedOrigin, selectedDest, selectedImporter, selectedExporter, selectedPort]);

  // --- DYNAMIC COUNTERS & STATS COMPUTATION ---
  const totalValue = useMemo(() => {
    return filteredShipments.reduce((sum, item) => sum + item.value, 0).toFixed(2);
  }, [filteredShipments]);

  const uniqueExportersCount = useMemo(() => {
    return new Set(filteredShipments.map(s => s.exporter)).size;
  }, [filteredShipments]);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 font-sans text-slate-700 pt-14">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Shipment Database</h1>
          <p className="text-sm text-slate-500 mt-0.5">Explore detailed global shipment records with advanced search and filters.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>01 Apr 2025 - 24 Apr 2025</span>
          </button>
          
          <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export Excel</span>
          </button>
          
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors">
            <Filter className="w-4 h-4" />
            <span>Advanced Filters</span>
          </button>
        </div>
      </div>

      {/* --- DYNAMIC STATS CARDS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
        {/* Total Shipments - Dynamic */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-slate-600  tracking-wider">Total Shipments</span>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">📦</div>
            
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-800">{filteredShipments.length}</h3>
            <span className="text-[11px] text-green-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> Live Match
            </span>
          </div>
        </div>

        {/* Total Value - Dynamic */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-slate-600  tracking-wider">Total Value</span>
            <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">₹</div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-800">₹{totalValue} Cr</h3>
            <span className="text-[11px] text-green-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> Updated
            </span>
          </div>
        </div>

        {/* Total Exporters - Dynamic */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-slate-600  tracking-wider">Exporters</span>
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">👥</div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-800">{uniqueExportersCount}</h3>
            <span className="text-[11px] text-green-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> Active
            </span>
          </div>
        </div>

        {/* Baki Standard Static Cards Metrics Layout ke liye */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between"><div className="flex items-center justify-between"><span className="text-[13px] font-semibold text-slate-600  tracking-wider">Suppliers</span><div className="p-1.5 bg-cyan-50 text-cyan-600 rounded-lg">🚚</div></div><div className="mt-2"><h3 className="text-xl font-bold text-slate-800">320</h3></div></div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between"><div className="flex items-center justify-between"><span className="text-[13px] font-semibold text-slate-600  tracking-wider">Origins</span><div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">🌐</div></div><div className="mt-2"><h3 className="text-xl font-bold text-slate-800">68</h3></div></div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between"><div className="flex items-center justify-between"><span className="text-[13px] font-semibold text-slate-600  tracking-wider">Avg Value</span><div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg">🔶</div></div><div className="mt-2"><h3 className="text-xl font-bold text-slate-800">₹14.26 L</h3></div></div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between"><div className="flex items-center justify-between"><span className="text-[13px] font-semibold text-slate-600 tracking-wider">Lead Time</span><div className="p-1.5 bg-red-50 text-red-600 rounded-lg">⏱️</div></div><div className="mt-2"><h3 className="text-xl font-bold text-slate-800">18.6 d</h3></div></div>
      </div>

      {/* --- DYNAMIC FILTERS ROW BAR --- */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 items-end">
          
          {/* Input Search Box */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">HS Code / Product / ID</label>
            <div className="relative">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type to search..." 
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-blue-500" 
              />
              <Search className="w-3 h-3 absolute right-2.5 top-3 text-slate-400" />
            </div>
          </div>

          {/* Origin Dropdown */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Origin Country</label>
            <div className="relative">
              <select 
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 appearance-none focus:outline-none focus:border-blue-500"
              >
                {uniqueOrigins.map((country, i) => <option key={i} value={country}>{country}</option>)}
              </select>
              <SlidersHorizontal className="w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Destination Dropdown */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Destination</label>
            <div className="relative">
              <select 
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 appearance-none focus:outline-none focus:border-blue-500"
              >
                {uniqueDests.map((dest, i) => <option key={i} value={dest}>{dest}</option>)}
              </select>
              <SlidersHorizontal className="w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Importer Dropdown */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Importer</label>
            <div className="relative">
              <select 
                value={selectedImporter}
                onChange={(e) => setSelectedImporter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 appearance-none focus:outline-none focus:border-blue-500"
              >
                {uniqueImporters.map((imp, i) => <option key={i} value={imp}>{imp}</option>)}
              </select>
              <SlidersHorizontal className="w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Exporter Dropdown */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Exporters</label>
            <div className="relative">
              <select 
                value={selectedExporter}
                onChange={(e) => setSelectedExporter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 appearance-none focus:outline-none focus:border-blue-500"
              >
                {uniqueExporters.map((exp, i) => <option key={i} value={exp}>{exp}</option>)}
              </select>
              <SlidersHorizontal className="w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Loading Port Dropdown */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Port of Loading</label>
            <div className="relative">
              <select 
                value={selectedPort}
                onChange={(e) => setSelectedPort(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 appearance-none focus:outline-none focus:border-blue-500"
              >
                {uniquePorts.map((port, i) => <option key={i} value={port}>{port}</option>)}
              </select>
              <SlidersHorizontal className="w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Reset Filters Control */}
          <div className="flex gap-2">
            <button 
              onClick={handleResetFilters} 
              className="flex items-center justify-center border border-slate-200 text-red-500 hover:bg-red-50 rounded-lg px-4 py-2 bg-white shadow-sm font-semibold text-xs w-full transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
            </button>
          </div>

        </div>
      </div>

      {/* --- DATA TABLE CONTAINER --- */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/50">
          <div className="text-sm font-bold text-slate-800">
            Filtered: {filteredShipments.length} Results
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-3 py-1.5 rounded-lg shadow-sm hover:bg-slate-50">
              <Columns className="w-3.5 h-3.5 text-slate-400" /> Columns
            </button>
            <div className="flex items-center border border-slate-200 rounded-lg bg-white p-0.5 shadow-sm">
              <button className="p-1 bg-slate-100 text-slate-700 rounded-md"><List className="w-3.5 h-3.5" /></button>
              <button className="p-1 text-slate-400 hover:text-slate-600"><LayoutGrid className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Shipment ID</th>
                <th className="py-3 px-3">HS Code</th>
                <th className="py-3 px-4 max-w-[180px]">Product Description</th>
                <th className="py-3 px-4">Importer</th>
                <th className="py-3 px-4">Exporter</th>
                <th className="py-3 px-3">Origin</th>
                <th className="py-3 px-3">Dest</th>
                <th className="py-3 px-4">Port of Loading</th>
                <th className="py-3 px-4">Port of Discharge</th>
                <th className="py-3 px-3">Ship Date</th>
                <th className="py-3 px-3">Arr. Date</th>
                <th className="py-3 px-4 text-right">Value (INR)</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredShipments.length > 0 ? (
                filteredShipments.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-blue-600 hover:underline cursor-pointer whitespace-nowrap">{row.id}</td>
                    <td className="py-3.5 px-3 text-slate-500 font-medium">{row.hs}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 max-w-[180px] truncate" title={row.desc}>{row.desc}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{row.importer}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{row.exporter}</td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="mr-1.5 inline-flex align-middle shadow-sm rounded-sm overflow-hidden">
                        <ReactCountryFlag countryCode={row.originCode} svg style={{width: '18px', height: '13px'}} />
                      </span>
                      <span className="text-slate-600 font-medium align-middle">{row.origin}</span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="mr-1.5 inline-flex align-middle shadow-sm rounded-sm overflow-hidden">
                        <ReactCountryFlag countryCode={row.destCode} svg style={{width: '18px', height: '13px'}} />
                      </span>
                      <span className="text-slate-600 font-medium align-middle">{row.dest}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{row.loading}</td>
                    <td className="py-3.5 px-4 text-slate-500">{row.discharge}</td>
                    <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">{row.shipDate}</td>
                    <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">{row.arrDate}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-800 whitespace-nowrap">₹ {row.value.toFixed(2)} Cr</td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                        row.status === 'Delivered' ? 'bg-green-50 text-green-600' :
                        row.status === 'In Transit' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-400 hover:text-slate-600 cursor-pointer text-lg font-bold">⋮</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="14" className="text-center py-8 text-slate-400 font-medium">
                    No data found matching current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info pagination */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-slate-400">
            Showing {filteredShipments.length} rows
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-400"><ChevronLeft className="w-3.5 h-3.5" /></button>
            <button className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white border border-blue-600">1</button>
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500"><ChevronRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>

      </div>
    </div>
  );
}