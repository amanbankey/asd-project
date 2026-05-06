import { useState } from "react";
import {  FaPlus, FaUser, FaUserTie, FaUserGear, FaUserShield, FaUserCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Toggle = ({ checked, onChange }) => (
  <div
    onClick={() => onChange(!checked)}
    className={`w-5 h-5 rounded flex items-center justify-center cursor-pointer border-2 transition-all ${checked ? "bg-teal-500 border-teal-500" : "bg-white border-gray-300"}`}
  >
    {checked && <span className="text-white text-xs font-bold">✓</span>}
  </div>
);

const initialRoles = [
  {
    id: 1,
    name: "Vendors Manager",
    description: "Full System access",
    users: 12,
    color: "bg-teal-500",
    icon: <FaUserTie className="text-white text-lg" />,
    permissions: {
      Dashboard:       { view: true,  add: false, edit: false, delete: false },
      "Booking Request": { view: true,  add: true,  edit: false, delete: false },
      "Orders/Shipment": { view: true,  add: false, edit: true,  delete: false },
      "Tracking Updates":{ view: true,  add: false, edit: true,  delete: false },
      Documents:       { view: true,  add: false, edit: false, delete: false },
      Earnings:        { view: true,  add: false, edit: false, delete: false },
      "Ads/Marketplace": { view: false, add: false, edit: false, delete: false },
      Support:         { view: true,  add: false, edit: false, delete: false },
      Settings:        { view: false, add: false, edit: false, delete: false },
    },
  },
  {
    id: 2,
    name: "B2B User",
    description: "Standard Business and partnership",
    users: 245,
    color: "bg-orange-400",
    icon: <FaUserShield className="text-white text-lg" />,
    permissions: {
      Dashboard:       { view: true,  add: false, edit: false, delete: false },
      "Booking Request": { view: true,  add: true,  edit: false, delete: false },
      "Orders/Shipment": { view: true,  add: true,  edit: false, delete: false },
      "Tracking Updates":{ view: true,  add: false, edit: false, delete: false },
      Documents:       { view: false, add: false, edit: false, delete: false },
      Earnings:        { view: true,  add: false, edit: false, delete: false },
      "Ads/Marketplace": { view: true,  add: false, edit: false, delete: false },
      Support:         { view: true,  add: false, edit: false, delete: false },
      Settings:        { view: false, add: false, edit: false, delete: false },
    },
  },
  {
    id: 3,
    name: "Staff Managment",
    description: "Staff management they can manage Documentation",
    users: 245,
    color: "bg-gray-400",
    icon: <FaUserGear className="text-white text-lg" />,
    permissions: {
      Dashboard:       { view: true,  add: false, edit: false, delete: false },
      "Booking Request": { view: false, add: false, edit: false, delete: false },
      "Orders/Shipment": { view: true,  add: false, edit: false, delete: false },
      "Tracking Updates":{ view: true,  add: false, edit: true,  delete: false },
      Documents:       { view: true,  add: true,  edit: true,  delete: false },
      Earnings:        { view: false, add: false, edit: false, delete: false },
      "Ads/Marketplace": { view: false, add: false, edit: false, delete: false },
      Support:         { view: true,  add: false, edit: false, delete: false },
      Settings:        { view: false, add: false, edit: false, delete: false },
    },
  },
  {
    id: 4,
    name: "Compliance",
    description: "User can access all his own info and track their port",
    users: 245,
    color: "bg-blue-500",
    icon: <FaUserCheck className="text-white text-lg" />,
    permissions: {
      Dashboard:       { view: true,  add: false, edit: false, delete: false },
      "Booking Request": { view: true,  add: false, edit: false, delete: false },
      "Orders/Shipment": { view: true,  add: false, edit: false, delete: false },
      "Tracking Updates":{ view: true,  add: false, edit: false, delete: false },
      Documents:       { view: true,  add: false, edit: false, delete: false },
      Earnings:        { view: true,  add: false, edit: false, delete: false },
      "Ads/Marketplace": { view: false, add: false, edit: false, delete: false },
      Support:         { view: false, add: false, edit: false, delete: false },
      Settings:        { view: false, add: false, edit: false, delete: false },
    },
  },
  {
    id: 5,
    name: "User",
    description: "User can access all his own info and track their port",
    users: 245,
    color: "bg-green-500",
    icon: <FaUser className="text-white text-lg" />,
    permissions: {
      Dashboard:       { view: true,  add: false, edit: false, delete: false },
      "Booking Request": { view: false, add: false, edit: false, delete: false },
      "Orders/Shipment": { view: true,  add: false, edit: false, delete: false },
      "Tracking Updates":{ view: true,  add: false, edit: false, delete: false },
      Documents:       { view: false, add: false, edit: false, delete: false },
      Earnings:        { view: true,  add: false, edit: false, delete: false },
      "Ads/Marketplace": { view: false, add: false, edit: false, delete: false },
      Support:         { view: true,  add: false, edit: false, delete: false },
      Settings:        { view: false, add: false, edit: false, delete: false },
    },
  },
];

const modules = ["Dashboard", "Booking Request", "Orders/Shipment", "Tracking Updates", "Documents", "Earnings", "Ads/Marketplace", "Support", "Settings"];
const permKeys = ["view", "add", "edit", "delete"];

function AddUserModal({ onClose, onAdd }) {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState("");

  const handleAdd = () => {
    if (!roleName.trim()) return;
    onAdd({ roleName, description, users: parseInt(users) || 0 });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-semibold text-gray-800">Add New Role</h3>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Role Name</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
              placeholder="Enter role name"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Description</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Users</label>
            <input
              type="number"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all"
              placeholder="Number of users"
              value={users}
              onChange={(e) => setUsers(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-colors">
            Cancel
          </button>
          <button onClick={handleAdd} className="flex-1 px-4 py-2.5 text-sm text-white bg-teal-500 rounded-xl hover:bg-teal-600 font-medium transition-colors">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RolesPermission() {
  const [roles, setRoles] = useState(initialRoles);
  const [selectedId, setSelectedId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const selected = roles.find((r) => r.id === selectedId);

  const togglePerm = (mod, key) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedId
          ? { ...r, permissions: { ...r.permissions, [mod]: { ...r.permissions[mod], [key]: !r.permissions[mod][key] } } }
          : r
      )
    );
  };

  const handleAddRole = ({ roleName, description, users }) => {
    const colors = ["bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-yellow-500"];
    const newRole = {
      id: Date.now(),
      name: roleName,
      description,
      users,
      color: colors[Math.floor(Math.random() * colors.length)],
      icon: <FaUser className="text-white text-lg" />,
      permissions: Object.fromEntries(modules.map((m) => [m, { view: false, add: false, edit: false, delete: false }])),
    };
    setRoles((prev) => [...prev, newRole]);
    setSelectedId(newRole.id);
  };

  const handleRoleClick = (id) => {
    setSelectedId(id);
    setShowRight(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {showModal && <AddUserModal onClose={() => setShowModal(false)} onAdd={handleAddRole} />}

      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Roles & Permissions</h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Manage user rooles and their permissions</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
          >
            <FaPlus className="text-xs" /> Add User
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT - ROLES LIST */}
          <div className={`w-full lg:w-72 xl:w-80 flex-shrink-0 ${showRight ? "hidden lg:block" : "block"}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Roles</h2>
              <div className="flex flex-col gap-2">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    onClick={() => handleRoleClick(role.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${selectedId === role.id ? "border-teal-200 bg-teal-50/50" : "border-transparent hover:bg-gray-50"}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${role.color}`}>
                      {role.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{role.name}</p>
                      <p className="text-xs text-gray-400 truncate">{role.description}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{role.users} users</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - PERMISSIONS TABLE */}
          <div className={`flex-1 min-w-0 ${showRight ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">

              <div className="flex items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-2">
                  {showRight && (
                    <button onClick={() => setShowRight(false)} className="lg:hidden w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                      <FaTimes />
                    </button>
                  )}
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800">{selected?.name}</h2>
                </div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                  Save Changes
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[380px]">
                  <thead>
                    <tr className="bg-gray-50 rounded-xl">
                      <th className="text-left text-xs font-semibold text-gray-500 px-3 py-3 rounded-l-xl w-1/2">MODULE</th>
                      {permKeys.map((k) => (
                        <th key={k} className="text-center text-xs font-semibold text-teal-500 px-2 py-3 uppercase last:rounded-r-xl">
                          {k}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {modules.map((mod, i) => (
                      <tr key={mod} className={i % 2 === 0 ? "" : ""}>
                        <td className="text-sm text-gray-700 px-3 py-3 font-medium">{mod}</td>
                        {permKeys.map((key) => (
                          <td key={key} className="text-center px-2 py-3">
                            <div className="flex justify-center">
                              <Toggle
                                checked={selected?.permissions[mod]?.[key] || false}
                                onChange={() => togglePerm(mod, key)}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 border border-teal-200 bg-teal-50/50 rounded-xl p-4">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-gray-700">Note : </span>
                  When assigning this role to a user, these permissions will be automatically applied. You can save this role configuration for reuse across multiple users.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}