/**
 * Rule validate required
 * @param {any} v the given value to validate
 * @param {string} label
 * @returns validate
 */
export function ruleRequired(v: any, label: string | null = null) {
  if (Array.isArray(v)) {
    return v.length !== 0 || `${label ?? "Field"} is required`
  }
  return !!v || `${label ?? "Field"} is required`
}
/**
 * Rule validate min length
 * @param {any} v the given value to validate
 * @param {number} length min length to check
 * @param {string} label
 * @returns validate
 */
export function ruleMinLength(v: any, length: number, label: string | null = null) {
  return (
    String(v).length >= length || `${label ?? "Field"} must be greater than ${length} characters`
  )
}
/**
 * Rule validate max length
 * @param {any} v the given value to validate
 * @param {number} length max length to check
 * @param {string} label
 * @returns validate
 */
export function ruleMaxLength(v: any, length: number, label: string | null = null) {
  return String(v).length <= length || `${label ?? "Field"} must be less than ${length} characters`
}
/**
 * Rule validate email
 * @param {any} v the given value to validate
 * @param {string} label
 * @returns validate
 */
export function ruleEmail(v: any, label: string | null = null) {
  return (
    !v ||
    /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.\w{2,3})+$/.test(String(v)) ||
    `${label ?? "Field"} must be a valid email address`
  )
}
/**
 * Rule validate DNI
 * @param {any} v the given value to validate
 * @param {string} label
 * @returns validate
 */
export function ruleDNI(v: any, label: string | null = null) {
  return !v || /^[0-9]{8}[A-Za-z]$/.test(String(v)) || `${label ?? "Field"} must be a valid DNI`
}
/**
 * Rule validate phone number
 * @param {any} v the given value to validate
 * @param {string} label
 * @returns validate
 */
export function ruleTelephone(v: any, label: string | null = null) {
  return (
    !v ||
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(
      String(v)
    ) ||
    `${label ?? "Field"} must be a valid phone number`
  )
}
/**
 * Rule validate number less than
 * @param {any} v the given value to validate
 * @param {string} targetValue the target value to check against
 * @param {string} label
 * @returns validate
 */
export function ruleLessThan(v: any, targetValue: string, label: string | null = null) {
  return (
    !v ||
    !targetValue ||
    parseFloat(v) < parseFloat(targetValue) ||
    `${label ?? "Field"} must be less than ${targetValue}`
  )
}
/**
 * Rule validate number greater than
 * @param {any} v the given value to validate
 * @param {string} targetValue the target value to check against
 * @param {string} label
 * @returns validate
 */
export function ruleGreaterThan(v: any, targetValue: string, label: string | null = null) {
  return (
    !v ||
    !targetValue ||
    parseFloat(v) > parseFloat(targetValue) ||
    `${label ?? "Field"} must be greater than ${targetValue}`
  )
}
/**
 * Rule validate integer number
 * @param {any} v the given value to validate
 * @param {string} label
 * @returns validate
 */
export function ruleNumber(v: any, label: string | null = null) {
  return Number.isInteger(Number(v)) || `${label ?? "Field"} must be a valid number`
}
