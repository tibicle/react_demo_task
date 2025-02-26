import { type ReactNode } from 'react'

export interface ILayoutProps {
  children: React.ReactNode
}

export interface ISize {
  width: number
  height: number
}

export interface IIcons {
  isActive?: boolean
  color?: string
  className?: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IResetPassword {
  password: string
  confirmPassword: string
}

export interface ISideBar {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export interface INotificationDrawer {
  isNotificationDrawerOpen: boolean
  setIsNotificationDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICustomModal {
  title?: string
  open: boolean
  onOk?: () => void
  onCancel?: () => void
  okText?: string
  cancelText?: string
  content: ReactNode
  showCancelBtn?: string
  footer?: ReactNode | null
  classStrings?: string
  width?: number
  centered?: boolean
  closable?: boolean
}

export interface IHeadingText {
  text: string
  classString: string
  onClick?: () => void
}

export interface IInputField {
  name: string
  disabled?: boolean
  type?: string
  rules?: any
  placeholder?: string
  inputClass?: string
  labelClass?: string
  textClass?: string
  wrapperClass?: string
  error?: string | boolean
}

export interface IPasswordField {
  placeholder: string
  value?: string
  rules?: any
  name: string
  inputClass?: string
  error?: string | boolean
  wrapperClass?: string
}

export interface ICustomBtn {
  isIcon?: boolean
  text?: string
  svgIcon?: any
  onClick?: () => void
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed'
  className?: string
  htmlType?: 'button' | 'submit' | 'reset' | undefined
}

export interface IPasswordForm {
  email: string
  onChange?: (value: string, labelName: string) => void
  onOk?: () => void
}

export interface IAdminContactColumn {
  id?: string
  first_name?: string
  last_name?: string
  username: string
  role: {
    id: string
    name: string
  }
  updated_at: string
  status: string
  lastModified: string
  image: string | any
  email: string
  [key: string]: unknown
}

export interface IModalProps {
  isModalOpen?: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  editId?: string
  setFormData?: IAddNewSpecialities[]
  contactDetails?: IProfileData
  setContactDetails?: any
  data?: ICreateCertificate | undefined
  settings?: any
}

export interface ICertificationData {
  name: string
  abbreviation: string
  status: string | boolean
}

export interface IRoleTable {
  id: string
  name: string
  [key: string]: unknown
  search?: string
  // description: string
  // userCount: string
}

export interface ILoginForm {
  email: string
  password: string
  device_id: string
  device_name: string
  device_type: string
}

export interface ICertificationColumn {
  id: string
  number: string
  name: string
  abbreviation: string
  status: string
  [key: string]: unknown
}

export interface IAllFieldsType {
  name: string[]
  errors: Array<{
    message: string
  }>
}

export interface IFieldData {
  name: string[]
  errors?: string[] | undefined
}

export interface IChangePassword {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export interface IPofileData {
  first_name: string
  last_name: string
  role: string
  email: string
  username: string
  mobile_no: string
}

export interface IProfileFormDataType {
  image: string
  full_name: string
  first_name: string
  last_name: string
  role: string
  email: string
  user_name: string
  mobile_no: string
}

export interface ImageUploadProps {
  imageUrl?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  imgWidth?: number
  imgHeight?: number
  icon: React.ReactNode
  edit?: boolean
  applyOverlay?: boolean
}

export interface IRoleSection {
  id: string
  created_at: string
  name: string
  status: string
}

export interface IRoleInfo {
  next: () => void
  editData?: IAddRole
}

export interface IRolePermission {
  next: () => void
  prev: () => void
  item: IRoleSection
  isLast: boolean
  editId?: string
}

export interface IRoleInfoData {
  role: string
  description: string
}

export interface IRoleSubSectionPermission {
  id: string
  name: string
}

export interface IRoleSubSection {
  id: string
  permission: IRoleSubSectionPermission[]
  sub_section: string
}

export interface IPermission {
  id: string
  has_access: boolean
}

export interface ISubSectionRolePermission {
  id: string
  created_at: string
  name?: string | undefined
  status: string
  permissions: IRoleSubSection[]
}

export interface IAddRole {
  name: string
  description: string
  sections: ISubSections[]
}

export interface ISubSections {
  section_id: string
  sub_sections: Array<{
    sub_section_id: string
    permissions: Array<{
      permission_id: string
      has_access: boolean
    }>
  }>
}

export interface ICreateCertificate {
  id?: string
  name: string
  abbreviation: string
  status: string
  [key: string]: unknown
}

export interface ISpecialtiesTable {
  id: string
  created_at?: string
  name: string
  abbreviation: string
  certificates: ICertificateSpecialties[]
  status: string
  [key: string]: unknown
}

export interface IAddProfile {
  first_name: string
  last_name: string
  user_name: string
  email: string
  country_code: string | any
  mobile_no: string
  role: string
  status: string
}
export interface ICertificateSpecialties {
  id: string
  name: string
}

export interface IAddNewSpecialities {
  id?: string
  name: string
  abbreviation: string
  status: string
}

export interface IAddNewSpecialtiesProps {
  isModalOpen?: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  editId?: string
  editForm?: IAddNewSpecialities[] | any
}

export interface IAddCertificate {
  name: string
  abbreviation: string
  status: string
}

export interface ICertificationRecord {
  name: string
}

export interface IProfileData {
  id?: string
  first_name: string
  last_name: string
  user_name: string
  mobile_no: string
  email: string
  image?: string
  role: {
    id: string
    name: string
  }
  status: string
}

export interface IAddMember {
  first_name: string
  user_name: string
  country_code: string
  mobile_no: string
  last_name: string
  email: string
  role: {
    id: string
    name: string
  }
  status: string
}

export interface IProfileModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  viewActivityModal: React.Dispatch<React.SetStateAction<boolean>>
  hideActivityBtn: boolean
  contactDetails?: IProfileData
  setEditOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IDataRow {
  id: string | number
}

export interface IChangePwd {
  email: string
  oldPassword: string
  newPassword: string
}

export interface IChangePwdData {
  email: string
  old_password: string
  new_password: string
}

export interface ISettingsData {
  id: string
  name: string
}

export interface IOptionData {
  id: string
  name: string
  section: ISectionData[]
}

export interface ISectionData {
  id: string
  name: string
  status: string
  sub_section: ISubSectionData[]
}

export interface ISubSectionData {
  id: string
  status: string
  is_required: boolean
  name: string
}
export interface IGeneralSettingCreate {
  name: string
  status: string
  section?: string
}

export interface IGeneralPayload {
  id: string
  status?: string
  placeholder?: string
}

export interface IGeneralSetting {
  id: number
  name: string
  sub_section: IGeneralSettingSubsection[]
}

export interface IGeneralSettingSubsection {
  id: string
  placeholder: string
  status: string
  has_remark: boolean
  type: null | string
  name: string
}

export interface ICompetencyTest {
  certificate_id: string
  certificate_name: string
  certificate_abbreviation: string
  id: string
  name: string
  required_score: string
  duration: string
  status: string
  updated_at: string
  total_question: string
  [key: string]: unknown
}

export interface IChecklistData {
  certificate_id: string
  certificate_name: string
  certificate_abbreviation: string
  id: string
  name: string
  status: string
  updated_at: string
  total_module: string
  [key: string]: unknown
}

export interface IProviderVerificationColumn {
  id?: string
  reason: string
  description: string
  status: string
  [key: string]: unknown
}

export interface IModalProviderVerifi {
  isModalOpen?: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  editId?: string
  data?: IProviderVerificationColumn
}
