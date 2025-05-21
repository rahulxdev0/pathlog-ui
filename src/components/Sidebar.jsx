import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHasPermission } from "../store/slices/authSlice";
import { ChevronDown, ChevronUp, Menu, X, LogOut } from "lucide-react";

const Sidebar = () => {
  const hasPermission = useSelector(selectHasPermission);

  const user = useSelector((state) => state.auth.user);
  console.log("User:", user);
  const isAuthenticated = user?.isAuthenticated;

  if (!isAuthenticated) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SectionHeader = ({ title, section }) => {
    const isExpanded = expandedSections[section];

    return (
      <div
        className="flex justify-between items-center py-2 px-3 bg-[#388697] text-white bg-opacity-10 rounded-md cursor-pointer hover:bg-opacity-20 transition-colors"
        onClick={() => toggleSection(section)}
      >
        <h2 className="text-white font-semibold text-lg">{title}</h2>
        {isExpanded ? (
          <ChevronUp size={18} className="text-white" />
        ) : (
          <ChevronDown size={18} className="text-white" />
        )}
      </div>
    );
  };

  const CategoryHeader = ({ title }) => (
    <strong className="text-[#388697] flex items-center py-1 px-3 text-sm font-medium">
      {title}
    </strong>
  );

  const SectionContent = ({ section, children }) => {
    const isExpanded = expandedSections[section];

    return (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    );
  };

  const MenuItem = ({ to, children }) => (
    <li className="pl-8 py-1 text-sm">
      <Link
        to={to}
        className="block text-gray-700 hover:text-[#388697] transition-colors"
      >
        {children}
      </Link>
    </li>
  );

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-[#388697] p-2 rounded-md shadow-md text-white hover:bg-opacity-90"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-16 left-0 z-40 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-screen overflow-y-auto custom-scrollbar">
          <div className="p-4">
            {hasPermission("front_desk:*") && (
              <div className="mb-4">
                <SectionHeader title="Front Desk" section="frontDesk" />
                <SectionContent section="frontDesk">
                  <ul className="space-y-1">
                    {hasPermission("front_desk:billing_b2c:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Billing (B2C)" />
                        <ul>
                          <MenuItem to="/front-desk/billing-b2c/new">
                            New
                          </MenuItem>
                          <MenuItem to="/front-desk/billing-b2c/manage-bill">
                            Manage Bill
                          </MenuItem>
                          <MenuItem to="/front-desk/billing-b2c/manage-sample">
                            Manage Sample
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:patient:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Patient" />
                        <ul>
                          <MenuItem to="/front-desk/patient/referral-doctor">
                            Referral Doctor
                          </MenuItem>
                          <MenuItem to="/front-desk/patient/doctor-ip">
                            Doctor IP
                          </MenuItem>
                          <MenuItem to="/front-desk/patient/account-checklist">
                            Account Checklist
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:agent:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Agent" />
                        <ul>
                          <MenuItem to="/front-desk/agent/manage-agent">
                            Manage Agent
                          </MenuItem>
                          <MenuItem to="/front-desk/agent/agent-commission">
                            Agent Commission
                          </MenuItem>
                          <MenuItem to="/front-desk/agent/account-checklist">
                            Account Checklist
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:appointment:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Appointment" />
                        <ul>
                          <MenuItem to="/front-desk/appointment/test-booking">
                            Test Booking
                          </MenuItem>
                          <MenuItem to="/front-desk/appointment/doctor-appointment">
                            Doctor Appointment
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:opd:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="OPD" />
                        <ul>
                          <MenuItem to="/front-desk/opd/patient-booking">
                            Patient Booking
                          </MenuItem>
                          <MenuItem to="/front-desk/opd/manage-billing">
                            Manage Billing
                          </MenuItem>
                          <MenuItem to="/front-desk/opd/manage-queue">
                            Manage Queue
                          </MenuItem>
                          <MenuItem to="/front-desk/opd/new-service-billing">
                            New Service Billing
                          </MenuItem>
                          <MenuItem to="/front-desk/opd/manage-doctor">
                            Manage Doctor
                          </MenuItem>
                          <MenuItem to="/front-desk/opd/doctor-fees">
                            Doctor Fees
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:cc_section:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="CC Section (B2B)" />
                        <ul>
                          <MenuItem to="/front-desk/cc-section/new-cc-bill">
                            New CC Bill
                          </MenuItem>
                          <MenuItem to="/front-desk/cc-section/manage-cc-bill">
                            Manage CC Bill
                          </MenuItem>
                          <MenuItem to="/front-desk/cc-section/cc-account-checklist">
                            CC Account Checklist
                          </MenuItem>
                          <MenuItem to="/front-desk/cc-section/manage-cc-payment">
                            Manage CC Payment
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("front_desk:reception_cash:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Reception Cash" />
                        <ul>
                          <MenuItem to="/front-desk/reception-cash/received">
                            Received
                          </MenuItem>
                          <MenuItem to="/front-desk/reception-cash/payment">
                            Payment
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                  </ul>
                </SectionContent>
              </div>
            )}
            {hasPermission("lab_desk:*") && (
              <div className="mb-4">
                <SectionHeader title="Lab Desk" section="labDesk" />
                <SectionContent section="labDesk">
                  <ul className="space-y-1">
                    {hasPermission("lab_desk:clinical_master:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Clinical Master" />
                        <ul>
                          <MenuItem to="/lab-desk/clinical-master/manage-group">
                            Manage Group
                          </MenuItem>
                          <MenuItem to="/lab-desk/clinical-master/manage-tests">
                            Manage Tests
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("lab_desk:lab_test_report:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Lab Test Report" />
                        <ul>
                          <MenuItem to="/lab-desk/lab-test-report/test-units">
                            Test Units
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/test-methods">
                            Test Methods
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/manage-sample">
                            Manage Sample
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/test-format">
                            Test Format
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/test-result-entry">
                            Test Result Entry
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/job-sheet">
                            Job Sheet
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/test-performance">
                            Test Performance
                          </MenuItem>
                          <MenuItem to="/lab-desk/lab-test-report/lab">
                            Lab
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("lab_desk:patient_desk:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Patient Desk" />
                        <ul>
                          <MenuItem to="/lab-desk/patient-desk/patient">
                            Patient
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                    {hasPermission("lab_desk:purchase:*") && (
                      <li className="mb-2">
                        <CategoryHeader title="Purchase" />
                        <ul>
                          <MenuItem to="/lab-desk/purchase/vendor-master">
                            Vendor Master
                          </MenuItem>
                          <MenuItem to="/lab-desk/purchase/orders">
                            Orders
                          </MenuItem>
                        </ul>
                      </li>
                    )}
                  </ul>
                </SectionContent>
              </div>
            )}
            {hasPermission("user_management") && (
              <div className="mb-4">
                <SectionHeader
                  title="User Management"
                  section="userManagement"
                />
                <SectionContent section="userManagement">
                  <ul>
                    <MenuItem to="/user-management">Manage Users</MenuItem>
                  </ul>
                </SectionContent>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-16 left-0 right-0 border-t border-gray-100 bg-white">
          <Link
            to="/logout"
            className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-[#388697] hover:text-white transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
