import { Switch } from 'antd'
import { AccountingIcon, ChatsIcon, DashBoardIcon, FacilitiesIcon, ProvidersIcon, ReportsIcon, ScheduleIcon, SettingsIcon, ShiftsIcon } from 'assets/svgs'
import { ApprovalsIcon, DarkmodeIcon, InstantSupportIcon, LogoutIcon, MyCompanyIcon, ReportIcon, SolutionsIcon, SubMenuIcon, UsersIcon } from 'assets/svgs/siderMenuIcons/SiderMenuIcons'

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

export const siderMenu = [
  {
    id: 1,
    subMenu: [
      {
        id: 1,
        name: 'DashBoard',
        icon: <DashBoardIcon />,
        selectedIcon: <DashBoardIcon isActive={true} />,
        path: '/',
      },
      {
        id: 2,
        name: 'Surveys',
        icon: <ScheduleIcon />,
        selectedIcon: <ScheduleIcon isActive={true} />,
        path: '/surveys',
      },
      {
        id: 3,
        name: 'Peap',
        icon: <DashBoardIcon />,
        selectedIcon: <DashBoardIcon isActive={true} />,
        path: '/peap',
      },
      {
        id: 4,
        name: 'Instant Support',
        icon: <InstantSupportIcon />,
        selectedIcon: <InstantSupportIcon isActive={true} />,
        path: '/instant-support',
      },
      {
        id: 5,
        name: 'Sub Admin',
        icon: <SubMenuIcon />,
        selectedIcon: <SubMenuIcon isActive={true} />,
        path: '/subs-admin',
      },
      {
        id: 6,
        name: 'Approvals',
        icon: <ApprovalsIcon />,
        selectedIcon: <ApprovalsIcon isActive={true} />,
        path: '/approvals',
      },
      {
        id: 7,
        name: 'Solutions',
        icon: <SolutionsIcon />,
        selectedIcon: <SolutionsIcon isActive={true} />,
        path: '/solutions',
      },
      {
        id: 8,
        name: 'My Company',
        icon: <MyCompanyIcon />,
        selectedIcon: <MyCompanyIcon isActive={true} />,
        path: '/my-company',
      },
      {
        id: 9,
        name: 'Users',
        icon: <UsersIcon />,
        selectedIcon: <UsersIcon isActive={true} />,
        path: '/users',
      },
      {
        id: 9,
        name: 'Report',
        icon: <ReportIcon />,
        selectedIcon: <ReportIcon isActive={true} />,
        path: '/report',
      },
    ],
  },
  {
    id: 2,
    subMenu: [
      {
        id: 10,
        name: 'Darkmode',
        icon: <DarkmodeIcon />,
        selectedIcon: <DarkmodeIcon isActive={true} />,
        path: '/',
        switch: <Switch defaultChecked onChange={onChange} />
      },
      {
        id: 11,
        name: 'Logout',
        icon: <LogoutIcon />,
        selectedIcon: <LogoutIcon isActive={true} />,
        path: '/surveys',
      },
    ],
  },
]
