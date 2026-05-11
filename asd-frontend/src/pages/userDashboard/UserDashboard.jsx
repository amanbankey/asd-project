import { useState } from "react";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMail,
  FiSun,
  FiMoon,
  FiPlus,
  FiUsers,
  FiShield,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiGlobe,
  FiPackage,
  FiTruck,
  FiCpu,
  FiPieChart,
  FiLink,
  FiMonitor,
  FiHelpCircle,
  FiGrid,
  FiSettings,
  FiChevronRight,
  FiUserPlus,
  FiUserCheck,
  FiPlusCircle,
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
  FiHome,
  FiCamera,
  FiLock,
  FiSend,
} from "react-icons/fi";
import {
  FaTrash,
  FaCheck,
  FaBox,
  FaBell,
  FaChevronLeft,
  FaFileLines,
  FaListCheck,
  FaGripVertical,
  FaPlus,
  FaSliders,
  FaEye,
  FaClock,
  FaUser,
  FaFloppyDisk,
  FaPaperPlane,
  FaUsers,
  FaIndianRupeeSign,
  FaRotate,
  FaArrowUp,
  FaStar,
  FaChevronRight,
  FaRobot,
} from "react-icons/fa6";

import {
  FiEdit,
  FiTrash2,
  FiCheck,
  FiDollarSign,
  FiRefreshCw,
  FiUser,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { RxCross1 } from "react-icons/rx";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";



import {
   FiUpload, FiPhone,
  FiArrowUpRight,  FiMaximize2, 
  FiAlertTriangle, } from "react-icons/fi";
import {
  MdOutlineTrackChanges, MdOutlineLocalShipping
} from "react-icons/md";
import { BsGlobe2, BsBoxSeam } from "react-icons/bs";
import { TbShip } from "react-icons/tb";



import logo from "../../assets/Images/logo.png";
import user from "../../assets/icon/user.png";
import order from "../../assets/icon/orders.png";
import supplier from "../../assets/icon/suppliers.png";

import buyer from "../../assets/icon/Buyers.png";

import analytical from "../../assets/icon/analytical.png";

import document from "../../assets/icon/document.png";

import payment from "../../assets/icon/payment.png";
import ai from "../../assets/icon/ai.png";

import support from "../../assets/icon/supportCenter.png";
import setting from "../../assets/icon/settings.png";

// import payment from "../../assets/icon/payment.png";


import dashboard from '../../assets/icon/home.png'
import { BsCalendarCheck, BsPersonPlus, BsGraphUp } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import map from "../../assets/Images/logo.png";

const trendingProducts = [
  { name: "Electronics", pct: "38.4%" },
  { name: "Machinery", pct: "29.1%" },
  { name: "Pharmaceuticals", pct: "18.2%" },
  { name: "Chemicals", pct: "15.33%" },
  { name: "Textiles", pct: "12.4" },
];

const fastCountries = [
  { name: "India", pct: "28.4%" },
  { name: "Vietnam", pct: "32.0%" },
  { name: "Mexico", pct: "18.3" },
  { name: "Indonesia", pct: "12.53" },
  { name: "UAE", pct: "12.4" },
];

const suppliers = [
  {
    name: "Shenzhan Tech Ltd.",
    reliability: "90%",
    quality: "90%",
    ontime: "90%",
    risk: "Low",
  },
  {
    name: "Global Machinery Co.",
    reliability: "90%",
    quality: "90%",
    ontime: "90%",
    risk: "Low",
  },
  {
    name: "Global Machinery Co.",
    reliability: "90%",
    quality: "90%",
    ontime: "90%",
    risk: "Medium",
  },
  {
    name: "Global Machinery Co.",
    reliability: "90%",
    quality: "90%",
    ontime: "90%",
    risk: "Medium",
  },
];

const buyers = [
  {
    name: "Amazon Retail",
    order: 256,
    ontime: "90%",
    payment: "98/100",
    growth: "28.4%",
  },
  {
    name: "Walmart Inc",
    order: 189,
    ontime: "90%",
    payment: "95/100",
    growth: "28.4%",
  },
  {
    name: "Best Buy Co.",
    order: 142,
    ontime: "90%",
    payment: "92/100",
    growth: "28.4%",
  },
  {
    name: "Costco Wholesale",
    order: 76,
    ontime: "90%",
    payment: "90/100",
    growth: "28.4%",
  },
];

const mapPins = [
  { top: "28%", left: "18%", label: "🇺🇸", value: "$2.8M", bg: "bg-blue-200" },
  { top: "22%", left: "46%", label: "🇩🇪", value: "$1.4M", bg: "bg-teal-200" },
  { top: "35%", left: "60%", label: "🇮🇳", value: "$4.3M", bg: "bg-purple-200" },
  { top: "55%", left: "27%", label: "🇧🇷", value: "$2.4M", bg: "bg-green-300" },
  { top: "62%", left: "72%", label: "🇦🇺", value: "$1.4M", bg: "bg-yellow-200" },
];

const mapRegions = [
  {
    top: "22%",
    left: "12%",
    w: "w-20",
    h: "h-14",
    color: "bg-blue-200",
    opacity: "opacity-70",
  },
  {
    top: "48%",
    left: "18%",
    w: "w-14",
    h: "h-20",
    color: "bg-green-300",
    opacity: "opacity-80",
  },
  {
    top: "18%",
    left: "42%",
    w: "w-20",
    h: "h-12",
    color: "bg-teal-200",
    opacity: "opacity-70",
  },
  {
    top: "36%",
    left: "46%",
    w: "w-10",
    h: "h-14",
    color: "bg-yellow-100",
    opacity: "opacity-60",
  },
  {
    top: "26%",
    left: "58%",
    w: "w-24",
    h: "h-14",
    color: "bg-purple-100",
    opacity: "opacity-60",
  },
  {
    top: "60%",
    left: "68%",
    w: "w-12",
    h: "h-8",
    color: "bg-yellow-300",
    opacity: "opacity-70",
  },
];

const navItems = [
  { icon: dashboard, label: "Dashboard" },
  { icon: user, label: "My Shipment" },
  { icon: order, label: "Orders" },
  { icon: supplier, label: "Suppliers" },

  { icon: buyer, label: "Buyers" },

  { icon: analytical, label: "Analytics" },
  { icon: document, label: "Documents" },
  { icon: payment, label: "Payments" },
  { icon: ai, label: "Ai Insights" },

  { icon: support, label: "Support Center " },
  { icon: setting, label: "Settings" },
];

const statCards = [
  { label: "Global Trade Volume", value: "12,450", change: "28.4%" },
  { label: "Active Containers", value: "24,875", change: "28.4%" },
  { label: "Revenue (YTD)", value: "4,320", change: "28.4%" },
  { label: "Trade Growth", value: "$ 2.48B", change: "28.4%" },
  { label: "AI Market Forecast", value: "23", change: "28.4%" },
  { label: "Supplier Network Score", value: "$ 1.26M", change: "28.4%" },
];

const globalTrade = [
  {
    name: "Live Shipment",
    color: "text-red-600",
    no: "1246",
  },
  {
    name: "In Transit",
    color: "text-green-500",
    no: "892",
  },
  {
    name: "Port",
    color: "text-black",
    no: "184",
  },
  {
    name: "Delivered",
    color: "text-black",
    no: "171",
  },
];

function WorldMap() {
  return (
    <div className="relative w-full h-44 bg-blue-50 rounded-xl overflow-hidden">
      <img src="https://res.cloudinary.com/dhuabv2it/image/upload/v1778229817/Map_hhooem.webp" />
    </div>
  );
}




const stats = [
  { label: "Active Shipment", value: "128", change: "28.4%" },
  { label: "Pending Orders", value: "45", change: "28.4%" },
  { label: "Total Imports", value: "₹2.5Cr", change: "28.4%" },
  { label: "Total Exports", value: "$ 2.48B", change: "28.4%" },
  { label: "Monthly Revenue", value: "23", change: "28.4%" },
  { label: "AI Trade Score", value: "87/100", change: null },
];
 
const trackingSteps = [
  { label: "Departed", sub: "Shanghai Port\n10 may 2026", done: true },
  { label: "Customs Clearance", sub: "12 May 2025", done: true },
  { label: "In Transit", sub: "On The way", done: true },
  { label: "Rotterdam, NL", sub: "Rotterdam port", done: false },
  { label: "Delivered", sub: "Pending", done: false, orange: true },
];
 
const highDemand = [
  { name: "Electronics", val: "28.4%" },
  { name: "Machinery", val: "22.1%" },
  { name: "Pharmaceuticals", val: "18.2" },
  { name: "Chemicals", val: "16.33" },
  { name: "Textiles", val: "12.4" },
];
 
const bestCountries = [
  { name: "India", val: "28.4%" },
  { name: "Vietnam", val: "22.1%" },
  { name: "Mexico", val: "18.2" },
  { name: "Indonesia", val: "16.33" },
  { name: "UAE", val: "12.4" },
];
 
const riskAlerts = [
  { name: "Red Sea Route", val: "28.4%", icon: "🌊" },
  { name: "European Delays", val: "22.1%", icon: "🇪🇺" },
  { name: "Us Customs", val: "18.2", icon: "🇺🇸" },
];
 
const notifications = [
  { title: "Shipment TCLU 1234567", sub: "Departed from Shanghai Port", time: "10m ago" },
  { title: "Invoice INV-2025-0456", sub: "Payment received successfully", time: "1h ago" },
  { title: "Customs Clearance update", sub: "Your Shipment is cleared", time: "3h ago" },
  { title: "New AI Insight available", sub: "Check your trade recommendations", time: "5h ago" },
];




 function TradeDashboard() {
  const [message, setMessage] = useState("");
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 lg:px-8 py-4 sm:py-6">
 
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Welcome Abhishek</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Here&apos;s your global trade overview</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <MdOutlineTrackChanges size={15} /> Track Shipment
            </button>
            <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <FiUpload size={13} /> Upload Documents
            </button>
            <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <FiPlusCircle size={13} /> Create Inquiry
            </button>
            <button className="flex items-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <FiPhone size={13} /> Contact Supplier
            </button>
          </div>
        </div>
 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 mb-1 leading-tight">{s.label}</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{s.value}</p>
              {s.change && (
                <p className="text-xs text-green-500 font-medium flex items-center gap-0.5 mt-0.5">
                  <FiArrowUpRight size={12} /> {s.change}
                </p>
              )}
            </div>
          ))}
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
 
          <div className="lg:col-span-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900 text-sm sm:text-base">Live Shipment Tracking</h2>
              <span className="bg-teal-50 text-teal-600 text-xs font-semibold px-2 py-0.5 rounded-full border border-teal-200">In Transit</span>
            </div>
 
            <div className="relative bg-blue-50 rounded-xl h-28 sm:h-32 mb-4 overflow-hidden flex items-center justify-center border border-blue-100">
              <BsGlobe2 size={60} className="text-blue-200" />
              <div className="absolute top-2 left-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white shadow" />
                  <span className="text-xs font-semibold text-gray-700">Shanghai CN</span>
                </div>
                <span className="text-xs text-gray-400 ml-4">Shanghai Port</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-white shadow" />
                <div>
                  <p className="text-xs font-semibold text-gray-700">Rotterdam, NL</p>
                  <p className="text-xs text-gray-400">Rotterdam port</p>
                </div>
              </div>
              <TbShip size={22} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-500 opacity-70" />
            </div>
 
            <div className="mb-3 px-1">
              <p className="text-xs font-bold text-gray-700">SINAR BINTAN</p>
              <p className="text-xs text-gray-400">CONTAINER: TCLU 122781</p>
            </div>
 
            <div className="space-y-2 mb-3">
              {trackingSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-0.5 flex-shrink-0 ${step.orange ? "bg-orange-400" : step.done ? "bg-green-500" : "bg-gray-300"}`} />
                    {i < trackingSteps.length - 1 && <div className="w-0.5 h-4 bg-gray-200 mt-0.5" />}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${step.done ? "text-gray-800" : "text-gray-400"}`}>{step.label}</p>
                    <p className="text-xs text-gray-400 whitespace-pre-line leading-tight">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
 
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">ETA</p>
                <p className="text-xs font-bold text-gray-800">24 May 2026</p>
                <p className="text-xs text-gray-400">3 days left</p>
              </div>
              <button className="border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                View Shipment Details
              </button>
            </div>
          </div>
 
          <div className="lg:col-span-1 bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900 text-sm sm:text-base">AI Trade Insights</h2>
              <button className="text-xs text-gray-500 flex items-center gap-0.5 hover:text-teal-600 transition-colors">View All <FiChevronRight size={12} /></button>
            </div>
 
            <div className="grid grid-cols-2 gap-2 mb-2 ">
              <div className=" border-gray-200 rounded-xl p-3  border-2 shadow-md">
                <p className="text-xs font-bold text-gray-800 mb-0.5">High Demand Products</p>
                <p className="text-xs text-gray-400 mb-2">This Month</p>
                {highDemand.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-0.5">
                    <span className="text-xs text-gray-600">{item.name}</span>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-0.5"><FiArrowUpRight size={10} />{item.val}</span>
                  </div>
                ))}
              </div>
              <div className="border-2 border-gray-200 rounded-xl shadow-md p-3">
                <p className="text-xs font-bold text-gray-800 mb-0.5">Best Import Countries</p>
                <p className="text-xs text-gray-400 mb-2">This Month</p>
                {bestCountries.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-0.5">
                    <span className="text-xs text-gray-600">{item.name}</span>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-0.5"><FiArrowUpRight size={10} />{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="grid grid-cols-2 gap-2">
              <div className="border-2 border-gray-200 rounded-xl p-3 shadow-md">
                <p className="text-xs font-bold text-gray-800 mb-0.5">Risk Alerts</p>
                <p className="text-xs text-gray-400 mb-2">This Month</p>
                {riskAlerts.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-0.5">
                    <span className="text-xs text-gray-600 flex items-center gap-1">{item.icon} {item.name}</span>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-0.5"><FiArrowUpRight size={10} />{item.val}</span>
                  </div>
                ))}
              </div>
              <div className="border-2 border-gray-200  shadow-md rounded-xl p-3 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-800 mb-0.5">AI Recommendation</p>
                  <p className="text-xs text-gray-400 mb-2">For Your Business</p>
                  <p className="text-xs text-gray-600 mb-1">Increase imports from</p>
                  <p className="text-xs font-semibold text-gray-800 flex items-center gap-1">🇻🇳 Vietnam</p>
                  <p className="text-xs text-gray-500 mt-1">Electronics demand is</p>
                  <p className="text-sm font-bold text-teal-600">29% this month</p>
                </div>
                <button className="mt-2 w-full bg-teal-50 hover:bg-teal-100 text-teal-600 text-xs font-semibold py-1.5 rounded-lg border border-teal-200 transition-colors">
                  View Opportunities
                </button>
              </div>
            </div>
          </div>
 
          <div className="lg:col-span-1 flex flex-col gap-3 border-2">
 
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900">AI Trade Assistant</p>
                  <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" /> Online
                  </p>
                </div>
                <FiMaximize2 size={14} className="text-gray-400" />
              </div>
              <div className="space-y-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-3 bg-gray-100 rounded-full w-full" />
                ))}
              </div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything about trade..."
                  className="flex-1 text-xs text-gray-600 placeholder-gray-400 outline-none bg-transparent"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 rounded-lg transition-colors">
                  <FiSend size={12} />
                </button>
              </div>
            </div>
 
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-gray-900">Notification</p>
                <button className="text-xs text-gray-500 flex items-center gap-0.5 hover:text-teal-600 transition-colors">View All <FiChevronRight size={12} /></button>
              </div>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiBell size={13} className="text-teal-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate">{n.title}</p>
                      <p className="text-xs text-gray-400 truncate">{n.sub}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [chatInput, setChatInput] = useState("");
  const riskColor = {
    Low: "bg-teal-100 text-teal-600",
    Medium: "bg-orange-100 text-orange-500",
    High: "bg-red-100 text-red-500",
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
      {/* Overlay for mobile */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-52 xl:w-60
           bg-white text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 flex-shrink-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center  justify-center gap-2 px-4 py-2 border-b border-gray-700">
          <img src={logo} className="h-12" />
        </div>

        {/* Nav */}
        <nav className="flex-1 bg-gray-900 overflow-y-auto  pr-3 py-7 space-y-0.5">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => {
                setActiveNav(label);
                setShowBot(false);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2 pl-10 py-2 rounded-r-lg text-xs transition-colors text-left
                ${
                  activeNav === label
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {/* <Icon size={13} className="flex-shrink-0" /> */}
              <img src={Icon} />
              <span className="truncate text-[0.9rem] ">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden  ">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-3 sm:px-4 py-1 flex items-center gap-3 flex-shrink-0">
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={18} />
          </button>

          <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
            <div className="relative">
              <FiSearch
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 ml-auto">
            <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 relative">
              <FiBell size={16} />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
              <FiMail size={16} />
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
              <FiSun size={16} />
            </button>
            <div className="flex items-center gap-2 ml-1 pl-2 py-2 border-l border-gray-200">
              <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                A
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Admin Panel
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  admin@gmail.com
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-10 ">
          {activeNav === "Dashboard" && (
          <div> <TradeDashboard/> </div>
          )}

          {/* {activeNav === "Users" && (
            <UsersSection setShowNotice={setShowNotice} />
          )}

          {activeNav === "Roles & Permissions" && <RolesPermission/>}

          {activeNav === "Plans/ Subscription" && (
            <PlanSection
              showAddPlan={showAddPlan}
              setShowAddPlan={setShowAddPlan}
            />
          )} */}

          {/* {activeNav === "Master Data" && <MasterData/>}
           {activeNav === "HS Rules" && <HSRules/>}
           {activeNav === "Country Rules" && <CountryRules/>}
           {activeNav === "DGFT Schemes" && <DGFTSchemes/>}

           {activeNav === "Shipment" && <Shipment /> }


           {activeNav === "Vendors/ Partners" && <VendorsPartners /> }
           {activeNav === "AI Assistant" && <AiAssistant /> }
           {activeNav === "Trade Intelligence" && <TradeIntelligence /> }

           {activeNav === "API Integrations" && <APIIntegrations/> }
           
           {activeNav === "Ad Managment" && <AdManagement/> }
           {activeNav === "Support" && <Support /> }
           {activeNav === "Modules" && <Modules /> } 
           {activeNav === "Settings" && <Settings/>} */}
        </main>
      </div>
    </div>
  );
}
