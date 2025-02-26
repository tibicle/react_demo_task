// import { useAppSelector } from './reduxHooks'

// const useAuth = () => {
//   const { permission } = useAppSelector((state: any) => state.auth.auth)
//   const sections = permission.map((section: { section: any }) => section.section)

//   const hasPermission = (requiredPermissions: string, requiredSubSection: string, path: string | undefined) => {
//     if (requiredPermissions === '') {
//       return true
//     }
//     if (sections.includes(requiredPermissions)) {
//       const sub = permission?.filter((section: any) => section?.section === requiredPermissions)
//       const arr = sub[0]
//       if (arr.permissions.filter((section: any) => section?.sub_section === requiredSubSection)[0]?.permission) {
//         return true
//       }
//     } else {
//       return false
//     }
//   }

//   return { hasPermission }
// }

// export default useAuth

import { useAppSelector } from './reduxHooks'

const useAuth = () => {
  const { permission } = useAppSelector((state: any) => state?.auth?.auth)

  const hasPermission = (requiredPermissions: string, requiredSubSection: string, path?: string): boolean => {
    if (!requiredPermissions) return true

    const section = permission?.find((p: any) => p?.section === requiredPermissions)
    if (!section) return false

    const subSection = section?.permissions?.find((p: any) => p?.sub_section === requiredSubSection)
    return !!subSection?.permission
  }

  return { hasPermission }
}

export default useAuth
