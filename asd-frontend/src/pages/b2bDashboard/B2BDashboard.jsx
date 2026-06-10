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
  FaAngleDown ,
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
  FaAngleUp 
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
import { FaAngleRight, FaCalendarAlt, FaTimes } from "react-icons/fa";
import up from "../../assets/icon/up.png"

import logo from "../../assets/Images/logo.png";

import { BsCalendarCheck, BsPersonPlus, BsGraphUp } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";

import map from "../../assets/Images/logo.png";

import home from "../../assets/icon/home.png";
import user from "../../assets/icon/user.png";
import exportInt from "../../assets/icon/orders.png";
import supplier from "../../assets/icon/suppliers.png";

import buyer from "../../assets/icon/Buyers.png";

import analytical from "../../assets/icon/analytical.png";

import document from "../../assets/icon/document.png";

import payment from "../../assets/icon/payment.png";
import ai from "../../assets/icon/ai.png";

import support from "../../assets/icon/supportCenter.png";
import setting from "../../assets/icon/setting.png";

import report from "../../assets/icon/report.png";
import insight from "../../assets/icon/insight.png";

import risk from "../../assets/icon/risk.png";


import globe from "../../assets/icon/globe.png";
import compass from "../../assets/icon/compass.png";

import discovery from "../../assets/icon/discovery.png";

import settings from "../../assets/icon/settings.png";
import TradeIntelligenceImport from "./TradeIntelligenceImport";
import ExportIntelligence from "./ExportIntelligence"
import ShipmentDatabase from "./ShipmentDatabase";
import alert from '../../assets/icon/alert.png'

import graph from '../../assets/icon/graph.png'
import file from '../../assets/icon/file.png'
import android from '../../assets/icon/android.png'

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




const navItems = [
  { icon: home, label: "Dashboard",subTab:[],    },
  { icon: globe, label: "Global Search",subTab:[],    },
 
  { icon: graph, label: "Trade Intelligence", subTab:[{label: "Import Intelligence"},{label: "Export Intelligence"}, {label: "Shipment Database"},  {label: "HS Code"},] },
 { icon: discovery, label: "Discovery",subTab:[],    },
 { icon: compass, label: "Market Intelligence",subTab:[],    },

  { icon: settings, label: "AI Intelligence" , subTab:[]},
  { icon: report, label: "Analytics" , subTab:[]},
  { icon: alert, label: "Alert & Monitoring" , subTab:[]},

  { icon: insight, label: "Integration" , subTab:[]},
  { icon:  file, label: "Reports" , subTab:[]},
  { icon: android, label: "Settings" , subTab:[]},
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
    <div className="relative w-full h-44 flex justify-center bg-blue-50 rounded-xl overflow-hidden">
      <img src="https://res.cloudinary.com/dhuabv2it/image/upload/v1778229817/Map_hhooem.webp" />
    </div>
  );
}

export default function B2BDashboard() {
  const [openTrade, setOpenTrade] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [activeSubTab, setActiveSubTab] = useState('Import Intelligence');
  const [openMenu, setOpenMenu] = useState("Import Intelligence"); // null

  const [chatInput, setChatInput] = useState("");
  const riskColor = {
    Low: "bg-teal-100 text-teal-600",
    Medium: "bg-orange-100 text-orange-500",
    High: "bg-red-100 text-red-500",
  };

  // console.log('sbut', activeSubTab , activeNav)
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans ">
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
          {navItems.map(({ icon: Icon, label, subTab }) => (
            <div   key={label}> 
            <button
              onClick={() => {
                setActiveNav(label);
                // setSidebarOpen(false);
                setOpenMenu(openMenu === label ? null : label);
                if(subTab.length > 0) {
                }else{
                  setSidebarOpen(false);
                }
              }}
              className={`w-full flex items-center gap-2 pl-6 sm:pl-8 py-2 pr-2 rounded-r-lg text-xs transition-colors text-left
                ${
                  activeNav === label
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
            >
             
              <img src={Icon} className="text-xs"  />
              <span className="truncate text-[0.9rem] font-semibold text-base ">{label}</span>
              {subTab?.length > 0 && (
                  openMenu === label ? <FaAngleDown className="" /> :  <FaAngleRight />
                )}
            </button>

                {label === "Trade Intelligence" &&
                  activeNav === "Trade Intelligence" && openMenu === label  && (
                    <div className="ml-16 flex flex-col mt-1">
                      {subTab.map((tab, id) => (
                        <button
                          key={id}
                          onClick={(e) => {
                            setSidebarOpen(false);
                            setOpenMenu(null)
                            e.stopPropagation();
                            setActiveSubTab(tab.label)}}
                          className={`text-left py-1 text-xs ${
                            activeSubTab === tab.label
                              ? "text-teal-300"
                              : "text-gray-400 hover:text-teal-300"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  )}

                  
                </div>
            
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
                 Abhishek
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  b2b@gmail.com
                </p>
              </div>
            </div>
          </div>
        </header>

        

        <main className="flex-1 overflow-y-auto bg-gray-50 p-3  ">
          {activeNav === "Dashboard" && (
            <div
              className="min-h-screen bg-gray-50 p-4 lg:p-1 xl:p-6 "
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
              />
              <div className="max-w-7xl mx-auto ">
                <div className="mb-5">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ">
                    Dashboard
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Real-time global performance and intelligence
                  </p>
                </div>

                {/* STAT CARDS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
                  {statCards.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white rounded-2xl border border-gray-100 shadow-md p-3"
                    >
                      <p className="text-xs sm:text-sm text-gray-400 mb-1 leading-tight">
                        {s.label}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text:xs md:text-sm xl:text-xl font-semibold whitespace-nowrap text-gray-800">
                          {s.value}
                        </p>
                        <p className="text-xs text-[#31FF07] flex items-center gap-0.5 mt-0.5 font-medium">
                          
                          <img src={up} alt="arrow" className="text-xs" />
                          {s.change}
                        </p>{" "}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4  ">
                  <div className="bg-white rounded-3xl  max-h-96 xl:max-h-80 shadow-md p-5 ">
                    <h2 className="text-lg sm:text-xl font-medium text-black mb-4">
                      Global Trade Intelligence Map
                    </h2>

                    <WorldMap />

                    <div className="grid grid-cols-4 gap-3 mt-6">
                      {globalTrade.map((val, id) => (
                        <div
                          key={id}
                          className="border border-gray-200 rounded-xl p-2"
                        >
                          <p
                            className={`text-[0.4rem] sm:text-[0.5rem] whitespace-nowrap font-medium ${val.color}`}
                          >
                            {val.name}
                          </p>

                          <p className="text-xs sm:text-[0.8rem] font-bold text-black">
                            {val.no}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 col-span-1 flex flex-col gap-4   ">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:max-h-64 xl:max-h-72 gap-4  ">
                      <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-3">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-sm sm:text-lg lg:text-xl font-semibold text-black">
                            Market Intelligence
                          </h2>

                          <p className="text-gray-400 text-xs sm:text-sm ">
                            AI Powered Insights
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="border border-gray-200 rounded-2xl p-3 shadow-md">
                            <p className="text-xs sm:text-sm font-semibold text-black">
                              Trending Products
                            </p>
                            <p className="text-gray-400 text-[0.7rem] sm:text-xs mb-4">
                              This Month
                            </p>
                            {trendingProducts.map((p) => (
                              <div
                                key={p.name}
                                className="flex justify-between "
                              >
                                <span className="text-gray-700 text-[0.6rem] sm:text-xs pb-1">
                                  {p.name}
                                </span>

                                <div className="w-14">
                                <span className="text-[#31FF07] flex text-[0.6rem] sm:text-xs items-center gap-1 ">
                                <img src={up} alt="arrow" className="text-xs" />
                                  {p.pct}
                                </span>
                                
                              </div>
                              </div>
                            ))}
                          </div>

                          <div className="border border-gray-200 rounded-2xl p-3 shadow-md">
                            <p className="text-xs sm:text-sm  font-semibold text-black">
                              Fast Growing Countries
                            </p>

                            <p className="text-gray-400 text-[0.7rem] sm:text-xs mb-4">
                              By import Demand
                            </p>

                            {fastCountries.map((c) => (
                              <div
                                key={c.name}
                                className="flex justify-between "
                              >
                                <span className="text-gray-700 text-[0.6rem] sm:text-xs pb-1">
                                  {c.name}
                                </span>

                              <div className="w-14"> 
                                <span className="text-[#31FF07] flex text-[0.6rem] sm:text-xs items-center gap-1">
                                <img src={up} alt="arrow" className="text-xs" />
                                  {c.pct}
                                </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white h-full rounded-3xl border border-gray-200 shadow-md p-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h2 className="text-xs sm:text-sm font-medium leading-tight">
                                AI Trade Assistant
                              </h2>

                              <p className="text-gray-500 text-[0.7rem] sm:text-xs">
                                Online
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2 ">
                            <div className="bg-gray-100 rounded-lg h-7 w-3/5"></div>
                            <div className="bg-gray-100 rounded-lg h-6 w-2/5"></div>
                            <div className="bg-gray-100 rounded-lg h-6 w-2/5"></div>
                            <div className="bg-gray-100 rounded-lg h-6 w-2/5"></div>
                          </div>
                        </div>

                        <div className="flex  items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mt-4">
                          <input
                            type="text"
                            placeholder="Ask anything about trade..."
                            className="flex-1 outline-none text-xs placeholder-"
                          />
                         <button>
                            <FaPaperPlane className="text-green-500 text-base" />
                          </button>
                        </div>
                          

                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                      <div className="bg-white rounded-3xl border border-gray-200 shadow-md px-4 py-3">
                        <h2 className="text-xs sm:text-sm  lg:text-lg font-semibold text-black">
                          Price Fluctuations
                        </h2>

                        <p className="text-gray-600 text-xs  mb-2">
                          Electronics (30Days)
                        </p>

                        <p className="text-xs sm:text-sm lg:text-xl font-medium text-red-500">
                          -3.2%
                        </p>

                        <p className="text-red-500 text-[0.7rem] font-semibold sm:text-xs mt-1">
                          vs last month
                        </p>
                      </div>

                      <div className="bg-white rounded-3xl border border-gray-200 shadow-md px-4 py-3">
                        <h2 className="text-xs sm:text-sm  lg:text-lg font-semibold text-black">
                          Supply Chain Risk
                        </h2>

                        <p className="text-gray-600 text-xs  mb-2">
                          Global Risk Index
                        </p>

                        <p className="text-xs sm:text-sm lg:text-xl font-medium text-orange-500">
                          Medium
                        </p>

                       <div className="flex gap-2">
                        <p className="text-red-500 text-[0.7rem] font-semibold sm:text-sm mt-1">
                          8.2% 
                        </p>
                        <p className="text-[0.7rem] text-gray-600 font-medium sm:text-xs mt-1">
                          vs last month
                        </p>
                         </div>
                        
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex max-w-7xl justify-between flex-col lg:flex-row  ">
                  <div className="bg-white rounded-2xl max-w-3xl w-full  shadow-md p-4 sm:p-5 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm sm:text-lg xl:text-xl font-semibold text-gray-800">
                        Top Suppliers
                      </h2>
                      <button className="text-xs sm:text-lg xl:text-xl text-[#353535] font-normal flex items-center gap-0.5 ">
                        View All  
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                        <thead>
                          <tr className="bg-gray-100">
                            {[
                              "Supplier",
                              "Reliability",
                              "Quality",
                              "On-time",
                              "Risk Score",
                            ].map((h, i) => (
                              <th
                                key={h}
                                className={`text-left text-xs sm:text-lg  font-normal text-[#353535] px-3 py-3 ${
                                  i === 0 ? "rounded-l-xl" : ""
                                } ${i === 4 ? "rounded-r-xl" : ""}`}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {suppliers.map((s, i) => (
                            <tr key={i} className="border-t border-gray-100 text-center  ">
                              <td className="px-3 py-3 text-xs sm:text-lg text-start font-normal text-[#353535]">
                                {s.name}
                              </td>
                              <td className="px-3 py-3 text-xs sm:text-lg  text-[#353535]">
                                {s.reliability}
                              </td>
                              <td className="px-3 py-3 text-xs sm:text-lg  text-[#353535]">
                                {s.quality}
                              </td>
                              <td className="px-3 py-3 text-xs sm:text-lg  text-[#353535]">
                                {s.ontime}
                              </td>
                              <td className="px-3 py-3 text-center">
                                <span
                                  className={`text-xs sm:text-lg text-center px-2.5 py-1 rounded-lg font-normal ${
                                    riskColor[s.risk]
                                  }`}
                                >
                                  {s.risk}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="min-w-44  gap-4 mb-4">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-4">
                      <div className="flex items-center justify-between mb-3 xl:gap-5">
                        <h2 className="text-xs xl:text-sm font-bold text-gray-800">
                          AI Supplier Recommendation
                        </h2>
                        <button className="text-xs xl:text-sm text-teal-500 font-medium flex items-center gap-0.5 hover:text-teal-600">
                          View All <FaChevronRight className="text-xs" />
                        </button>
                      </div>
                      <p className="text-sm  xl:text-base font-bold text-gray-800 mb-2">
                        New Asia Exports
                      </p>
                      <div className="flex flex-col gap-1.5 mb-3">
                        {[
                          ["Specialization", "Electronics, Components"],
                          ["Location", "Vietnam"],
                          ["Reliability Score", "★★★★★"],
                          ["Est. Lead Time", "12 - 18 Days"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-xs sm:text-sm text-gray-600">{k}</span>
                            <span
                              className={`text-xs sm:text-sm font-medium  ${
                                k === "Reliability Score"
                                  ? "text-yellow-400"
                                  : "text-gray-700"
                              }`}
                            >
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl text-xs xl:text-sm font-medium transition-colors">
                        Connect Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* BUYER PERFORMANCE */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm sm:text-lg xl:text-xl font-semibold text-gray-800">
                      Buyer Performance
                    </h2>
                    <button className="text-xs sm:text-lg xl:text-xl text-teal-500 
                    font-normal flex items-center gap-0.5 hover:text-teal-600">
                      View All <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100">
                          {[
                            "Buyer",
                            "Order",
                            "On-time",
                            "Payment Score",
                            "Growth",
                          ].map((h, i) => (
                            <th
                              key={h}
                              className={`text-left text-xs sm:text-lg xl:text-xl font-normal text-[#353535] px-3 py-3 ${
                                i === 0 ? "rounded-l-xl" : ""
                              } ${i === 4 ? "rounded-r-xl" : ""}`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {buyers.map((b, i) => (
                          <tr key={i} className="border-t border-gray-100 w-20 ">
                            <td className="px-3 py-3 text-xs  sm:text-lg xl:text-xl font-normal text-[#353535]  ">
                              {b.name}
                            </td>
                            <td className="px-3 py-3 text-xs sm:text-lg xl:text-xl text-[#353535] text-start ">
                              {b.order}
                            </td>
                            <td className="px-3 py-3 text-xs sm:text-lg xl:text-xl text-[#353535]">
                              {b.ontime}
                            </td>
                            <td className="px-3 py-3 text-xs sm:text-lg xl:text-xl text-[#353535]">
                              {b.payment}
                            </td>
                            <td className="px-3 py-3 text-xs sm:text-lg xl:text-xl text-[#31FF07] font-normal flex items-center gap-0.5">
                            <img src={up} alt="arrow" className="text-xs" />
                              {b.growth}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

          {activeNav === "Trade Intelligence" && activeSubTab === "Import Intelligence" && (
           <TradeIntelligenceImport   />
          )}

          {activeNav === "Trade Intelligence" && activeSubTab === "Export Intelligence" && (
           <ExportIntelligence   />
          )}


         {activeNav === "Trade Intelligence" && activeSubTab === "Shipment Database" && (
           <ShipmentDatabase   />
          )}


      </div>
    </div>
  );
}
