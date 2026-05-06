import { useState, useRef } from "react";
import { FiSettings, FiGlobe, FiMail, FiCreditCard, FiFileText, FiSliders, FiShield, FiMoreHorizontal, FiBell, FiMessageCircle, FiX, FiUpload, FiUser } from "react-icons/fi";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const tabs = [
  { id: "general", label: "General Settings", icon: <FiSettings /> },
  { id: "social", label: "Social Login", icon: <FiGlobe /> },
  { id: "ai", label: "AI Settings", icon: <FiSliders /> },
  { id: "email", label: "Email & SMS", icon: <FiMail /> },
  { id: "subscription", label: "Subscription", icon: <FiCreditCard /> },
  { id: "payment", label: "Payment Gateway", icon: <FiCreditCard /> },
  { id: "documents", label: "Documents", icon: <FiFileText /> },
  { id: "features", label: "Configure Features", icon: <FiSliders /> },
  { id: "security", label: "Security & Tokens", icon: <FiShield /> },
  { id: "misc", label: "Miscellaneous", icon: <FiMoreHorizontal /> },
  { id: "notice", label: "Notice Board Setting", icon: <FiBell /> },
  { id: "whatsapp", label: "Whatsapp API", icon: <FiMessageCircle /> },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${checked ? "bg-teal-500" : "bg-gray-300"}`}
    >
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

function Modal({ title, subtitle, open, onClose, onSave, platform }) {
  const [id, setId] = useState("");
  const [secret, setSecret] = useState("");

  if (!open) return null;

  const handleSave = () => {
    onSave({ id, secret });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <div className="p-5 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-800">{title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FiX size={20} />
          </button>
        </div>

        <div className="p-5">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-5">
            <p className="text-xs text-yellow-700">
              Please enter your {platform === "google" ? "Google" : "Facebook"} OAuth credential to enable this feature.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={`Enter ${platform === "google" ? "Google" : "Facebook"} Client ID`}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Secret Code</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter Secret Code"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Save & Enable
          </button>
        </div>
      </div>
    </div>
  );
}

function GeneralSettings() {
  const [companyName, setCompanyName] = useState("CargoAdmin Inc.");
  const [websiteTitle, setWebsiteTitle] = useState("CargoAdmin- Logistics Managment Platform");
  const [description, setDescription] = useState("Complete logistics and cargo managment solution for modern businesses");
  const [socialUrl, setSocialUrl] = useState("logistics, cargo, shipping, freight, customs");
  const [maintenance, setMaintenance] = useState(false);
  const [systemLogo, setSystemLogo] = useState(null);
  const [loadingLogo, setLoadingLogo] = useState(null);
  const systemLogoRef = useRef();
  const loadingLogoRef = useRef();

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setter(url);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-5">General Settings</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">System Logo</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              {systemLogo ? (
                <img src={systemLogo} alt="System Logo" className="w-full h-full object-cover" />
              ) : (
                <FiUpload className="text-gray-400" size={20} />
              )}
            </div>
            <input type="file" accept="image/*" ref={systemLogoRef} className="hidden" onChange={(e) => handleImageUpload(e, setSystemLogo)} />
            <button
              onClick={() => systemLogoRef.current.click()}
              className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Upload Logo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Loading Logo</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              {loadingLogo ? (
                <img src={loadingLogo} alt="Loading Logo" className="w-full h-full object-cover" />
              ) : (
                <FiUpload className="text-gray-400" size={20} />
              )}
            </div>
            <input type="file" accept="image/*" ref={loadingLogoRef} className="hidden" onChange={(e) => handleImageUpload(e, setLoadingLogo)} />
            <button
              onClick={() => loadingLogoRef.current.click()}
              className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Upload Logo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Website Title</label>
          <input
            type="text"
            value={websiteTitle}
            onChange={(e) => setWebsiteTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Social Url</label>
          <input
            type="text"
            value={socialUrl}
            onChange={(e) => setSocialUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-800">Maintenance Mode</p>
            <p className="text-xs text-gray-500 mt-0.5">Enable to show maintenance page to users</p>
          </div>
          <Toggle checked={maintenance} onChange={setMaintenance} />
        </div>
      </div>
    </div>
  );
}

function SocialLoginSettings() {
  const [fbEnabled, setFbEnabled] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);
  const [fbModal, setFbModal] = useState(false);
  const [googleModal, setGoogleModal] = useState(false);
  const [fbCredentials, setFbCredentials] = useState(null);
  const [googleCredentials, setGoogleCredentials] = useState(null);

  const handleFbToggle = (val) => {
    if (val) setFbModal(true);
    else setFbEnabled(false);
  };

  const handleGoogleToggle = (val) => {
    if (val) setGoogleModal(true);
    else setGoogleEnabled(false);
  };

  const handleFbSave = (creds) => {
    setFbCredentials(creds);
    setFbEnabled(true);
  };

  const handleGoogleSave = (creds) => {
    setGoogleCredentials(creds);
    setGoogleEnabled(true);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-5">Social Login Settings</h2>

      <div className="space-y-3">
        <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FaFacebook className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Login with Facebook</p>
              <p className="text-xs text-gray-500">Allow users to sign in with Facebook</p>
            </div>
          </div>
          <Toggle checked={fbEnabled} onChange={handleFbToggle} />
        </div>

        <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FaGoogle className="text-red-500" size={16} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Login with Google</p>
              <p className="text-xs text-gray-500">Allow users to sign in with Google</p>
            </div>
          </div>
          <Toggle checked={googleEnabled} onChange={handleGoogleToggle} />
        </div>
      </div>

      <Modal
        open={fbModal}
        onClose={() => setFbModal(false)}
        title="Configure Facebook Login"
        subtitle="Enable secure login using Facebook account"
        platform="facebook"
        onSave={handleFbSave}
      />

      <Modal
        open={googleModal}
        onClose={() => setGoogleModal(false)}
        title="Configure Google Login"
        subtitle="Enable secure login using Google account"
        platform="google"
        onSave={handleGoogleSave}
      />
    </div>
  );
}

function PlaceholderTab({ label }) {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">{label}</h2>
      <p className="text-sm text-gray-400">Settings for {label} will appear here.</p>
    </div>
  );
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "general": return <GeneralSettings />;
      case "social": return <SocialLoginSettings />;
      default: return <PlaceholderTab label={tabs.find(t => t.id === activeTab)?.label || ""} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="mb-5 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Configure system settings and preferences</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <div className="sm:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 w-full justify-between shadow-sm"
            >
              <span className="flex items-center gap-2">
                {tabs.find(t => t.id === activeTab)?.icon}
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
              <span className="text-gray-400">{sidebarOpen ? "▲" : "▼"}</span>
            </button>
            {sidebarOpen && (
              <div className="mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors border-b border-gray-50 last:border-0 ${activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    <span className={activeTab === tab.id ? "text-white" : "text-gray-400"}>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:block w-48 md:w-52 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-xs md:text-sm text-left transition-colors border-b border-gray-50 last:border-0 ${activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className={`flex-shrink-0 ${activeTab === tab.id ? "text-white" : "text-gray-400"}`}>{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm min-h-64 overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}