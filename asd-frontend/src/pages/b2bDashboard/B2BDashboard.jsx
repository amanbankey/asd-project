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
  FaArrowUp, FaStar, FaChevronRight,  FaRobot
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

import logo from "../../assets/Images/logo.png";

import { BsCalendarCheck, BsPersonPlus, BsGraphUp } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { FiX, } from "react-icons/fi";
import map from '../../assets/Images/logo.png'

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
    { name: "Shenzhan Tech Ltd.", reliability: "90%", quality: "90%", ontime: "90%", risk: "Low" },
    { name: "Global Machinery Co.", reliability: "90%", quality: "90%", ontime: "90%", risk: "Low" },
    { name: "Global Machinery Co.", reliability: "90%", quality: "90%", ontime: "90%", risk: "Medium" },
    { name: "Global Machinery Co.", reliability: "90%", quality: "90%", ontime: "90%", risk: "Medium" },
  ];
   
  const buyers = [
    { name: "Amazon Retail", order: 256, ontime: "90%", payment: "98/100", growth: "28.4%" },
    { name: "Walmart Inc", order: 189, ontime: "90%", payment: "95/100", growth: "28.4%" },
    { name: "Best Buy Co.", order: 142, ontime: "90%", payment: "92/100", growth: "28.4%" },
    { name: "Costco Wholesale", order: 76, ontime: "90%", payment: "90/100", growth: "28.4%" },
  ];
   
  const mapPins = [
    { top: "28%", left: "18%", label: "🇺🇸", value: "$2.8M", bg: "bg-blue-200" },
    { top: "22%", left: "46%", label: "🇩🇪", value: "$1.4M", bg: "bg-teal-200" },
    { top: "35%", left: "60%", label: "🇮🇳", value: "$4.3M", bg: "bg-purple-200" },
    { top: "55%", left: "27%", label: "🇧🇷", value: "$2.4M", bg: "bg-green-300" },
    { top: "62%", left: "72%", label: "🇦🇺", value: "$1.4M", bg: "bg-yellow-200" },
  ];
   
  const mapRegions = [
    { top: "22%", left: "12%", w: "w-20", h: "h-14", color: "bg-blue-200", opacity: "opacity-70" },
    { top: "48%", left: "18%", w: "w-14", h: "h-20", color: "bg-green-300", opacity: "opacity-80" },
    { top: "18%", left: "42%", w: "w-20", h: "h-12", color: "bg-teal-200", opacity: "opacity-70" },
    { top: "36%", left: "46%", w: "w-10", h: "h-14", color: "bg-yellow-100", opacity: "opacity-60" },
    { top: "26%", left: "58%", w: "w-24", h: "h-14", color: "bg-purple-100", opacity: "opacity-60" },
    { top: "60%", left: "68%", w: "w-12", h: "h-8", color: "bg-yellow-300", opacity: "opacity-70" },
  ];

const navItems = [
  { icon: FiHome, label: "Dashboard" },
  { icon: FiUsers, label: "Import Intelligence" },
  { icon: FiShield, label: "Export Intelligence" },
  { icon: FiCreditCard, label: "Shipment Database" },

  { icon: FiFileText, label: "HS Code Intelligence" },

  { icon: FiTruck, label: "Supplier Discovery" },
  { icon: FiGlobe, label: "Buyer Intelligence" },
  { icon: FiDatabase, label: "Company Intelligence" },
  { icon: FiPackage, label: "Trade map" },

  { icon: FiCpu, label: "Market Trends " },
  { icon: FiPieChart, label: "Competitor Tracking" },
 
  { icon: FiHelpCircle, label: "Risk Analysis" },
  { icon: FiLink, label: "AI Insights" },
  { icon: FiGrid, label: "Reports" },
  { icon: FiSettings, label: "Settings" },
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
        name:"Live Shipment", color:"text-red-600", no: "1246"
    }, 
    {
        name:"In Transit", color:"text-green-500", no: "892"
    }, 
    {
        name:"Port", color:"text-black", no: "184"
    }, 
    {
        name:"Delivered", color:"text-black", no: "171"
    }, 
]

function WorldMap() {
    return (
      <div className="relative w-full h-44 bg-blue-50 rounded-xl overflow-hidden">
         <img src='https://res.cloudinary.com/dhuabv2it/image/upload/v1778229817/Map_hhooem.webp' />
          
      </div>
    );
  }



export default function B2BDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [chatInput, setChatInput] = useState("");
  const riskColor = { Low: "bg-teal-100 text-teal-600", Medium: "bg-orange-100 text-orange-500", High: "bg-red-100 text-red-500" };

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
                setShowBot(false)
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2 pl-10 py-2 rounded-r-lg text-xs transition-colors text-left
                ${
                  activeNav === label
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
            >
              <Icon size={13} className="flex-shrink-0" />
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
                <p className="text-gray-400 text-xs sm:text-sm" >
                  admin@gmail.com
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-10 ">
          {
          activeNav === "Dashboard" &&
           (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div className="max-w-7xl mx-auto">
 
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 underline">Dashboard</h1>
          <p className="text-xs text-gray-400 mt-0.5">Real-time global performance and intelligence</p>
        </div>
 
        {/* STAT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
          {statCards.map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
              <p className="text-xs text-gray-400 mb-1 leading-tight">{s.label}</p>
              <p className="text-lg font-bold text-gray-800">{s.value}</p>
              <p className="text-xs text-teal-500 flex items-center gap-0.5 mt-0.5 font-medium">
                <FaArrowUp className="text-xs" />{s.change}
              </p>
            </div>
          ))}
        </div>
 
        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
 
          {/* GLOBAL TRADE INTELLIGENCE MAP */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">Global Trade Intelligence Map</h2>
            <WorldMap />
            <div className="flex justify-around pt-3"> 
            {globalTrade.map((val, id) => (
            <div key={id} className="bg-white text-sm  rounded-lg border border-gray-200 shadow-sm p-2">
            <p className={`text-[0.6rem] ${val.color}  mb-1   `}>{val.name}</p>
            <p className="text-xs  flex items-center gap-0.5 mt-0.5 font-medium">
             {val.no}
            </p>
          </div>
           ))} </div>
          </div>
 
          {/* MARKET INTELLIGENCE */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm font-bold text-gray-800">Market Intelligence</h2>
                <p className="text-xs text-teal-500 font-medium">AI Powered Insights</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 border-2 border-black">
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Trending Products</p>
                <p className="text-xs text-gray-400 mb-2">This Month</p>
                {trendingProducts.map(p => (
                  <div key={p.name} className="flex justify-between mb-1.5">
                    <span className="text-xs text-gray-600">{p.name}</span>
                    <span className="text-xs text-teal-500 font-medium flex items-center gap-0.5"><FaArrowUp className="text-xs" />{p.pct}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Fast Growing Countries</p>
                <p className="text-xs text-gray-400 mb-2">By Import Demand</p>
                {fastCountries.map(c => (
                  <div key={c.name} className="flex justify-between mb-1.5">
                    <span className="text-xs text-gray-600">{c.name}</span>
                    <span className="text-xs text-teal-500 font-medium flex items-center gap-0.5"><FaArrowUp className="text-xs" />{c.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* AI TRADE ASSISTANT */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-xs" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">AI Trade Assistant</p>
                  <p className="text-xs text-green-500 font-medium">● Online</p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-3 mb-3 min-h-[100px] flex flex-col justify-end gap-2">
              <div className="flex justify-end">
                <div className="bg-teal-500 text-white text-xs px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[80%]">Ask about trade data</div>
              </div>
              <div className="flex items-end gap-1.5">
                <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRobot className="text-teal-500 text-xs" />
                </div>
                <div className="bg-white border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[80%]">
                  Here are the top trade insights...
                </div>
              </div>
            </div>
            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 gap-2 focus-within:border-teal-500 transition-all">
              <input className="flex-1 text-xs outline-none bg-transparent" placeholder="Ask anything about trade..."
                value={chatInput} onChange={e => setChatInput(e.target.value)} style={{ fontFamily: "'Poppins', sans-serif" }} />
              <button className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <FaPaperPlane className="text-white text-xs" />
              </button>
            </div>
          </div>
        </div>
 
        {/* PRICE FLUCTUATIONS + SUPPLY CHAIN RISK + AI SUPPLIER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-1">Price Fluctuations</h2>
            <p className="text-xs text-gray-400 mb-3">Electronics (30Days)</p>
            <p className="text-2xl font-bold text-red-500">-3.2%</p>
            <p className="text-xs text-gray-400 mt-1">vs last month</p>
          </div>
 
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-1">Supply Chain Risk</h2>
            <p className="text-xs text-gray-400 mb-3">Global Risk Index</p>
            <p className="text-2xl font-bold text-orange-500">Medium</p>
            <p className="text-xs text-gray-400 mt-1">8.2% vs last month</p>
          </div>
 
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold text-gray-800">AI Supplier Recommendation</h2>
              <button className="text-xs text-teal-500 font-medium flex items-center gap-0.5 hover:text-teal-600">View All <FaChevronRight className="text-xs" /></button>
            </div>
            <p className="text-sm font-bold text-gray-800 mb-2">New Asia Exports</p>
            <div className="flex flex-col gap-1.5 mb-3">
              {[["Specialization", "Electronics, Components"], ["Location", "Vietnam"], ["Reliability Score", "★★★★★"], ["Est. Lead Time", "12 - 18 Days"]].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-xs text-gray-400">{k}</span>
                  <span className={`text-xs font-medium ${k === "Reliability Score" ? "text-yellow-400" : "text-gray-700"}`}>{v}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl text-xs font-medium transition-colors">Connect Now</button>
          </div>
        </div>
 
        {/* TOP SUPPLIERS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-800">Top Suppliers</h2>
            <button className="text-xs text-teal-500 font-medium flex items-center gap-0.5 hover:text-teal-600">View All <FaChevronRight className="text-xs" /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="bg-gray-50">
                  {["Supplier", "Reliability", "Quality", "On-time", "Risk Score"].map((h, i) => (
                    <th key={h} className={`text-left text-xs font-semibold text-gray-500 px-3 py-3 ${i === 0 ? "rounded-l-xl" : ""} ${i === 4 ? "rounded-r-xl" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {suppliers.map((s, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-3 py-3 text-xs font-semibold text-gray-800">{s.name}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{s.reliability}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{s.quality}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{s.ontime}</td>
                    <td className="px-3 py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${riskColor[s.risk]}`}>{s.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
 
        {/* BUYER PERFORMANCE */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-800">Buyer Performance</h2>
            <button className="text-xs text-teal-500 font-medium flex items-center gap-0.5 hover:text-teal-600">View All <FaChevronRight className="text-xs" /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="bg-gray-50">
                  {["Buyer", "Order", "On-time", "Payment Score", "Growth"].map((h, i) => (
                    <th key={h} className={`text-left text-xs font-semibold text-gray-500 px-3 py-3 ${i === 0 ? "rounded-l-xl" : ""} ${i === 4 ? "rounded-r-xl" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {buyers.map((b, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-3 py-3 text-xs font-semibold text-gray-800">{b.name}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{b.order}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{b.ontime}</td>
                    <td className="px-3 py-3 text-xs text-gray-600">{b.payment}</td>
                    <td className="px-3 py-3 text-xs text-teal-500 font-semibold flex items-center gap-0.5">
                      <FaArrowUp className="text-xs" />{b.growth}
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
