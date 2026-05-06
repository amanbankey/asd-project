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

function EditDrawer({ user, setEditUser, setUsers }) {
  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    company: user.company || "",
    gst: user.gst || "",
    business: user.business || "",
    accountType: user.accountType || "B2B",
    status: user.status ?? true,
    plan: user.plan || "Pro",
    expiry: user.expiry || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, ...form } : u))
    );

    setEditUser(null);
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
      <div className="w-full sm:w-[420px] bg-white h-full overflow-y-auto transform transition-transform duration-300 translate-x-0 p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit User</h2>
          <RxCross1
            onClick={() => setEditUser(null)}
            className="text-xl cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
            {form.name?.[0]}
          </div>
          <div>
            <p className="font-medium">{form.name}</p>
            <p className="text-xs text-gray-500">Last updated 2 days ago</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Basic Info</p>

            <div className="flex gap-4 items-center mb-3">
              <div className="w-14 h-14 border rounded-md flex items-center justify-center text-gray-400">
                <FiCamera />
              </div>
              <p className="text-xs text-gray-400">
                Upload Photo JPG, PNG up to 2 MB
              </p>
            </div>

            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded mb-2"
            />

            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email Address"
              className="w-full border px-3 py-2 rounded mb-2"
            />

            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone Number"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Account Type</p>

            <select
              value={form.accountType}
              onChange={(e) =>
                setForm({ ...form, accountType: e.target.value })
              }
              className="w-full border px-3 py-2 rounded"
            >
              <option>B2B</option>
              <option>B2C</option>
            </select>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Company Info</p>

            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company Name"
              className="w-full border px-3 py-2 rounded mb-2"
            />

            <input
              value={form.gst}
              onChange={(e) => setForm({ ...form, gst: e.target.value })}
              placeholder="GST Number"
              className="w-full border px-3 py-2 rounded mb-2"
            />

            <select
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            >
              <option>Exporter</option>
              <option>Manufacturer</option>
            </select>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Status</p>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.checked })}
              />
              <span className="text-sm">Active</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Subscription</p>

            <div className="grid grid-cols-2 gap-2">
              <select
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option>Pro</option>
                <option>Basic</option>
              </select>

              <input
                type="date"
                value={form.expiry}
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                className="border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <button
              type="button"
              className="w-full border py-2 rounded flex items-center justify-center gap-2"
            >
              <FiLock /> Reset Password
            </button>

            <button
              type="button"
              className="w-full border py-2 rounded flex items-center justify-center gap-2"
            >
              <FiSend /> Send Invite Link
            </button>
          </div>

          <button className="w-full bg-teal-500 text-white py-2 rounded mt-2">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

function DeleteModal({ setDeleteUser, handleDelete }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xl">
          <FiTrash2 />
        </div>

        <h3 className="text-lg font-semibold">Delete User Info ?</h3>
        <p className="text-sm text-gray-500 mb-4">
          This will be delete permanantly
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setDeleteUser(null)}
            className="w-full border py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function UsersSection({ setShowNotice }) {
  const dummyUsers = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: "Arjun Soni",
    email: "arjunsoni@gmail.com",
    phone: "9389938877",
    company: "example.pvtltd",
    password: "example.123",
    status: i % 3 === 0 ? "Inactive" : "active",
  }));
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 5;

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const currentData = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const handleDelete = () => {
    setUsers((prev) => prev.filter((u) => u.id !== deleteUser.id));
    setDeleteUser(null);
  };

  return (
    <div className="p-4 w-full sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-sm text-gray-500">
            Manage user accounts and access
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm"
        >
          + Add users
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 text-left">
              <tr>
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Phone no</th>
                <th>Company name</th>
                <th>Password</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="py-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">
                      {u.name[0]}
                    </span>
                    {u.name}
                  </td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.company}</td>
                  <td>{u.password}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        u.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>

                  <td className="flex gap-3 text-lg">
                    <FiEdit
                      onClick={() => setEditUser(u)}
                      className="cursor-pointer text-blue-500"
                    />
                    <FiTrash2
                      onClick={() => setDeleteUser(u)}
                      className="cursor-pointer text-red-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            Showing {currentData.length} of {filtered.length} results
          </p>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="border px-3 py-1 rounded"
            >
              Previous
            </button>

            <span className="bg-teal-500 text-white px-3 py-1 rounded">
              {page}
            </span>

            <button
              onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
              className="border px-3 py-1 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <AddUserModal setShowModal={setShowModal} setUsers={setUsers} />
      )}

      {editUser && (
        <EditDrawer
          user={editUser}
          setEditUser={setEditUser}
          setUsers={setUsers}
        />
      )}

      {deleteUser && (
        <DeleteModal
          setDeleteUser={setDeleteUser}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

function AddUserModal({ setShowModal, setUsers }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    status: "active",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let err = {};
    if (!form.name) err.name = "Required";
    if (!form.email) err.email = "Required";
    if (!form.role) err.role = "Required";
    if (!form.status) err.status = "Required";

    setErrors(err);

    if (Object.keys(err).length > 0) return;

    setUsers((prev) => [
      {
        id: Date.now(),
        ...form,

        phone: "9" + Math.floor(100000000 + Math.random() * 900000000),
        company: "New Company Pvt Ltd",
        password: "user@123",
      },
      ...prev,
    ]);

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-3">
      <div className="bg-white w-full max-w-md rounded-xl p-5 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 text-gray-500"
        >
          <RxCross1 />
        </button>

        <h2 className="text-lg font-semibold mb-4">Add User</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

          <input
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          <select
            className="w-full border px-3 py-2 rounded"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}

          <select
            className="w-full border px-3 py-2 rounded"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-xs">{errors.status}</p>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded"
            >
              Add User
            </button>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full border py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PlanSection({ showAddPlan, setShowAddPlan }) {
  const [tab, setTab] = useState("monthly");
  const [plansData, setPlansData] = useState({
    monthly: [
      {
        id: 1,
        name: "Starter",
        price: "₹1,999/-",
        desc: "per month",
        subscriber:"2", 
        status:"active",
        popularPlan:"active",
        recommendedPlan: "active",  
        features: [
          "Upto 100 shipment/month",
          "Basic reporting",
          "Email Support",
          "2 user accounts",
          "Standard API access",
        ],
      },
  
      {
        id: 2,
        name: "Pro",
        price: "₹5,999/-",
        desc: "per month",
        subscriber:"3", 
        status:"active",
        popularPlan:"active",
        recommendedPlan: "active",  
        features: [
          "Unlimited shipment",
          "Advanced reporting",
          "Priority support",
        ],
      },
  
      {
        id: 3,
        name: "Enterprise",
        price: "₹9,999/-",
        desc: "per month",
        subscriber:"4", 
        status:"active",
        popularPlan:"active",
        recommendedPlan: "active",  
        features: [
          "Custom integrations",
          "Dedicated manager",
        ],
      },
    ],
  
    yearly: [
      {
        id: 4,
        name: "Pro",
        price: "₹20,000/-",
        desc: "per year",
        subscriber:"2", 
        status:"active",
        popularPlan:"active",
        recommendedPlan: "active",  
        features: [
          "Unlimited shipment",
          "Advanced reporting",
        ],
      },
    ],
  });
  const plans = plansData[tab];
  
  const [yearlyPlans, setYearlyPlans] = useState([{ name: "Pro", price: "₹20,000/-", desc: "per Year", features: []  }]);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {!showAddPlan && (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div>
              <h2 className="text-xl font-semibold">Plan & Subscription</h2>
              <p className="text-sm text-gray-500">
                Manage Subscription Plan & Pricing
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="flex bg-gray-200 rounded-full p-1 w-fit">
                <button
                  onClick={() => setTab("monthly")}
                  className={`px-4 py-1 text-sm rounded-full transition ${
                    tab === "monthly"
                      ? "bg-teal-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setTab("yearly")}
                  className={`px-4 py-1 text-sm rounded-full transition ${
                    tab === "yearly"
                      ? "bg-teal-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowAddPlan(true)}
                className="bg-teal-500 text-white px-4 py-2 cursor-pointer rounded-md text-sm w-full sm:w-auto"
              >
                + Add Plan
              </button>{" "}
            </div>
          </div>

          <div
            className={`grid gap-4 ${
              tab === "monthly"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 place-items-center"
            }`}
          >
            {plans.map((plan, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border flex flex-col gap-10  p-5 w-full max-w-xs h-full "
              >
                <div className="pb-28">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{plan.name}</h3>
                    <FiEdit className="text-gray-500 cursor-pointer" />
                  </div>

                  <h2 className="text-xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      {plan.desc}
                    </span>
                  </h2>

                  <p className="text-xs text-gray-400 mb-3">
                    Perfect For small Businesses
                  </p>

                  <div className="space-y-2 text-sm mb-4">
                    {plan.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FiCheck className="text-teal-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subscriber</span>
                    <span>{plan.subscriber}</span>
                  </div>

                  <div className="flex justify-between mt-1 items-center">
                    <span className="text-gray-500">Status</span>
                    <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded text-xs">
                     {plan.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showAddPlan && <AddPlan setShowAddPlan={setShowAddPlan} 
     
      setYearlyPlans={setYearlyPlans} 
      setPlansData={setPlansData}
       plansData={plansData}
       tab={tab}
       setTab={setTab}

      />
      }
    </div>
  );
}


function Toggle({ checked, onChange }) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`relative w-10 h-6 rounded-full cursor-pointer flex-shrink-0 transition-all duration-200 ${
        checked ? "bg-teal-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
          checked ? "left-5" : "left-1"
        }`}
      />
    </div>
  );
}

function AddPlan({ setShowAddPlan, setYearlyPlans, setPlansData, plansData, tab, setTab }) {
  const [formData, setFormData] = useState({
    planName: "starter",
    planType: "monthly",
    price: "1,999",
    billingCycle: "Per Month",
    description: "hello",
  
    features: [
      { id: 1, name: "Upto 100 shipment/month", enabled: true },
      { id: 2, name: "Basic reporting", enabled: true },
      { id: 3, name: "Email Support", enabled: false },
      { id: 4, name: "2 user accounts", enabled: false },
      { id: 5, name: "Standard API access", enabled: true },
    ],
  
    status: "Active",
    recommendedPlan: true,
    popularPlan: false,
  
    shipmentLimit: "100",
    userLimit: "2",
    apiLimit: "2000",
    storageLimit: "10",
  });

  const [showAddFeature, setShowAddFeature] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [savedData, setSavedData] = useState(null);

  // const addFeature = (f) =>
  //   setFormData((prev) => [...prev, { id: Date.now(), ...f }]);

  const addFeature = (f) => {
    setFormData({
      ...formData,
  
      features: [
        ...formData.features,
  
        {
          id: Date.now(),
          ...f,
        },
      ],
    });
  };

  const deleteFeature = (id) => {
    setFeatures((prev) => prev.filter((f) => f.id !== id));
    setDeleteTarget(null);
  };
  const toggleFeature = (id) =>
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f))
    );


  const handleSave = () => {

      // console.log('featrue', formData)
      const newPlan = {
        id: Date.now(),
        name: formData.planName,
        price: `₹${formData.price}/-`,
        desc:
          formData.billingCycle === "Per Month"
            ? "per month"
            : "per year",
    
        subscriber: formData.userLimit,
        status: formData.status,
        popularPlan: formData.popularPlan,
    
        recommendedPlan: formData.recommendedPlan,
    
        features: formData.features.map((f) => {
          if(f.enabled) return f.name;
        } ),
      };
 
      setPlansData((prev) => ({
        ...prev,
        [tab]: [newPlan, ...prev[formData.planType.toLowerCase()]],
      }));

    // console.log('data', formData.features )
    setTab(formData.planType.toLowerCase())
    setShowAddPlan(false)
  };

  const handlePublish = () => {
    const data = { ...formData, published: true };
    setSavedData(data);
    // console.log("Published Data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ADD FEATURE POPUP */}
      {showAddFeature && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-gray-800">
                Add New Feature
              </h3>
              <button
                onClick={() => setShowAddFeature(false)}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <FaTimes />
              </button>
            </div>
            <AddFeatureForm
              onClose={() => setShowAddFeature(false)}
              onAdd={addFeature}
            />
          </div>
        </div>
      )}

      {/* DELETE CONFIRM POPUP */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <FaTrash className="text-red-500" />
            </div>
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Delete Feature
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700">
                "{deleteTarget.name}"
              </span>
              ? This cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteFeature(deleteTarget.id)}
                className="flex-1 px-4 py-2.5 text-sm text-white bg-red-500 rounded-xl hover:bg-red-600 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SAVED DATA POPUP */}
      {savedData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  <FaCheck className="text-green-500 text-sm" />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  Plan Data Saved
                </h3>
              </div>
              <button
                onClick={() => setSavedData(null)}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Yeh data aapke{" "}
              <code className="bg-gray-100 px-1 rounded text-gray-600">
                onSave(data)
              </code>{" "}
              callback mein milega:
            </p>
            <div className="overflow-y-auto flex-1 bg-gray-900 rounded-xl p-4">
              <pre className="text-xs text-green-400 whitespace-pre-wrap break-all">
                {JSON.stringify(savedData, null, 2)}
              </pre>
            </div>
            <button
              onClick={() => setSavedData(null)}
              className="mt-4 w-full px-4 py-2.5 text-sm text-white bg-teal-500 rounded-xl hover:bg-teal-600 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* PAGE HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => setShowAddPlan(false)}
            className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">
              Add New Plan
            </h1>
            <p className="text-xs text-gray-400">
              Create and configure a new Subscription plan for platform users.
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {/* PLAN DETAILS */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-teal-500/10 rounded-md flex items-center justify-center">
                  <FaFileLines className="text-teal-500 text-xs" />
                </span>
                Plan Details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1.5">
                    Plan Name
                  </label>
                  <input
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
                    value={formData.planName}
                    onChange={(e) => setFormData({...formData,planName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1.5">
                    Plan Type
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-teal-500 bg-white transition-all"
                    value={formData.planType}
                    onChange={(e) => setFormData({...formData,planType: e.target.value})}
                  >
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1.5">
                    Price
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 gap-1 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all">
                    <span className="text-gray-400 text-sm">₹</span>
                    <input
                      className="w-full text-sm outline-none"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData,price: e.target.value})}
                    />
                    <span className="text-gray-400 text-xs">/-</span>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1.5">
                    Billing Cycle
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-xl px-2 py-2 text-sm outline-none focus:border-teal-500 bg-white transition-all"
                    value={formData.billingCycle}
                    onChange={(e) => setFormData({...formData,billingCycle: e.target.value})}
                  >
                    <option>Per Month</option>
                    <option>Per Year</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1.5">
                  Description
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 resize-none transition-all"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData,description: e.target.value})}
                />
              </div>
            </div>

            {/* PLAN FEATURES */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-teal-500/10 rounded-md flex items-center justify-center">
                  <FaListCheck className="text-teal-500 text-xs" />
                </span>
                Plan Features
              </h2>
              <div className="flex flex-col gap-2 mb-3">
                {formData.features.map((f) => (
                  <div key={f.id} className="flex items-center gap-2">
                    <FaGripVertical className="text-gray-300 text-xs cursor-grab flex-shrink-0" />
                    <input
                      className="flex-1 min-w-0 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
                      value={f.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          features: formData.features.map((x) =>
                            x.id === f.id
                              ? { ...x, name: e.target.value }
                              : x
                          ),
                        })
                      }
                    />
                    <Toggle
                        checked={f.enabled}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            features: formData.features.map((x) =>
                              x.id === f.id
                                ? { ...x, enabled: !x.enabled }
                                : x
                            ),
                          })
                        }
                      />
                  
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        features: formData.features.filter(
                          (x) => x.id !== f.id
                        ),
                      })
                    }
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex-shrink-0"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowAddFeature(true)}
                className="flex items-center gap-2 border border-teal-500 text-teal-500 rounded-xl px-4 py-2 text-sm hover:bg-teal-500/5 transition-all font-medium"
              >
                <FaPlus className="text-xs" /> Add Features
              </button>
            </div>

            {/* PLAN LIMITS */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-teal-500/10 rounded-md flex items-center justify-center">
                  <FaSliders className="text-teal-500 text-xs" />
                </span>
                Plan Limits
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                              {
                                label: "Shipment Limit",
                                key: "shipmentLimit",
                                suffix: null,
                              },
                              {
                                label: "User Limit",
                                key: "userLimit",
                                suffix: null,
                              },
                              {
                                label: "API Limit",
                                key: "apiLimit",
                                suffix: null,
                              },
                              {
                                label: "Storage Limit (GB)",
                                key: "storageLimit",
                                suffix: "GB",
                              },
                            ].map(({ label, key, suffix }) => (
                              <div key={key}>
                                <label className="text-xs font-medium text-gray-500 block mb-1.5">
                                  {label}
                                </label>

                                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all">
                                  <input
                                    className="w-full text-sm outline-none"
                                    value={formData[key]}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        [key]: e.target.value,
                                      })
                                    }
                                  />

                                  {suffix && (
                                    <span className="text-gray-400 text-xs font-medium ml-1">
                                      {suffix}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
            </div>

            {/* STATUS & VISIBILITY */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-teal-500/10 rounded-md flex items-center justify-center">
                  <FaEye className="text-teal-500 text-xs" />
                </span>
                Status & Visibility
              </h2>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1.5">
                    Status
                  </label>
                  <select
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-teal-500 bg-white transition-all"
                    value={formData.status}
                    onChange={(e) => formData({...formData, status: e.target.value})}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Draft</option>
                  </select>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">
                    Popular Plan
                  </p>
                  <Toggle
                          checked={formData.popularPlan}
                          onChange={(value) =>
                            setFormData({
                              ...formData,
                              popularPlan: value,
                            })
                          }
                        />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">
                    Recommended Plan
                  </p>
                  <Toggle
                        checked={formData.recommendedPlan}
                        onChange={(value) =>
                          setFormData({
                            ...formData,
                            recommendedPlan: value,
                          })
                        }
                      />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="bg-white rounded-2xl px-4 sm:px-5 py-3.5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-gray-300" /> Last updated: May 29,
                  2026 11:45 AM
                </span>
                <span className="flex items-center gap-1.5">
                  <FaUser className="text-gray-300" /> Updated by: Admin
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowAddPlan(false)}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex-1 sm:flex-none font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm text-white bg-teal-500 hover:bg-teal-600 rounded-xl flex items-center gap-1.5 flex-1 sm:flex-none justify-center font-medium transition-all"
                >
                  <FaFloppyDisk className="text-xs" /> Save Changes
                </button>
                <button
                  onClick={handlePublish}
                  className="px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center gap-1.5 flex-1 sm:flex-none justify-center font-medium transition-colors"
                >
                  <FaPaperPlane className="text-xs" /> Save & Publish
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - PLAN ANALYTICS */}
          <div className="w-full xl:w-64 2xl:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 xl:sticky xl:top-20">
              <h2 className="text-sm font-semibold text-gray-800">
                Plan Analytics
              </h2>
              <p className="text-xs text-gray-400 mb-4">
                Real-time overview of this plan performance
              </p>
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
                {[
                  {
                    icon: <FaUsers className="text-teal-500 text-sm" />,
                    label: "Total Subscribers",
                    value: "45",
                    change: "+12 this month",
                  },
                  {
                    icon: (
                      <FaIndianRupeeSign className="text-teal-500 text-sm" />
                    ),
                    label: "Revenue Generated",
                    value: "₹89,988",
                    change: "+12 this month",
                  },
                  {
                    icon: <FaRotate className="text-teal-500 text-sm" />,
                    label: "Renewal Rate",
                    value: "78.6%",
                    change: "6.2% this month",
                  },
                  {
                    icon: <FaUser className="text-teal-500 text-sm" />,
                    label: "Active users",
                    value: "38",
                    change: "+9 this month",
                  },
                ].map(({ icon, label, value, change }) => (
                  <div key={label} className="bg-teal-50 rounded-xl p-3.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      {icon}
                      <span className="text-xs text-gray-500">{label}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">
                      {value}
                    </div>
                    <div className="text-xs text-teal-500 mt-1 font-medium">
                      {change}
                    </div>
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

// ─── HELPER: Add Feature Form (used inside popup) ───
function AddFeatureForm({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Feature Name
        </label>
        <input
          autoFocus
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
          placeholder="e.g. Priority Support"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            name.trim() &&
            (onAdd({ name: name.trim(), enabled }), onClose())
          }
        />
      </div>
      <div className="mb-6 flex items-center justify-between bg-gray-50 rounded-xl p-3">
        <div>
          <p className="text-sm font-medium text-gray-700">Status</p>
          <p className="text-xs text-gray-400">
            {enabled ? "Feature is enabled" : "Feature is disabled"}
          </p>
        </div>
        <Toggle checked={enabled} onChange={setEnabled} />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onClose}
          className="flex-1 px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (name.trim()) {
              onAdd({ name: name.trim(), enabled });
              onClose();
            }
          }}
          className="flex-1 px-4 py-2.5 text-sm text-white bg-teal-500 rounded-xl hover:bg-teal-600 font-medium"
        >
          Add Feature
        </button>
      </div>
    </>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Plans/ Subscription");
  const [showNotice, setShowNotice] = useState(false);
  const [showAddPlan, setShowAddPlan] = useState(false);

  console.log('ac', activeNav)
  
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
