import type { Rule } from 'antd/es/form'

import { VALIDATION_ERROR } from './ValidationStrings'

export const nameValidation = [
  { required: true, message: VALIDATION_ERROR.COMMON.NAME },
  { pattern: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/, message: VALIDATION_ERROR.COMMON.NAME2 },
]

export const certificateName = [{ required: true, message: VALIDATION_ERROR.CERTI_NAME }]
export const specialtyName = [{ required: true, message: VALIDATION_ERROR.SPECIALITY_NAME }]
export const abbName = [{ required: true, message: VALIDATION_ERROR.CERTI_ABB }]
export const dropDownValidations = [{ required: true, message: VALIDATION_ERROR.DROPDOWN }]

export const roleValidation = [{ required: true, message: VALIDATION_ERROR.COMMON.ROLE }]
export const roleDropDownValidations = [{ required: true, message: VALIDATION_ERROR.COMMON.ROLE_DROPDOWN }]
export const bankAcValidation = [{ required: true, message: VALIDATION_ERROR.COMMON.BANK_AC }]

export const emailValidation = [
  { required: true, message: VALIDATION_ERROR.COMMON.EMAIL },
  { type: 'email', message: VALIDATION_ERROR.COMMON.EMAIL2 },
]

export const countryCodeValidations = [{ required: true, message: VALIDATION_ERROR.COMMON.COUNTRY_CODE }]

export const mobileValidations = [
  { required: true, message: VALIDATION_ERROR.COMMON.MOBILE },
  { pattern: /^[0-9+\s]+$/, message: VALIDATION_ERROR.COMMON.MOBILE2 },
  { min: 8, message: VALIDATION_ERROR.COMMON.MINNUMBER },
  { max: 14, message: VALIDATION_ERROR.COMMON.MAXNUMBER },
]

export const usernameValidation = [
  { required: true, message: VALIDATION_ERROR.COMMON.USERNAME },
  {
    pattern: /^[a-zA-Z0-9_]+$/,
    message: VALIDATION_ERROR.COMMON.USERNAME2,
  },
]

export const mobileValidation = [
  { required: true, message: VALIDATION_ERROR.COMMON.MOBILE },
  { pattern: /^[0-9+\s]+$/, message: VALIDATION_ERROR.COMMON.MOBILE2 },
  { min: 8, message: VALIDATION_ERROR.COMMON.MINNUMBER },
  { max: 14, message: VALIDATION_ERROR.COMMON.MAXNUMBER },
]

export const passwordValidations: Rule[] = [
  { required: true, message: VALIDATION_ERROR.PASSWORD.EMPTY_NEW_PASSWORD },
  ({ getFieldValue }) => ({
    async validator(_, value) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

      if (value) {
        if (value.length < 8) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.MINIMUM_LENGTH))
        }
        if (!passwordRegex.test(value)) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.INVALID_PASSWORD))
        }
      }
      await Promise.resolve()
    },
  }),
]
export const currentPwdValidation = [{ required: true, message: VALIDATION_ERROR.PASSWORD.EMPTY_CURRENT_PASSWORD }]

export const confirmPwdValidation: Rule[] = [
  { required: true, message: VALIDATION_ERROR.PASSWORD.EMPTY_CONFIRM_PASSWORD },
  ({ getFieldValue }) => ({
    async validator(_, value) {
      if (value) {
        const newPassword = getFieldValue('newPassword')
        const password = getFieldValue('password')
        if (newPassword && newPassword !== value) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.NOT_MATCH_PASSWORD))
        }
        if (password && password !== value) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.NOT_MATCH_PASSWORD))
        }
      }
      await Promise.resolve()
    },
  }),
]

export const newPwdValidation: Rule[] = [
  { required: true, message: VALIDATION_ERROR.PASSWORD.EMPTY_NEW_PASSWORD },
  ({ getFieldValue }) => ({
    async validator(_, value) {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).*$/

      if (value) {
        if (value.length < 8) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.MINIMUM_LENGTH))
        }
        if (!passwordRegex.test(value)) {
          return await Promise.reject(new Error(VALIDATION_ERROR.PASSWORD.INVALID_PASSWORD))
        }
      }

      await Promise.resolve()
    },
  }),
]

export const sourceNameValidation = [{ required: true, message: VALIDATION_ERROR.COMMON.SOURCE_NAME }]

export const testNameValidation = [{ required: true, message: VALIDATION_ERROR.COMMON.TESTNAME }]

export const certificateSelectValidations = [{ required: true, message: VALIDATION_ERROR.COMMON.CERTIFICATION }]

export const requiredToPassValidations = [{ required: true, message: VALIDATION_ERROR.COMMON.REQUIREDTOPASS }]

export const durationValidations = [{ required: true, message: VALIDATION_ERROR.COMMON.DURATION }]

export const checklistNameValidation = [{ required: true, message: VALIDATION_ERROR.COMMON.CHCKLISTNAME }]
