import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const getsessionUUID = async () => {
  const fp = await FingerprintJS.load()
  const { visitorId } = await fp.get()
  return visitorId
}

export const paginationDetails = (limit: number | string | undefined, currentPage: number | string | undefined = 1, total: number | string | undefined = 0) => {
  const numLimit = Number(limit) || 10
  const numCurrentPage = Math.max(1, Number(currentPage))
  const numTotal = Number(total) || 0

  let start = (numCurrentPage - 1) * numLimit + 1
  if (start > numTotal) {
    start = numTotal > 0 ? numTotal : 0
  }

  let end = numCurrentPage * numLimit
  if (end > numTotal) {
    end = numTotal
  }

  if (numTotal === 0) {
    start = 0
    end = 0
  }

  if (start < 1 && numTotal > 0) {
    start = 1
  }

  return `Showing ${start} - ${end} of ${numTotal}`
}

export const userToken = () => {
  const authPersist = localStorage.getItem('persist:root') ?? ''
  const jsonAuth = JSON?.parse(authPersist)
  const { accessToken } = JSON.parse(jsonAuth.auth)
  return accessToken
}

export const firstName = () => {
  const authPersist = localStorage.getItem('persist:root') ?? ''
  const jsonAuth = JSON?.parse(authPersist)
  const profileData = JSON?.parse(jsonAuth.auth)
  return profileData?.profileDetails?.first_name || ''
}

export const lastName = () => {
  const authPersist = localStorage.getItem('persist:root') ?? ''
  const jsonAuth = JSON?.parse(authPersist)
  const profileData = JSON?.parse(jsonAuth.auth)
  return profileData?.profileDetails?.last_name || ''
}

export const role = () => {
  const authPersist = localStorage.getItem('persist:root') ?? ''
  const jsonAuth = JSON?.parse(authPersist)
  const profileData = JSON?.parse(jsonAuth.auth)
  return profileData?.role?.name || ''
}

export const profileImage = () => {
  const authPersist = localStorage.getItem('persist:root') ?? ''
  const jsonAuth = JSON?.parse(authPersist)
  const profileData = JSON?.parse(jsonAuth.auth)
  return profileData?.profileDetails?.image || ''
}
