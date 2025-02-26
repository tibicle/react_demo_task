import type { IFieldData } from 'types'

export const formatTitle = (name: string): string => name?.replace(/_/g, ' ')?.replace(/\b\w/g, (char) => char?.toUpperCase())

export const handleFieldsChange = (allFields: IFieldData[], setError: React.Dispatch<React.SetStateAction<any>>) => {
  allFields.forEach((field: IFieldData) => {
    const fieldName = field.name[0]
    const fieldErrors = field.errors ?? []
    setError((prev: any) => ({
      ...prev,
      [fieldName]: fieldErrors.length > 0 ? fieldErrors[0] : '',
    }))
  })
}
