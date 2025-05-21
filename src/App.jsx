import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { useDispatch } from 'react-redux';
import { logout } from './store/slices/authSlice';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import BDEDashboard from './pages/BDEDashboard';
import LabAdminDashboard from './pages/LabAdminDashboard';
import UserManagement from './components/UserManagement';
import ProtectedRoute from './routes/ProtectedRoute';
import BillingB2CNew from './pages/FrontDesk/BillingB2CNew';
import BillingB2CManageBill from './pages/FrontDesk/BillingB2CManageBill';
import BillingB2CManageSample from './pages/FrontDesk/BillingB2CManageSample';
import PatientReferralDoctor from './pages/FrontDesk/PatientReferralDoctor';
import PatientDoctorIP from './pages/FrontDesk/PatientDoctorIP';
import PatientAccountChecklist from './pages/FrontDesk/PatientAccountChecklist';
import AgentManageAgent from './pages/FrontDesk/AgentManageAgent';
import AgentCommission from './pages/FrontDesk/AgentCommission';
import AgentAccountChecklist from './pages/FrontDesk/AgentAccountChecklist';
import AppointmentTestBooking from './pages/FrontDesk/AppointmentTestBooking';
import AppointmentDoctorAppointment from './pages/FrontDesk/AppointmentDoctorAppointment';
import OPDPatientBooking from './pages/FrontDesk/OPDPatientBooking';
import OPDManageBilling from './pages/FrontDesk/OPDManageBilling';
import OPDManageQueue from './pages/FrontDesk/OPDManageQueue';
import OPDNewServiceBilling from './pages/FrontDesk/OPDNewServiceBilling';
import OPDManageDoctor from './pages/FrontDesk/OPDManageDoctor';
import OPDDoctorFees from './pages/FrontDesk/OPDDoctorFees';
import CCSectionNewCCBill from './pages/FrontDesk/CCSectionNewCCBill';
import CCSectionManageCCBill from './pages/FrontDesk/CCSectionManageCCBill';
import CCSectionAccountChecklist from './pages/FrontDesk/CCSectionAccountChecklist';
import CCSectionManageCCPayment from './pages/FrontDesk/CCSectionManageCCPayment';
import ReceptionCashReceived from './pages/FrontDesk/ReceptionCashReceived';
import ReceptionCashPayment from './pages/FrontDesk/ReceptionCashPayment';
import ClinicalMasterManageGroup from './pages/LabDesk/ClinicalMasterManageGroup';
import ClinicalMasterManageTests from './pages/LabDesk/ClinicalMasterManageTests';
import LabTestReportTestUnits from './pages/LabDesk/LabTestReportTestUnits';
import LabTestReportTestMethods from './pages/LabDesk/LabTestReportTestMethods';
import LabTestReportManageSample from './pages/LabDesk/LabTestReportManageSample';
import LabTestReportTestFormat from './pages/LabDesk/LabTestReportTestFormat';
import LabTestReportTestResultEntry from './pages/LabDesk/LabTestReportTestResultEntry';
import LabTestReportJobSheet from './pages/LabDesk/LabTestReportJobSheet';
import LabTestReportTestPerformance from './pages/LabDesk/LabTestReportTestPerformance';
import LabTestReportLab from './pages/LabDesk/LabTestReportLab';
import PatientDeskPatient from './pages/LabDesk/PatientDeskPatient';
import PurchaseVendorMaster from './pages/LabDesk/PurchaseVendorMaster';
import PurchaseOrders from './pages/LabDesk/PurchaseOrders';
import HRStaffMaster from './pages/Finance/HRStaffMaster';
import HRLeaves from './pages/Finance/HRLeaves';
import FinanceBankings from './pages/Finance/FinanceBankings';
import FinanceExpenses from './pages/Finance/FinanceExpenses';
import FinanceVendorPayment from './pages/Finance/FinanceVendorPayment';
import FinanceStaffPayment from './pages/Finance/FinanceStaffPayment';
import FinanceFinance from './pages/Finance/FinanceFinance';
import ReportsSummaryReports from './pages/DataAnalysis/ReportsSummaryReports';
import ReportsBusinessReports from './pages/DataAnalysis/ReportsBusinessReports';
import ReportsAgingCCBilling from './pages/DataAnalysis/ReportsAgingCCBilling';
import ReportsAgingOPDBilling from './pages/DataAnalysis/ReportsAgingOPDBilling';
import ReportsCompleteBilling from './pages/DataAnalysis/ReportsCompleteBilling';
import ReportsOPDBilling from './pages/DataAnalysis/ReportsOPDBilling';
import ReportsPatient from './pages/DataAnalysis/ReportsPatient';
import ReportsDrReferral from './pages/DataAnalysis/ReportsDrReferral';
import ReportsAgentCommission from './pages/DataAnalysis/ReportsAgentCommission';
import ReportsTest from './pages/DataAnalysis/ReportsTest';
import ReportsCollector from './pages/DataAnalysis/ReportsCollector';
import ReportsAccounts from './pages/DataAnalysis/ReportsAccounts';
import ReportsPCPNDT from './pages/DataAnalysis/ReportsPCPNDT';
import ReportsConsumedReagent from './pages/DataAnalysis/ReportsConsumedReagent';
import GraphPatientBilling from './pages/DataAnalysis/GraphPatientBilling';
import GraphCreditBilling from './pages/DataAnalysis/GraphCreditBilling';
import GraphOPDBilling from './pages/DataAnalysis/GraphOPDBilling';
import GraphAccount from './pages/DataAnalysis/GraphAccount';
import GraphBusinessVolume from './pages/DataAnalysis/GraphBusinessVolume';
import MasterSettingsConfiguration from './pages/AdminDesk/MasterSettingsConfiguration';
import MasterSettingsManageSignatures from './pages/AdminDesk/MasterSettingsManageSignatures';
import MasterSettingsUserAccount from './pages/AdminDesk/MasterSettingsUserAccount';
import MasterSettingsActivityLog from './pages/AdminDesk/MasterSettingsActivityLog';
import MasterSettingsServiceCharge from './pages/AdminDesk/MasterSettingsServiceCharge';
import MasterSettingsOfferPackages from './pages/AdminDesk/MasterSettingsOfferPackages';
import MasterSettingsOccasionalOffer from './pages/AdminDesk/MasterSettingsOccasionalOffer';
import MasterSettingsPaymentMode from './pages/AdminDesk/MasterSettingsPaymentMode';
import MasterSettingsOPDDepartment from './pages/AdminDesk/MasterSettingsOPDDepartment';
import MasterSettingsOPDServiceMaster from './pages/AdminDesk/MasterSettingsOPDServiceMaster';
import MasterSettingsCollectorMaster from './pages/AdminDesk/MasterSettingsCollectorMaster';
import MasterSettingsBDOMaster from './pages/AdminDesk/MasterSettingsBDOMaster';
import MasterSettingsOutsourcingMaster from './pages/AdminDesk/MasterSettingsOutsourcingMaster';
import MasterSettingsCommissionList from './pages/AdminDesk/MasterSettingsCommissionList';
import MasterSettingsDiscountPriceList from './pages/AdminDesk/MasterSettingsDiscountPriceList';
import FeedbackPatientBilling from './pages/Marketing/FeedbackPatientBilling';
import FeedbackReferralDoctor from './pages/Marketing/FeedbackReferralDoctor';
import FeedbackAgent from './pages/Marketing/FeedbackAgent';
import FeedbackCCCustomer from './pages/Marketing/FeedbackCCCustomer';
import Subscription from './pages/Subscription/Subscription';

function Logout() {
  const dispatch = useDispatch();
  dispatch(logout());
  localStorage.removeItem('token');
  return <Navigate to="/login" />;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 lg:ml-72 p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/bde"
                element={<ProtectedRoute role="bde"><BDEDashboard /></ProtectedRoute>}
              />
              <Route
                path="/lab-admin"
                element={<ProtectedRoute role="lab_admin"><LabAdminDashboard /></ProtectedRoute>}
              />
              <Route
                path="/user-management"
                element={<ProtectedRoute permission="user_management"><UserManagement /></ProtectedRoute>}
              />
              <Route path="/logout" element={<Logout />} />

              {/* Front Desk Routes */}
              <Route
                path="/front-desk/billing-b2c/new"
                element={<ProtectedRoute permission="front_desk:billing_b2c:*"><BillingB2CNew /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/billing-b2c/manage-bill"
                element={<ProtectedRoute permission="front_desk:billing_b2c:*"><BillingB2CManageBill /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/billing-b2c/manage-sample"
                element={<ProtectedRoute permission="front_desk:billing_b2c:*"><BillingB2CManageSample /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/patient/referral-doctor"
                element={<ProtectedRoute permission="front_desk:patient:*"><PatientReferralDoctor /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/patient/doctor-ip"
                element={<ProtectedRoute permission="front_desk:patient:*"><PatientDoctorIP /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/patient/account-checklist"
                element={<ProtectedRoute permission="front_desk:patient:*"><PatientAccountChecklist /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/agent/manage-agent"
                element={<ProtectedRoute permission="front_desk:agent:*"><AgentManageAgent /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/agent/agent-commission"
                element={<ProtectedRoute permission="front_desk:agent:*"><AgentCommission /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/agent/account-checklist"
                element={<ProtectedRoute permission="front_desk:agent:*"><AgentAccountChecklist /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/appointment/test-booking"
                element={<ProtectedRoute permission="front_desk:appointment:*"><AppointmentTestBooking /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/appointment/doctor-appointment"
                element={<ProtectedRoute permission="front_desk:appointment:*"><AppointmentDoctorAppointment /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/patient-booking"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDPatientBooking /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/manage-billing"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDManageBilling /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/manage-queue"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDManageQueue /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/new-service-billing"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDNewServiceBilling /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/manage-doctor"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDManageDoctor /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/opd/doctor-fees"
                element={<ProtectedRoute permission="front_desk:opd:*"><OPDDoctorFees /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/cc-section/new-cc-bill"
                element={<ProtectedRoute permission="front_desk:cc_section:*"><CCSectionNewCCBill /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/cc-section/manage-cc-bill"
                element={<ProtectedRoute permission="front_desk:cc_section:*"><CCSectionManageCCBill /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/cc-section/cc-account-checklist"
                element={<ProtectedRoute permission="front_desk:cc_section:*"><CCSectionAccountChecklist /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/cc-section/manage-cc-payment"
                element={<ProtectedRoute permission="front_desk:cc_section:*"><CCSectionManageCCPayment /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/reception-cash/received"
                element={<ProtectedRoute permission="front_desk:reception_cash:*"><ReceptionCashReceived /></ProtectedRoute>}
              />
              <Route
                path="/front-desk/reception-cash/payment"
                element={<ProtectedRoute permission="front_desk:reception_cash:*"><ReceptionCashPayment /></ProtectedRoute>}
              />

              {/* Lab Desk Routes */}
              <Route
                path="/lab-desk/clinical-master/manage-group"
                element={<ProtectedRoute permission="lab_desk:clinical_master:*"><ClinicalMasterManageGroup /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/clinical-master/manage-tests"
                element={<ProtectedRoute permission="lab_desk:clinical_master:*"><ClinicalMasterManageTests /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/test-units"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportTestUnits /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/test-methods"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportTestMethods /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/manage-sample"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportManageSample /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/test-format"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportTestFormat /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/test-result-entry"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportTestResultEntry /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/job-sheet"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportJobSheet /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/test-performance"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportTestPerformance /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/lab-test-report/lab"
                element={<ProtectedRoute permission="lab_desk:lab_test_report:*"><LabTestReportLab /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/patient-desk/patient"
                element={<ProtectedRoute permission="lab_desk:patient_desk:*"><PatientDeskPatient /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/purchase/vendor-master"
                element={<ProtectedRoute permission="lab_desk:purchase:*"><PurchaseVendorMaster /></ProtectedRoute>}
              />
              <Route
                path="/lab-desk/purchase/orders"
                element={<ProtectedRoute permission="lab_desk:purchase:*"><PurchaseOrders /></ProtectedRoute>}
              />

              {/* Finance Routes */}
              <Route
                path="/finance/hr/staff-master"
                element={<ProtectedRoute permission="finance:hr:*"><HRStaffMaster /></ProtectedRoute>}
              />
              <Route
                path="/finance/hr/leaves"
                element={<ProtectedRoute permission="finance:hr:*"><HRLeaves /></ProtectedRoute>}
              />
              <Route
                path="/finance/finance/bankings"
                element={<ProtectedRoute permission="finance:finance:*"><FinanceBankings /></ProtectedRoute>}
              />
              <Route
                path="/finance/finance/expenses"
                element={<ProtectedRoute permission="finance:finance:*"><FinanceExpenses /></ProtectedRoute>}
              />
              <Route
                path="/finance/finance/vendor-payment"
                element={<ProtectedRoute permission="finance:finance:*"><FinanceVendorPayment /></ProtectedRoute>}
              />
              <Route
                path="/finance/finance/staff-payment"
                element={<ProtectedRoute permission="finance:finance:*"><FinanceStaffPayment /></ProtectedRoute>}
              />
              <Route
                path="/finance/finance/finance"
                element={<ProtectedRoute permission="finance:finance:*"><FinanceFinance /></ProtectedRoute>}
              />

              {/* Data Analysis Routes */}
              <Route
                path="/data-analysis/reports/summary-reports"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsSummaryReports /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/business-reports"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsBusinessReports /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/aging-cc-billing"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsAgingCCBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/aging-opd-billing"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsAgingOPDBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/complete-billing"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsCompleteBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/opd-billing"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsOPDBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/patient"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsPatient /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/dr-referral"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsDrReferral /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/agent-commission"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsAgentCommission /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/test"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsTest /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/collector"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsCollector /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/accounts"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsAccounts /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/pc-pndt"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsPCPNDT /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/reports/consumed-reagent"
                element={<ProtectedRoute permission="data_analysis:reports:*"><ReportsConsumedReagent /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/graph/patient-billing"
                element={<ProtectedRoute permission="data_analysis:graph:*"><GraphPatientBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/graph/credit-billing"
                element={<ProtectedRoute permission="data_analysis:graph:*"><GraphCreditBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/graph/opd-billing"
                element={<ProtectedRoute permission="data_analysis:graph:*"><GraphOPDBilling /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/graph/account"
                element={<ProtectedRoute permission="data_analysis:graph:*"><GraphAccount /></ProtectedRoute>}
              />
              <Route
                path="/data-analysis/graph/business-volume"
                element={<ProtectedRoute permission="data_analysis:graph:*"><GraphBusinessVolume /></ProtectedRoute>}
              />

              {/* Admin Desk Routes */}
              <Route
                path="/admin-desk/master-settings/configuration"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsConfiguration /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/manage-signatures"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsManageSignatures /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/user-account"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsUserAccount /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/activity-log"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsActivityLog /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/service-charge"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsServiceCharge /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/offer-packages"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsOfferPackages /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/occasional-offer"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsOccasionalOffer /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/payment-mode"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsPaymentMode /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/opd-department"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsOPDDepartment /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/opd-service-master"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsOPDServiceMaster /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/collector-master"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsCollectorMaster /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/bdo-master"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsBDOMaster /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/outsourcing-master"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsOutsourcingMaster /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/commission-list"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsCommissionList /></ProtectedRoute>}
              />
              <Route
                path="/admin-desk/master-settings/discount-price-list"
                element={<ProtectedRoute permission="admin_desk:master_settings:*"><MasterSettingsDiscountPriceList /></ProtectedRoute>}
              />

              {/* Marketing Routes */}
              <Route
                path="/marketing/feedback/patient-billing"
                element={<ProtectedRoute permission="marketing:feedback:*"><FeedbackPatientBilling /></ProtectedRoute>}
              />
              <Route
                path="/marketing/feedback/referral-doctor"
                element={<ProtectedRoute permission="marketing:feedback:*"><FeedbackReferralDoctor /></ProtectedRoute>}
              />
              <Route
                path="/marketing/feedback/agent"
                element={<ProtectedRoute permission="marketing:feedback:*"><FeedbackAgent /></ProtectedRoute>}
              />
              <Route
                path="/marketing/feedback/cc-customer"
                element={<ProtectedRoute permission="marketing:feedback:*"><FeedbackCCCustomer /></ProtectedRoute>}
              />

              {/* Subscription Route */}
              <Route
                path="/subscription"
                element={<ProtectedRoute permission="subscription:*"><Subscription /></ProtectedRoute>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;