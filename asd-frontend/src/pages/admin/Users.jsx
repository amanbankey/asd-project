

import { useState, useEffect, useRef } from "react";
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
          <h2 className="text-lg lg:text-xl font-semibold">Edit User</h2>
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
            <p className="font-medium text-sm lg:text-lg">{form.name}</p>
            <p className="text-xs text-gray-500">Last updated 2 days ago</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Basic Info</p>
             <div className="flex items-center"> 
            <div className="flex  flex-col gap-2 w-full mx-auto max-w-36  items-center mb-3">
              <div className="w-14 h-14 border  rounded-full flex items-center justify-center text-gray-400">
                <FiCamera  className="text-xl"/> 
              </div>
              <div > 
              <p className="text-xs text-gray-400 flex flex-col items-center whitespace-nowrap">
                <span>Upload Photo </span>
                <span>JPG, PNG up to 2 MB </span> 
              </p>
              </div>
            </div>

            <div className="flex flex-col"> 
            <div className="flex flex-col"> 
              <label className="text-[#6D6D6D]" >Full Name</label>
                <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full border px-3 py-1 rounded mb-2 text-[#6D6D6D]"
            />

            </div>
            
           <div className="flex-col"> 
            <label className="text-[#6D6D6D]" > Email Address </label>
              <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email Address"
              className="w-full border px-3 py-1 rounded mb-2 text-[#6D6D6D]"
            />

           </div>
          
           <div className="flex-col">
             <label className="text-[#6D6D6D]" > Phone number </label>
             <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone Number"
              className="w-full border px-3 py-1 rounded text-[#6D6D6D]"
            />
           </div>
            
            </div>

            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Account Type</p>
            <div> 
              <label className="text-[#6D6D6D] text-sm"> Account Type</label>
            </div>
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
            <div className="flex gap-2">
            <div className="flex flex-col ">
               <label className="text-[#727272]">Company Info </label>
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company Name"
              className="w-full border px-3 py-2 rounded mb-2"
            /></div>
           
           <div> 
             <label className="text-[#727272]"> GST No</label>
            <input
              value={form.gst}
              onChange={(e) => setForm({ ...form, gst: e.target.value })}
              placeholder="GST Number"
              className="w-full border px-3 py-2 rounded mb-2"
            />
            </div>
            </div>

           <div> 
            <label className="text-[#727272]">Business Type</label>
              <select
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option>Exporter</option>
                  <option>Manufacturer</option>
                </select>
            </div>
         
          </div>

          <div className="border-t pt-4 flex flex-col">
            <p className="text-sm font-medium mb-2">Status</p>
           
            <div className="flex flex-col    gap-3">
              <label className="text-[#727272]">Account status</label>
              <div className="flex gap-4"> 
              <input
                type="checkbox"
                checked={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.checked })}
              />
              <div className="flex flex-col">
                 <span className="text-sm">Active</span>
                 <span className="text-[#727272] text-xs">Users can access the plateform</span>
              </div>
              </div>
             
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Subscription</p>

            <div className="grid grid-cols-2 gap-2">
              <div className=" flex flex-col"> 
              <label className="text-[#727272]">Plan</label>
              <select
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option>Pro</option>
                <option>Basic</option>
              </select>
</div>
            <div className="flex flex-col"> <label className="text-[#727272]"> Expiry date</label> <input
                type="date"
                value={form.expiry}
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                className="border px-3 py-2 rounded"
              /></div>
             
            </div>
          </div>

          <div className="flex  border-t pt-4 gap-2">
              
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



export default function UsersSection({ setShowNotice }) {
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
          <h1 className="text-lg sm:text-xl xl:text-3xl font-semibold">Users</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Manage user accounts and access
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-md  text-xs sm:text-sm"
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
          <table className="w-full text-xs sm:text-sm">
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
                <tr key={u.id} className="border-t text-[#707071]">
                  <td className="py-2 flex font-medium items-center gap-2">
                    <span className="w-7 h-7 hidden rounded-full bg-teal-100 text-teal-600 sm:flex items-center justify-center text-xs">
                      {u.name[0]}
                    </span>
                    {u.name}
                  </td>
                  <td className="font-medium  ">{u.email}</td>
                  <td className="font-medium">{u.phone}</td>
                  <td  className="font-medium text-xs sm:text-sm">{u.company}</td>
                  <td className="font-medium">{u.password}</td>
                  <td className="font-medium">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs ${
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