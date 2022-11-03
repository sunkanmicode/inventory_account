
import BankingConfig from '../ezone/banking/BankingConfig';
import ChartOfAcctConfig from '../ezone/chartAccount/ChartOfAcctConfig';
import DashboardConfig from '../ezone/dashboard/DashboardConfig';
import JournalsConfig from '../ezone/journals/JournalsConfig';
import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import HomeConfig from './home/HomeConfig';
import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TodoAppConfig from './todo/TodoAppConfig';

const appsConfigs = [
  // start of ezone
  DashboardConfig,
  BankingConfig,
  ChartOfAcctConfig,
  JournalsConfig,

  // end of ezone
  HomeConfig,
  AnalyticsDashboardAppConfig,
  ProjectDashboardAppConfig,
  MailAppConfig,
  TodoAppConfig,
  FileManagerAppConfig,
  ContactsAppConfig,
  CalendarAppConfig,
  ChatAppConfig,
  ECommerceAppConfig,
  ScrumboardAppConfig,
  AcademyAppConfig,
  NotesAppConfig,
];

export default appsConfigs;
