

import { useState } from "react";
import {
  FiMoreVertical,
  FiX,
  FiSearch,
  FiChevronDown,
  FiUsers,
  FiPlus,
  FiTrash2,
  FiLock,
  FiChevronRight,
} from "react-icons/fi";
import {
  BsBuilding,
  BsHeadset,
  BsCode,
  BsPersonFill,
  BsPeopleFill,
  BsPersonBadgeFill,
  BsShieldFill,
} from "react-icons/bs";
import { HiOutlineOfficeBuilding, HiCube } from "react-icons/hi";
import { MdDashboard, MdPeople, MdSettings, MdBarChart } from "react-icons/md";

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${checked ? "bg-teal-500" : "bg-gray-300"}`}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${checked ? "translate-x-6" : "translate-x-0.5"}`}
      />
    </button>
  );
}

const avatarColors = [
  "bg-orange-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-yellow-400",
];

function Avatar({ name, index }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`w-7 h-7 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

const departmentIcons = {
  Sales: <BsBuilding className="text-teal-500" size={20} />,
  Support: <BsHeadset className="text-orange-400" size={20} />,
  Technical: <BsCode className="text-teal-500" size={20} />,
  Billing: <BsBuilding className="text-orange-400" size={20} />,
};

const departmentTypeOptions = [
  "Sales",
  "Support",
  "Technical",
  "Billing",
  "HR",
  "Finance",
];

const allUsers = [
  "Rahul Yadav",
  "Priya Sharma",
  "Amit Singh",
  "Neha Gupta",
  "Vikram Patel",
  "Sunita Joshi",
  "Ravi Kumar",
  "Pooja Mehta",
  "Arjun Das",
  "Kavya Reddy",
];

const initialDepartments = [
  {
    id: 1,
    name: "Sales",
    desc: "Handle sales inquiries and demos",
    members: ["Rahul Yadav", "Priya Sharma", "Amit Singh", "Neha Gupta"],
    roles: ["Sales Manager", "Sales Representative"],
  },
  {
    id: 2,
    name: "Support",
    desc: "Handles customer support and queries",
    members: ["Vikram Patel", "Sunita Joshi", "Ravi Kumar", "Pooja Mehta"],
    roles: ["Sales Manager", "Sales Representative"],
  },
  {
    id: 3,
    name: "Technical",
    desc: "Handle sales inquiries and demos",
    members: ["Arjun Das", "Kavya Reddy", "Rahul Yadav", "Priya Sharma"],
    roles: ["Sales Manager", "Sales Representative"],
  },
  {
    id: 4,
    name: "Billing",
    desc: "Handle sales inquiries and demos",
    members: ["Amit Singh", "Neha Gupta", "Vikram Patel", "Sunita Joshi"],
    roles: ["Sales Manager", "Sales Representative"],
  },
];

const accessKeys = ["DASHBOARD", "USERS", "REPORTS", "SETTINGS"];

const roleIconsList = [
  <BsPersonFill className="text-teal-500" size={16} />,
  <BsPeopleFill className="text-blue-500" size={16} />,
  <BsPersonBadgeFill className="text-purple-500" size={16} />,
  <BsShieldFill className="text-orange-500" size={16} />,
  <BsPersonFill className="text-green-500" size={16} />,
  <BsShieldFill className="text-gray-500" size={16} />,
];

const permissionSections = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <MdDashboard className="text-orange-400" size={18} />,
    desc: "Access to dashboard and overview pages",
    perms: [{ key: "viewDashboard", label: "View Dashboard" }],
  },
  {
    key: "users",
    label: "Users",
    icon: <MdPeople className="text-blue-500" size={18} />,
    desc: "Manage users and their access",
    perms: [
      { key: "viewUsers", label: "View Users" },
      { key: "addUsers", label: "Add Users" },
      { key: "editUsers", label: "Edit users" },
      { key: "deleteUsers", label: "Delete users" },
    ],
  },
  {
    key: "modules",
    label: "Modules",
    icon: <HiCube className="text-teal-500" size={18} />,
    desc: "Access system modules",
    perms: [
      { key: "accessModules", label: "Access Modules" },
      { key: "configureModules", label: "Configure Modules" },
    ],
  },
  {
    key: "report",
    label: "Report",
    icon: <MdBarChart className="text-teal-500" size={18} />,
    desc: "View and export reports",
    perms: [
      { key: "viewReports", label: "View Reports" },
      { key: "exportReport", label: "Export Report" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <MdSettings className="text-teal-400" size={18} />,
    desc: "Manage system settings",
    perms: [{ key: "accessSettings", label: "Access Settings" }],
  },
];

const defaultPerms = {
  viewDashboard: false,
  viewUsers: false,
  addUsers: true,
  editUsers: false,
  deleteUsers: false,
  accessModules: false,
  configureModules: false,
  viewReports: false,
  exportReport: true,
  accessSettings: false,
};

const initialRoles = [
  {
    id: 1,
    name: "Sales Manager",
    users: 5,
    status: "Active",
    core: false,
    desc: "can manage sales team, view report and handle customer data.",
    perms: { ...defaultPerms, viewDashboard: true, viewUsers: true },
  },
  {
    id: 2,
    name: "Sales Executive",
    users: 12,
    status: "Active",
    core: false,
    desc: "",
    perms: { ...defaultPerms },
  },
  {
    id: 3,
    name: "Sales Agent",
    users: 12,
    status: "Active",
    core: false,
    desc: "",
    perms: { ...defaultPerms },
  },
  {
    id: 4,
    name: "Operation Manager",
    users: 12,
    status: "Active",
    core: false,
    desc: "",
    perms: { ...defaultPerms },
  },
  {
    id: 5,
    name: "Accountant",
    users: 4,
    status: "Active",
    core: false,
    desc: "",
    perms: { ...defaultPerms },
  },
  {
    id: 6,
    name: "Admin",
    users: 2,
    status: "Core",
    core: true,
    desc: "Full system access.",
    perms: {
      viewDashboard: true,
      viewUsers: true,
      addUsers: true,
      editUsers: true,
      deleteUsers: true,
      accessModules: true,
      configureModules: true,
      viewReports: true,
      exportReport: true,
      accessSettings: true,
    },
  },
];

function ManageRoles({ deptName, onBack }) {
  const [roles, setRoles] = useState(initialRoles);
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [statusOpen, setStatusOpen] = useState(false);
  const [editPerms, setEditPerms] = useState(null);
  const [editInfo, setEditInfo] = useState(null);
  const [saved, setSaved] = useState(false);

  const selected = roles.find((r) => r.id === selectedId);
  const filteredRoles = roles.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "All Status" || r.status === statusFilter),
  );

  const selectRole = (role) => {
    setSelectedId(role.id);
    setEditPerms({ ...role.perms });
    setEditInfo({ name: role.name, desc: role.desc || "" });
  };

  const getEditPerms = () =>
    editPerms || (selected ? { ...selected.perms } : {});
  const getEditInfo = () =>
    editInfo || { name: selected?.name || "", desc: selected?.desc || "" };

  const togglePerm = (key) => {
    if (selected?.core) return;
    setEditPerms((p) => ({
      ...(p || selected.perms),
      [key]: !(p || selected.perms)[key],
    }));
  };

  const toggleSectionPerm = (sectionKey, val) => {
    if (selected?.core) return;
    const section = permissionSections.find((s) => s.key === sectionKey);
    const updates = {};
    section.perms.forEach((p) => {
      updates[p.key] = val;
    });
    setEditPerms((p) => ({ ...(p || selected.perms), ...updates }));
  };

  const isSectionEnabled = (sectionKey) => {
    const section = permissionSections.find((s) => s.key === sectionKey);
    return section.perms.some((p) => getEditPerms()[p.key]);
  };

  const handleSave = () => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedId
          ? {
              ...r,
              name: getEditInfo().name,
              desc: getEditInfo().desc,
              perms: getEditPerms(),
            }
          : r,
      ),
    );
    setEditPerms(null);
    setEditInfo(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setEditPerms({ ...selected.perms });
    setEditInfo({ name: selected.name, desc: selected.desc || "" });
  };

  const handleDelete = () => {
    if (selected?.core) return;
    const remaining = roles.filter((r) => r.id !== selectedId);
    setRoles(remaining);
    setSelectedId(remaining[0]?.id || null);
    setEditPerms(null);
    setEditInfo(null);
  };

  const handleAddRole = () => {
    const name = prompt("Enter new role name:");
    if (!name?.trim()) return;
    const newRole = {
      id: Date.now(),
      name: name.trim(),
      users: 0,
      status: "Active",
      core: false,
      desc: "",
      perms: { ...defaultPerms },
    };
    setRoles((prev) => [...prev, newRole]);
    setSelectedId(newRole.id);
    setEditPerms({ ...newRole.perms });
    setEditInfo({ name: newRole.name, desc: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-3 py-5 sm:px-5 sm:py-7">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">
              <button
                className="hover:text-teal-500 cursor-pointer"
                onClick={onBack}
              >
                Support
              </button>
              <span className="mx-1">›</span>
              <button
                className="hover:text-teal-500 cursor-pointer"
                onClick={onBack}
              >
                Department
              </button>
              <span className="mx-1">›</span>
              <span className="text-gray-700">Manage Roles</span>
            </p>
            <h1 className="text-xl font-bold text-gray-800">Manage Roles</h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Define roles control access permissions
            </p>
          </div>
          <button
            onClick={handleAddRole}
            className="px-4 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors flex-shrink-0"
          >
            +Add Role
          </button>
        </div>

        {saved && (
          <div className="mb-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-2">
            Changes saved successfully!
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Roles
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <FiSearch
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                      size={13}
                    />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search Roles"
                      className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-lg text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-300"
                    />
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setStatusOpen(!statusOpen)}
                      className="flex items-center gap-1 px-2 py-1.5 border border-gray-300 rounded-lg text-xs text-gray-600 whitespace-nowrap"
                    >
                      {statusFilter} <FiChevronDown size={12} />
                    </button>
                    {statusOpen && (
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden min-w-max">
                        {["All Status", "Active", "Core"].map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              setStatusFilter(s);
                              setStatusOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-xs transition-colors ${statusFilter === s ? "bg-blue-100" : "hover:bg-gray-50"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-50">
                {filteredRoles.map((role, i) => (
                  <button
                    key={role.id}
                    onClick={() => selectRole(role)}
                    className={`w-full flex items-center justify-between px-3 py-3 text-left transition-colors ${selectedId === role.id ? "bg-teal-50 border-l-2 border-teal-500" : "hover:bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {roleIconsList[i % roleIconsList.length]}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">
                          {role.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {role.users} users
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {role.core ? (
                        <>
                          <span className="text-xs text-gray-500 border border-gray-300 rounded px-1.5 py-0.5">
                            Core
                          </span>
                          <FiLock size={12} className="text-gray-400" />
                        </>
                      ) : (
                        <span className="text-xs text-teal-600 font-medium">
                          Active
                        </span>
                      )}
                      <FiChevronRight size={13} className="text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-3 border-t border-gray-100">
                <button
                  onClick={handleAddRole}
                  className="w-full py-2 text-sm text-teal-500 border border-dashed border-teal-300 rounded-lg hover:bg-teal-50 transition-colors flex items-center justify-center gap-1"
                >
                  <FiPlus size={14} /> Add New Role
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4  mb-4">
            {selected && (
              <>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    1. Roles Information
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Role Name
                      </label>
                      <input
                        type="text"
                        value={getEditInfo().name}
                        onChange={(e) =>
                          setEditInfo((p) => ({
                            ...(p || {
                              name: selected.name,
                              desc: selected.desc || "",
                            }),
                            name: e.target.value,
                          }))
                        }
                        disabled={selected.core}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 disabled:bg-gray-50 disabled:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Description
                      </label>
                      <textarea
                        value={getEditInfo().desc}
                        onChange={(e) =>
                          setEditInfo((p) => ({
                            ...(p || { name: selected.name, desc: "" }),
                            desc: e.target.value,
                          }))
                        }
                        disabled={selected.core}
                        rows={2}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none disabled:bg-gray-50 disabled:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 ">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    1. Permissions
                  </p>
                  <div className="space-y-2">
                    {permissionSections.map((section) => (
                      <div
                        key={section.key}
                        className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            {section.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {section.label}
                            </p>
                            <p className="text-xs text-gray-400">
                              {section.desc}
                            </p>
                          </div>
                        </div>
                        <Toggle
                          checked={isSectionEnabled(section.key)}
                          onChange={(val) =>
                            toggleSectionPerm(section.key, val)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
          {permissionSections.map((section) => (
            <div key={section.key}>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {section.label}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {section.perms.map((perm) => (
                  <label
                    key={perm.key}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={getEditPerms()[perm.key] || false}
                      onChange={() => togglePerm(perm.key)}
                      disabled={selected.core}
                      className="w-4 h-4 accent-teal-500 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600">{perm.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-5 ">
          <button
            onClick={handleDelete}
            disabled={selected?.core}
            className="flex items-center gap-2 whitespace-nowrap sm:px-5 px-2 py-2.5 text-sm font-medium text-red-500 border border-red-300 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FiTrash2 size={14} className="sm:block hidden" /> Delete Role
          </button>
          {selected?.core && (
            <span className="text-xs text-gray-400">
              You cant delete a core role ⓘ
            </span>
          )}
          <div className="flex gap-3 ml-auto">
            <button
              onClick={handleReset}
              className="sm:px-5 px-2 whitespace-nowrap py-2.5 text-sm font-medium border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Reset Changes
            </button>
            <button
              onClick={handleSave}
              className="sm:px-5 px-2 whitespace-nowrap py-2.5 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [view, setView] = useState("list");
  const [editDept, setEditDept] = useState(null);
  const [manageRolesDept, setManageRolesDept] = useState(null);
  const [access, setAccess] = useState({
    Sales: { DASHBOARD: true, USERS: false, REPORTS: false, SETTINGS: false },
    Support: {},
    Technical: {},
    Billing: {},
  });
  const [memberSearch, setMemberSearch] = useState("");
  const [memberDropOpen, setMemberDropOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "Sales",
    members: [],
    status: true,
  });

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setForm({
      name: "",
      description: "",
      type: "Sales",
      members: [],
      status: true,
    });
    setEditDept(null);
    setView("create");
  };

  const openEdit = (dept) => {
    setForm({
      name: dept.name,
      description: dept.desc,
      type: dept.name,
      members: [...dept.members],
      status: true,
    });
    setEditDept(dept.id);
    setView("create");
  };

  const openManageRoles = (dept) => {
    setManageRolesDept(dept);
    setView("manageRoles");
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editDept) {
      setDepartments((prev) =>
        prev.map((d) =>
          d.id === editDept
            ? {
                ...d,
                name: form.name,
                desc: form.description,
                members: form.members,
              }
            : d,
        ),
      );
    } else {
      setDepartments((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: form.name,
          desc: form.description,
          members: form.members,
          roles: ["Sales Manager"],
        },
      ]);
    }
    setView("list");
  };

  const addMember = (name) => {
    if (!form.members.includes(name))
      handleChange("members", [...form.members, name]);
    setMemberSearch("");
    setMemberDropOpen(false);
  };

  const removeMember = (name) =>
    handleChange(
      "members",
      form.members.filter((m) => m !== name),
    );

  const toggleAccess = (dept, key) => {
    setAccess((prev) => ({
      ...prev,
      [dept]: { ...(prev[dept] || {}), [key]: !prev[dept]?.[key] },
    }));
  };

  const filteredUsers = allUsers.filter(
    (u) =>
      u.toLowerCase().includes(memberSearch.toLowerCase()) &&
      !form.members.includes(u),
  );

  if (view === "manageRoles") {
    return (
      <ManageRoles
        deptName={manageRolesDept?.name}
        onBack={() => setView("list")}
      />
    );
  }

  if (view === "create") {
    return (
      <div className="min-h-screen bg-gray-50 px-3 py-6 sm:px-6 sm:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                <button
                  onClick={() => setView("list")}
                  className="font-bold text-gray-800 hover:text-teal-500 transition-colors"
                >
                  Support
                </button>
                <span className="text-gray-400">›</span>
                <span className="text-gray-700 font-medium">
                  Create Department
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Update department details and team members
              </p>
            </div>
            <button
              onClick={openCreate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors flex-shrink-0"
            >
              + Create Department
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-5">
            <div>
              <h3 className="text-sm font-bold text-teal-600 mb-4">
                Basic Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Department Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Sales Department"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Drives revenue by managing client relationships generating leads, and closing deals."
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Department Type
                  </label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 appearance-none bg-white"
                    >
                      {departmentTypeOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <FiChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                  <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <span className="text-yellow-500 text-sm">⚠</span>
                    <span className="text-xs text-yellow-700">
                      Changing department type may affect role suggestions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-teal-600 mb-3">
                Team Members
              </h3>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Add Team Members
              </label>
              <div className="relative mb-3">
                <FiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={15}
                />
                <input
                  type="text"
                  value={memberSearch}
                  onChange={(e) => {
                    setMemberSearch(e.target.value);
                    setMemberDropOpen(true);
                  }}
                  onFocus={() => setMemberDropOpen(true)}
                  placeholder="Search users by name or email..."
                  className="w-full pl-9 pr-9 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                <FiChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                {memberDropOpen && filteredUsers.length > 0 && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-h-40 overflow-y-auto">
                    {filteredUsers.map((u, i) => (
                      <button
                        key={u}
                        onClick={() => addMember(u)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                      >
                        <Avatar name={u} index={i} />
                        {u}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {form.members.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {form.members.map((m, i) => (
                    <div
                      key={m}
                      className="flex items-center gap-1.5 bg-gray-100 rounded-full pl-1 pr-2 py-0.5"
                    >
                      <Avatar name={m} index={i} />
                      <span className="text-xs text-gray-700">{m}</span>
                      <button
                        onClick={() => removeMember(m)}
                        className="text-gray-400 hover:text-gray-600 ml-0.5"
                      >
                        <FiX size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {form.members.length > 0 && (
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-teal-600 font-medium flex items-center gap-1">
                    <FiUsers size={13} /> {form.members.length} members selected
                  </span>
                  <button
                    onClick={() => handleChange("members", [])}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                </div>
              )}

              <div className="border border-dashed border-gray-300 rounded-lg py-4 text-center">
                <p className="text-sm text-gray-400">No members assigned</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-medium text-teal-600">Status</span>
              <Toggle
                checked={form.status}
                onChange={(val) => handleChange("status", val)}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setView("list")}
              className="flex-1 py-3 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            You have unsaved changes
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-3 py-6 sm:px-6 sm:py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Support
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Manage user rooles and their permissions
            </p>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors flex-shrink-0"
          >
            + Create Department
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-start gap-3 mb-5">
          <HiOutlineOfficeBuilding
            className="text-teal-600 mt-0.5 flex-shrink-0"
            size={18}
          />
          <div>
            <p className="text-sm font-semibold text-teal-600">
              Department Role Assignment
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              When creating users, you can assign them to departments. The
              department's pre-configured roles and permissions will be
              automatically applied to the user.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {departmentIcons[dept.name] || (
                      <BsBuilding className="text-teal-500" size={18} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {dept.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{dept.desc}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <FiMoreVertical size={16} />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-1.5">Team Members</p>
              <div className="flex items-center gap-1 mb-3">
                {dept.members.slice(0, 4).map((m, i) => (
                  <div key={i} style={{ marginLeft: i > 0 ? "-6px" : "0" }}>
                    <Avatar name={m} index={i} />
                  </div>
                ))}
                {dept.members.length > 4 && (
                  <span className="text-xs text-gray-500 ml-2">
                    +{dept.members.length - 4}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 mb-1.5">Department Roles</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {dept.roles.map((r) => (
                  <span
                    key={r}
                    className="px-2 py-0.5 text-xs bg-teal-50 text-teal-700 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(dept)}
                  className="flex-1 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => openManageRoles(dept)}
                  className="flex-1 py-1.5 text-sm border border-teal-400 text-teal-500 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Manage Roles
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4">
            Department Access Control
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-bold text-teal-500 pb-3 pr-4">
                    DEPARTMENT
                  </th>
                  {accessKeys.map((k) => (
                    <th
                      key={k}
                      className="text-center text-xs font-bold text-teal-500 pb-2 px-2"
                    >
                      {k}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr
                    key={dept.id}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="py-1 pr-4 text-sm text-gray-700">
                      {dept.name}
                    </td>
                    {accessKeys.map((k) => (
                      <td key={k} className="py-1 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!access[dept.name]?.[k]}
                          onChange={() => toggleAccess(dept.name, k)}
                          className="w-4 h-4 accent-teal-500 cursor-pointer"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
