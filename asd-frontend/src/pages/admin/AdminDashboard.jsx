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

import RolesPermission from "./RolesPermission";
import Settings from './Settings'
import MasterData from "./MasterData";
import HSRules from "./HsRules";
import CountryRules from "./CountryRules";
import DGFTSchemes from "./DgftScheme";
import Shipment from "./Shipment";
import VendorsPartners from "./VendorsPartners";
import AiAssistant from "./AiAssistant";
import TradeIntelligence from "./TradeIntelligence";
import Modules from "./Modules";
import Support from "./Support";
import APIIntegrations from "./ApiIntegrations";
import AdManagement from "./AdManagement";
import UsersSection from './Users'
import PlanSection from "./PlansSubscriptions";

const revenueLineData = [
  { name: "Jun", value: 40 },
  { name: "Feb", value: 70 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 60 },
  { name: "May", value: 95 },
];

const revenueBarData = [
  { name: "Q1", a: 60, b: 40, c: 30 },
  { name: "Q2", a: 80, b: 65, c: 50 },
  { name: "Q3", a: 70, b: 55, c: 85 },
];

const userGrowthData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 50 },
  { name: "May", value: 100 },
  { name: "June", value: 50 },
  { name: "July", value: 50 },
  { name: "Aug", value: 60 },

  { name: "Sep", value: 50 },
  { name: "Oct", value: 140 },
];

const navItems = [
  { icon: FiHome, label: "Admin Dashboard" },
  { icon: FiUsers, label: "Users" },
  { icon: FiShield, label: "Roles & Permissions" },
  { icon: FiCreditCard, label: "Plans/ Subscription" },
  { icon: FiDatabase, label: "Master Data" },
  { icon: FiFileText, label: "HS Rules" },
  { icon: FiGlobe, label: "Country Rules" },
  { icon: FiGrid, label: "DGFT Schemes" },
  { icon: FiPackage, label: "Shipment" },
  { icon: FiTruck, label: "Vendors/ Partners" },
  { icon: FiCpu, label: "AI Assistant" },
  { icon: FiPieChart, label: "Trade Intelligence" },
  { icon: FiLink, label: "API Integrations" },
  { icon: FiMonitor, label: "Ad Managment" },
  { icon: FiHelpCircle, label: "Support" },
  { icon: FiGrid, label: "Modules" },
  { icon: FiSettings, label: "Settings" },
];

const statCards = [
  {
    label: "Total Users",
    value: "12,450",
    icon: FiUsers,
    color: "text-orange-400",
  },
  {
    label: "Total Subscription",
    value: "860",
    icon: FiCreditCard,
    color: "text-yellow-500",
  },
  {
    label: "Total Shipment",
    value: "4,320",
    icon: FiPackage,
    color: "text-blue-500",
  },
  {
    label: "Revenue",
    value: "128,500",
    icon: FiPieChart,
    color: "text-green-500",
  },
  {
    label: "Pending Approvals",
    value: "15",
    icon: FiAlertCircle,
    color: "text-teal-500",
  },
  {
    label: "Active Vendors",
    value: "32",
    icon: FiUserCheck,
    color: "text-purple-500",
  },
];

const quickActions = [
  { icon: FiUserPlus, label: "Add User" },
  { icon: FiUserCheck, label: "Add Vendor" },
  { icon: FiPlusCircle, label: "Add Plan" },
  { icon: FiFileText, label: "Add Hs Rule" },
  { icon: FiGlobe, label: "Add Country Rule" },
];

const alerts = [
  { count: 5, label: "Pending", color: "bg-red-500" },
  { count: 2, label: "Compliance", color: "bg-orange-500" },
  { count: 1, label: "API Failure Alert", color: "bg-yellow-500" },
];

const recentActivity = [
  { text: "Aditya Added a New Shipment", time: "5 min ago" },
  { text: "Vendor xyz Approved", time: "20 min ago" },
  { text: "Suresh Updated User Role", time: "1 hr ago" },
  { text: "API Connection Failed", time: "1 hr ago" },
];

function CreateNotice({ setShowNotice }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const validate = () => {
    let err = {};
    if (!title.trim()) err.title = "Title required";
    if (!desc.trim()) err.desc = "Description required";
    if (!date) err.date = "Date required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const data = {
      title,
      desc,
      date,
      image,
    };

    console.log("Submit:", data);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-3 sm:px-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-4 sm:p-6">
        <div className="flex items-center justify-between  mb-4">
          <h2 className="text-lg sm:text-xl font-semibold ">Create Notice</h2>
          <button>
            <RxCross1 onClick={() => setShowNotice((prev) => !prev)} />
          </button>
        </div>

        <div className="mb-3">
          <label className="text-sm text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Give One Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-400 focus:ring-red-400"
                : "focus:ring-teal-500"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="text-sm text-gray-700">Description</label>
          <textarea
            rows="3"
            placeholder="Type Description here..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={`w-full mt-1 px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 ${
              errors.desc
                ? "border-red-400 focus:ring-red-400"
                : "focus:ring-teal-500"
            }`}
          />
          {errors.desc && (
            <p className="text-red-500 text-xs mt-1">{errors.desc}</p>
          )}
        </div>

        <div className="mb-3 flex flex-col  ">
          <label className="text-sm text-gray-700">Add image (optional)</label>

          <label className="mt-2 self-start bg-teal-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-teal-600 transition">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>

          {preview && (
            <div className="mt-3 relative w-32 h-32">
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover rounded-md border"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-black text-white p-1 rounded-full text-xs"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-700">Schedule Date</label>
          <div className="relative mt-1">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${
                errors.date
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:ring-teal-500"
              }`}
            />
            {/* <FaCalendarAlt className="absolute right-3 top-3 text-gray-400 text-sm pointer-events-none" /> */}
          </div>
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-teal-500 text-white py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition disabled:opacity-50"
        >
          Publish Notice
        </button>

        <button
          type="button"
          onClick={() => setShowNotice(false)}
          className="w-full mt-2 border py-2 rounded-md text-sm text-gray-500 hover:bg-teal-500 hover:text-white transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}



export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Plans/ Subscription");
  const [showNotice, setShowNotice] = useState(false);
  const [showAddPlan, setShowAddPlan] = useState(false);

  // console.log('ac', activeNav)
  
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
          fixed lg:static inset-y-0 left-0 z-30 w-52 xl:w-56
          bg-gray-900 text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 flex-shrink-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-700">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
            ASD
          </div>
          <div className="leading-tight">
            <p className="text-xs font-bold text-white">ASDCargoMate</p>
            <p className="text-gray-400" style={{ fontSize: "9px" }}>
              Ask Plan Ship
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => {
                setActiveNav(label);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors text-left
                ${
                  activeNav === label
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
            >
              <Icon size={13} className="flex-shrink-0" />
              <span className="truncate">{label}</span>
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
            <div className="flex items-center gap-2 ml-1 pl-2 border-l border-gray-200">
              <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                A
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-semibold text-gray-800">
                  Admin Panel
                </p>
                <p className="text-gray-400" style={{ fontSize: "9px" }}>
                  admin@gmail.com
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-10 ">
          {activeNav === "Admin Dashboard" && (
            <div className="">
              <div
                className="flex justify-end mb-3  "
                onClick={() => setShowNotice(true)}
              >
                <button
                  className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white 
            text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  <FiPlus size={13} />
                  <span> Create Notice</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-4">
                {statCards.map(({ label, value, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col gap-1"
                  >
                    <p className="text-gray-500 text-xs leading-tight">
                      {label}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-bold text-sm sm:text-base">
                        {value}
                      </p>
                      <Icon className={color} size={16} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                {/* Area Chart */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border-2 border-gray-100 ">
                  <p className="text-xs font-semibold text-gray-700 mb-3">
                    Revenue Growth
                  </p>
                  <ResponsiveContainer width="100%" height={140}>
                    <AreaChart data={revenueLineData}>
                      <defs>
                        <linearGradient
                          id="colorVal"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip contentStyle={{ fontSize: 11 }} />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fill="url(#colorVal)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-3">
                    Revenue Growth
                  </p>
                  <ResponsiveContainer width="100%" height={140}>
                    <BarChart data={revenueBarData} barCategoryGap="30%">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip contentStyle={{ fontSize: 11 }} />
                      <Bar dataKey="a" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                      <Bar dataKey="b" fill="#93c5fd" radius={[3, 3, 0, 0]} />
                      <Bar dataKey="c" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                  <p className="text-sm font-bold text-gray-800 mb-3">
                    Quick Action
                  </p>
                  <div className="space-y-2">
                    {quickActions.map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="w-full flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-xs text-gray-700 transition-colors"
                      >
                        <Icon
                          size={13}
                          className="text-teal-500 flex-shrink-0"
                        />
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Growth */}
                <div className="bg-white rounded-xl p-3 sm:p-4  flex flex-col">
                  <div className="shadow-md border p-3 rounded-xl sm:p-4 border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      User Growth
                    </p>
                    <div className="flex-1">
                      <ResponsiveContainer width="100%" height={160}>
                        <AreaChart data={userGrowthData}>
                          <defs>
                            <linearGradient
                              id="ugGrad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#3b82f6"
                                stopOpacity={0.25}
                              />
                              <stop
                                offset="95%"
                                stopColor="#3b82f6"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                          />
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip contentStyle={{ fontSize: 11 }} />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fill="url(#ugGrad)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Recent Activity below on mobile / same card medium+ */}
                  <div className="mt-3 pt-3 border-t border-gray-100 shadow-md rounded-xl p-3 sm:p-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      Recent Activity
                    </p>
                    <div className="space-y-1.5">
                      {recentActivity.map(({ text, time }, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-start gap-2"
                        >
                          <p className="text-xs text-gray-600 leading-snug">
                            {text}
                          </p>
                          <p
                            className="text-gray-400 flex-shrink-0"
                            style={{ fontSize: "9px" }}
                          >
                            {time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Alerts + System Status */}
                <div className="flex flex-col gap-3">
                  <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      Alert & Notification
                    </p>
                    <div className="space-y-2">
                      {alerts.map(({ count, label, color }) => (
                        <div
                          key={label}
                          className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`${color} text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`}
                            >
                              {count}
                            </span>
                            <span className="text-xs text-gray-700">
                              {label}
                            </span>
                          </div>
                          <FiChevronRight size={13} className="text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      System Status
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          API Status
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-green-600 font-medium">
                            Active
                          </span>
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Server Status
                        </span>
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <p className="text-green-600 text-xs font-medium">
                        All System Operational
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeNav === "Users" && (
            <UsersSection setShowNotice={setShowNotice} />
          )}

          {activeNav === "Roles & Permissions" && <RolesPermission/>}

          {activeNav === "Plans/ Subscription" && (
            <PlanSection
              showAddPlan={showAddPlan}
              setShowAddPlan={setShowAddPlan}
            />
          )}

           {activeNav === "Master Data" && <MasterData/>}
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
           {activeNav === "Settings" && <Settings/>}
   

        </main>
      </div>

      <button className="fixed bottom-5 right-5 w-11 h-11 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10">
        <FiPlus size={20} />
      </button>

      {showNotice && <CreateNotice setShowNotice={setShowNotice} />}
    </div>
  );
}
