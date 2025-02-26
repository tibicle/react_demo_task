// import { useMemo } from 'react'

// import { useAppSelector } from './reduxHooks'

// const usePermission = (section: any) => {
//   const { permission } = useAppSelector((state: any) => state.auth.auth)
//   console.log(permission)
//   const permissions = permission.find((permission: { section: string }) => permission.section === section)
//   console.log('first', permissions)
//   const allPermits: any = [
//     'create',
//     'view',
//     'edit',
//     'download',
//     'generate',
//     'client_admin_portal_and_mobile_app_settings',
//     'master_admin_settings',
//     'add_role',
//     'edit_permission',
//     'add_user',
//   ]

//   interface PermitMap {
//     create: boolean
//     view: boolean
//     edit: boolean
//     download: boolean
//     generate: boolean
//     client_admin_portal_and_mobile_app_settings: boolean
//     master_admin_settings: boolean
//     add_role: boolean
//     edit_permission: boolean
//     add_user: boolean
//   }

//   const permits: PermitMap = useMemo(() => {
//     const obj: any = {}
//     allPermits.forEach((item: any) => {
//       obj[item] = permissions?.permissions?.includes(item)
//     })

//     return obj
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return permits
// }

// export default usePermission

// import { useMemo } from 'react'

// import { useAppSelector } from './reduxHooks'

// interface Permission {
//   id: string
//   sub_section: string
//   permission: string[] | null
// }

// interface Section {
//   id: string
//   section: string
//   permissions: Permission[]
// }

// interface PermissionsState {
//   sections: Section[]
// }

// type PermitsMap = Record<string, Record<string, boolean>>

// const usePermissions = (sectionId: string): PermitsMap => {
//   const sections = useAppSelector((state: any) => state?.permission?.sections)

//   const sectionData = sections.find((sec: Section) => sec?.id === sectionId)

//   const permits = useMemo(() => {
//     const permitsMap: PermitsMap = {}

//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     sectionData?.permissions.forEach(({ sub_section, permission }: Permission) => {
//       permitsMap[sub_section] = permission
//         ? permission.reduce((acc: Record<string, boolean>, perm: string) => {
//             acc[perm] = true
//             return acc
//           }, {})
//         : {} // default to an empty object if permission is null
//     })

//     return permitsMap
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [sectionId, sections])

//   return permits
// }

// export default usePermissions

// import { useMemo } from 'react'

// import { useAppSelector } from './reduxHooks'

// interface Permission {
//   id: string
//   sub_section: string | any
//   permission: string[] | null
// }

// interface Section {
//   id: string
//   section: string
//   permissions: Permission[]
// }

// interface PermissionsState {
//   sections: Section[]
// }

// type PermitsMap = Record<string, Record<string, boolean>>

// const usePermissionsBySectionName = (sectionName: string): PermitsMap => {
//   const sections = useAppSelector((state: any) => state.permissions.sections)

//   // Find section by name instead of id
//   const sectionData = sections.find((sec: Section) => sec.section === sectionName)

//   const permits = useMemo(() => {
//     const permitsMap: PermitsMap = {}

//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     sectionData?.permissions.forEach(({ sub_section, permission }: Permission) => {
//       permitsMap[sub_section] = permission
//         ? permission.reduce((acc: Record<string, boolean>, perm: string) => {
//             acc[perm] = true
//             return acc
//           }, {})
//         : {} // default to an empty object if permission is null
//     })

//     return permitsMap
//   }, [sectionName, sections])

//   return permits
// }

// export default usePermissionsBySectionName
import { useMemo } from 'react'
import { useSelector } from 'react-redux' // Adjust the import path as needed

interface Permission {
  id: string
  sub_section: string
  permission: string[] | null
}

type PermitsMap = Record<string, Record<string, boolean>>

const usePermissionsBySectionName = (sectionName: string): PermitsMap => {
  const permissions = useSelector((state: any) => {
    return state?.auth?.auth?.permission
  })
  const sectionData = permissions?.find((perm: any) => perm?.section === sectionName)

  const permits = useMemo(() => {
    const permitsMap: PermitsMap = {}

    // eslint-disable-next-line @typescript-eslint/naming-convention
    sectionData?.permissions?.forEach(({ sub_section, permission }: Permission) => {
      permitsMap[sub_section] = permission
        ? permission?.reduce((acc: Record<string, boolean>, perm: string) => {
            acc[perm] = true
            return acc
          }, {})
        : {}
    })

    return permitsMap

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionName, permissions])

  return permits
}

export default usePermissionsBySectionName
