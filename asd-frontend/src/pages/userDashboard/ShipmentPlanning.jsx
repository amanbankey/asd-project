import { useState } from "react";
import {
  FiArrowLeft, FiSave, FiDownload, FiPlus, FiInfo,
  FiChevronRight, FiCheckCircle, FiAlertCircle, FiFileText,
  FiPhone, FiMail, FiMessageSquare, FiDatabase, FiEdit2,
  FiAlertTriangle, FiBookOpen, FiTruck, FiUpload, FiRadio,
  FiShare2, FiExternalLink, FiBell
} from "react-icons/fi";
import { BsAirplane } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";

const tabs = [
  { id: 1, label: "Shipment Details" },
  { id: 2, label: "Route & Schedule" },
  { id: 3, label: "Cost Estimation" },
  { id: 4, label: "Compliance & Documents" },
];

const goodsInfo = [
  ["Product Description", "T-shirts, singlets and other vests, of cotton"],
  ["HS Code", "6109.10.00", true],
  ["Quantity", "500 kg"],
  ["Unit", "Kilograms"],
  ["Value (INR)", "₹1,24,680"],
  ["Currency", "INR"],
  ["Incoterm", "FOB", true, "View Incoterms"],
  ["Commodity", "Cotton, 100%"],
  ["Packaging Type", "Cartons"],
  ["No. of Packages", "25"],
  ["Marks & Numbers", "ASD/TSHIRT/S00/2025"],
];

const additionalInfo = [
  ["Insurance", "Yes (1% of Value)"],
  ["Special Handling", "No"],
  ["Temperature Control", "No"],
  ["Dangerous Goods", "No"],
  ["Remarks", "Handle with care"],
];

const complianceDocs = [
  ["Commercial Invoice", "Required"],
  ["Packing List", "Required"],
  ["Certificate of Origin", "If Applicable"],
  ["Airway Bill", "Required"],
  ["Export License", "Not Required"],
  ["Other Certificates", "Not Required"],
];

const costRows = [
  ["Freight Charges", "₹18,600"],
  ["Surcharges & Fees", "₹6,260"],
  ["Insurance", "₹1,250"],
  ["Customs Duty & Taxes (Est.)", "₹ -"],
  ["Other Charges", "₹750"],
];

const dataSources = [
  ["Freight Rates", "Freightos Marketplace"],
  ["Transit Times", "DHL Tariff Database"],
  ["Customs Info", "ICEGATE"],
  ["Trade Data", "DGFT (India)"],
];

const assumptions = [
  "Rates are based on current day and are subject to change.",
  "Transit time excludes customs clearance.",
  "Charges include estimated surcharges.",
  "Insurance calculated at 1% of invoice value.",
  "Incoterm: FOB (Exporter responsible till loading port).",
];

const whatsNext = [
  { icon: FiTruck, title: "Book Shipment", sub: "Confirm carrier and book", btn: "Proceed to Booking" },
  { icon: FiUpload, title: "Upload Documents", sub: "Upload required documents", btn: "Upload Now" },
  { icon: FiRadio, title: "Track Shipment", sub: "Track status in real-time", btn: "Go to Tracking" },
  { icon: FiShare2, title: "Share Plan", sub: "Share plan with team or partner", btn: "Share Plan" },
];

export default function ShipmentPlanning() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="h-auto bg-gray-50 font-sans flex-1 overflow-y-auto ">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <span className="font-medium text-gray-500">Dashboard</span>
          <FiChevronRight size={11} />
          <span className="font-medium text-gray-500">Shipment Planning</span>
          <FiChevronRight size={11} />
          <span className="font-medium text-gray-800">New Plan</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shipment Planning</h1>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">Plan your shipment from origin to destination with all costs, timelines, and compliance in one place.</p>
          </div>
          {/* <div className="flex  gap-2">
            <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
              <FiArrowLeft size={13} /> Back to Dashboard
            </button>
            <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
              <FiSave size={13} /> Save Plan
            </button>
            <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
              <FiDownload size={13} /> Download Plan (PDF)
            </button>
            <button className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg">
              <FiPlus size={13} /> Create Shipment from this Plan
            </button>
          </div> */}

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
  <button className="flex items-center justify-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
    <FiArrowLeft size={13} /> Back to Dashboard
  </button>

  <button className="flex items-center justify-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
    <FiSave size={13} /> Save Plan
  </button>

  <button className="flex items-center justify-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
    <FiDownload size={13} /> Download Plan (PDF)
  </button>

  <button className="flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg">
    <FiPlus size={13} /> Create Shipment from this Plan
  </button>
</div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 py-4 flex flex-col gap-4">
        <div className="flex items-start gap-2 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-teal-800">
          <FiInfo size={15} className="text-teal-500 flex-shrink-0 mt-0.5" />
          This plan is based on the data sources and assumptions listed below. Please review before confirming your shipment.
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="hidden  w-10 h-10 bg-blue-50 rounded-xl sm:flex items-center justify-center flex-shrink-0">
              <FiFileText className="text-blue-500 text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Plan Summary</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">Plan Name</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">Tirupur to Dubai – T-shirts Export</p>
                </div>
                <div>
                  <p className="sm:text-sm text-gray-400 font-medium">Created On</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 mt-0.5">24 Apr 2025, 09:25 AM</p>
                </div>
                <div>
                  <p className="sm:text-sm text-gray-400 font-medium">Created By</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 mt-0.5">Arjun Soni</p>
                </div>
                <div>
                  <p className="sm:text-sm text-gray-400 font-medium">Plan ID</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 mt-0.5">PLN-2025-04-24-000123</p>
                </div>
                <div>
                  <p className="sm:text-sm text-gray-400 font-medium">Status</p>
                  <span className="inline-block mt-0.5 border border-orange-300 text-orange-600 sm:text-sm font-semibold px-2 py-0.5 rounded-full">Draft</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm  text-gray-400 font-medium">Total Estimated Cost</p>
                  <p className="text-base sm:text-lg font-medium text-gray-900 mt-0.5">₹24,860</p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="sm:text-sm text-gray-400 font-medium">Estimated Transit Time</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">3 – 5 Days</p>
                  </div>
                  <div>
                    <p className="sm:text-sm text-gray-400 font-medium">Mode</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <BsAirplane className="text-teal-500 text-sm" />
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">Air Freight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
          <div className="flex flex-col gap-4 min-w-0 border-2 border-black">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden ">
              <div className="flex overflow-x-auto border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors
                      ${activeTab === tab.id ? "border-teal-500 text-teal-600 bg-teal-50" : "border-transparent text-gray-500 hover:text-gray-700"}`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0
                      ${activeTab === tab.id ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                      {tab.id}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4">
                {activeTab === 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-4">
                      <div>
                        <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Goods Information</p>
                        {goodsInfo.map(([k, v, hasLink, linkLabel]) => (
                          <div key={k} className="flex justify-between py-1 border-b border-gray-100 last:border-0 gap-3">
                            <span className="text-xs sm:text-sm  font-medium text-gray-500 flex-shrink-0 w-36">{k}</span>
                            <div className="flex items-center gap-2 flex-1 justify-start ">
                              <span className="text-xs sm:text-sm  font-medium text-gray-800 text-right">{v}</span>
                              {hasLink && linkLabel && (
                                <button className="text-blue-500 text-xs sm:text-sm   font-medium hover:underline whitespace-nowrap">{linkLabel}</button>
                              )}
                              {hasLink && !linkLabel && (
                                <button className="text-blue-500 text-xs sm:text-sm  text-end  font-medium hover:underline">View Details</button>
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-end"> 
                        <button className="mt-3  px-7  border border-teal-600  text-teal-600 text-xs sm:text-sm   font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                          <FiEdit2 size={12} /> Edit Details
                        </button> </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div> 
                        <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Parties Information</p>
                        <div className="mb-2">
                          <p className="text-xs text-gray-400 font-medium mb-1">Exporter (Ship From)</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800">ABC Exports Pvt. Ltd.</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-500">Tirupur, India</p>
                        </div>
                        <div className="mb-2">
                          <p className="text-xs text-gray-400 font-medium mb-1">Importer (Ship To)</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800">XYZ Trading LLC</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-500">Dubai, UAE</p>
                        </div>
                        <div className="mb-2">
                          <p className="text-xs text-gray-400 font-medium mb-1">Notify Party</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800">XYZ Trading LLC</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-500">Dubai, UAE</p>
                        </div>
                        </div>
                        <div> 
                        <button className="w-full border border-teal-600 text-teal-600 text-xs sm:text-sm  font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                          <FiEdit2 size={12} /> Edit Details
                        </button> </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-3">Route & Schedule</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[["Origin", "Tirupur, India (IN)"], ["Destination", "Dubai, UAE (AE)"], ["Mode", "Air Freight"], ["Carrier", "IndiGo Cargo / Emirates SkyCargo"], ["Estimated Departure", "26 Apr 2025"], ["Estimated Arrival", "30 Apr 2025"], ["Transit Time", "3 – 5 Days"]].map(([k, v]) => (
                        <div key={k} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                          <span className="text-xs sm:text-sm font-medium text-gray-500">{k}</span>
                          <span className="text-xs sm:text-sm font-medium text-gray-800 text-right">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-3">Cost Estimation</p>
                    {costRows.map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-xs sm:text-sm font-medium text-gray-500">{k}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-800">{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-2 mt-1 border-t-2 border-gray-200">
                      <span className="text-sm  sm:text-sm font-bold text-gray-800">Total Estimated Cost</span>
                      <span className="text-sm sm:text-sm font-bold text-emerald-600">₹24,860</span>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-3">Compliance & Documents</p>
                    {complianceDocs.map(([doc, status]) => (
                      <div key={doc} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-2">
                          <FiCheckCircle size={13} className="text-emerald-500" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{doc}</span>
                        </div>
                        <span className={`text-xs font-medium ${status === "Required" ? "text-gray-700" : status === "If Applicable" ? "text-blue-500" : "text-gray-400"}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 ">
              <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Additional Information</p>
              <div className="flex "> 
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 mb-3">
                {additionalInfo.map(([k, v]) => (
                  <div key={k}>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium mb-0.5">{k}</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">{v}</p>
                  </div>
                ))}
              </div>
              <div> 
              <button className="border border-teal-600 text-teal-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-1.5">
                <FiEdit2   /> Edit Details
              </button> </div> </div>
            </div>

          


          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-2 border-black">
            <div className="bg-white border border-gray-200 rounded-xl p-4 h-auto ">
              <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Route & Schedule (Summary)</p>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                  <p className="text-xs sm:text-sm  text-gray-400 font-medium">Origin</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">Tirupur, India (IN)</p>
                </div>
                <BsAirplane className="text-teal-500 text-xl flex-shrink-0" />
                <div className="text-right">
                  <p className="text-xs sm:text-sm  text-gray-400 font-medium">Destination</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">Dubai, UAE (AE)</p>
                </div>
              </div>
              {[["Mode", "Air Freight"], ["Carrier (To be Confirmed)", "IndiGo Cargo / Emirates SkyCargo"], ["Estimated Departure", "26 Apr 2025"], ["Estimated Arrival", "30 Apr 2025"], ["Transit Time", "3 – 5 Days"]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1 border-b border-gray-100 last:border-0 gap-2">
                  <span className="text-xs sm:text-sm  text-gray-500 font-medium flex-shrink-0">{k}</span>
                  <span className="text-xs sm:text-sm  font-medium text-gray-800 text-right">{v}</span>
                </div>
              ))}
              <button className="mt-3 w-full border border-teal-500 text-teal-600 text-xs sm:text-sm  font-medium py-2 rounded-lg hover:bg-teal-50">
                View Full Route & Schedule
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm  sm:text-lg font-semibold text-gray-800 mb-3">Cost Summary (INR)</p>
              {costRows.map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">{k}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">{v}</span>
                </div>
              ))}
              <div className="flex justify-between py-2 mt-1 border-t-2 border-gray-200">
                <span className="text-xs font-bold text-gray-800">Total Estimated Cost</span>
                <span className="text-sm font-bold text-emerald-600">₹24,860</span>
              </div>
              <button className="mt-2 w-full border border-teal-600 text-teal-600 text-xs sm:text-sm  font-medium py-2 rounded-lg hover:bg-gray-50">
                View Cost Breakdown
              </button>
            </div>

            <div className="bg-white  border border-gray-200 rounded-xl p-4">
             
              <div className="flex flex-col justify-between   h-full ">  
                <div > 
                <p className="text-sm   sm:text-lg font-semibold text-gray-800 mb-3">Compliance & Documents (Summary)</p>
                 {complianceDocs.map(([doc, status]) => (
                <div key={doc} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{doc}</span>
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${status === "Required" ? "text-gray-600" : status === "If Applicable" ? "text-blue-500" : "text-gray-400"}`}>{status}</span>
                </div>
              ))} </div> 
              <div className=""> 
                  <button className="mt-3 w-full border border-teal-600 text-teal-600 text-xs  sm:text-sm font-medium py-2 rounded-lg hover:bg-gray-50">
                View All Documents
              </button></div> </div> 
            
            </div>

           <div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm  sm:text-lg font-semibold text-gray-800 mb-2">Plan Notes</p>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Urgent shipment for new collection launch.</p>
              <button className="mt-2 text-teal-500 text-xs sm:text-sm  font-medium hover:underline flex items-center gap-1">
                <FiEdit2 size={11} /> Edit Notes
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Risk & Alerts</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <FiCheckCircle size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600">Low Risk</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-500">Route and commodity risk level is low.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FiAlertCircle size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-orange-500">Customs Check</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-500">Random inspection possible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FiBookOpen size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-500">Documentation</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-500">Ensure HS code and invoice match.</p>
                  </div>
                </div>
              </div>
              <button className="mt-3 text-teal-500 text-xs sm:text-sm font-medium hover:underline flex items-center gap-1">
                View All Alerts <FiChevronRight className="text-xs sm:text-sm" />
              </button>
            </div>
            </div>
          </div>
        </div>

        
      </div>

        <div className="flex gap-1"> 
         <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-4">What's Next?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {whatsNext.map(({ icon: Icon, title, sub, btn }) => (
                  <div key={title} className="border border-gray-100 rounded-xl p-3 flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                      <Icon size={18} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">{title}</p>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">{sub}</p>
                    </div>
                    <button className="w-full border border-teal-500 text-teal-600 text-[11px] font-semibold py-1.5 rounded-lg hover:bg-teal-50 mt-auto">
                      {btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
                
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm sm:text-lg  font-semibold text-gray-800 mb-3">Data Sources Used</p>
                {dataSources.map(([k, v]) => (
                  <div key={k} className="flex items-center gap-1.5 py-1.5 border-b border-gray-100 last:border-0">
                    <FiDatabase size={11} className="text-gray-400 flex-shrink-0" />
                    <span className="text-sm sm:text-sm text-gray-500 font-medium w-24">{k}</span>
                    <span className="text-sm sm:text-sm text-gray-700 font-medium">{v}</span>
                  </div>
                ))}
                <button className="mt-2 text-teal-500 text-xs font-medium hover:underline flex items-center gap-1">
                  View All Sources <FiChevronRight size={11} />
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm sm:text-lg  font-semibold text-gray-800 mb-3">Assumptions</p>
                <ul className="flex flex-col gap-1">
                  {assumptions.map((a, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs sm:text-sm  text-gray-600 font-medium">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span> {a}
                    </li>
                  ))}
                </ul>
                <button className="mt-2 text-teal-500 text-sm sm:text-sm font-medium hover:underline flex items-center gap-1">
                  View All Assumptions <FiChevronRight size={11} />
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">Disclaimer</p>
                <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                  This plan is for reference only. Please verify all details with official sources before finalizing your shipment.
                </p>
                <button className="mt-2 text-blue-500 text-sm sm:text-sm font-medium hover:underline">Read Full Disclaimer</button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm sm:text-lg  font-semibold text-gray-800 mb-1">Need Help?</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-3">Our trade experts are here to help you.</p>
                <div className="flex items-center gap-1.5 text-sm sm:text-sm font-medium text-gray-600 mb-1.5">
                  <FiPhone size={11} className="text-teal-500" /> +91 22 1234 5678
                </div>
                <div className="flex items-center gap-1.5 text-sm sm:text-sm font-medium text-gray-600 mb-3">
                  <FiMail size={11} className="text-teal-500" /> support@asdcargomate.com
                </div>
                <button className="w-full border border-gray-200 text-gray-700 text-sm sm:text-sm font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                  <FiMessageSquare size={12} /> Chat with Expert
                </button>
              </div>
            </div>
            </div>

            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-8 py-3 rounded-xl">
                <FiSave size={15} /> Save to Saved Reports
              </button>
            </div>
    </div>
  );
}