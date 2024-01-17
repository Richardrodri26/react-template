import dayjs from "dayjs"


/**
 * Gets the current date 
 * @returns 
 */
export const getCurrentDate = () => {
    let currentDate = dayjs().format('YYYY-MM-DDTHH:mm')
    return currentDate
  }
  
  /**
   * Transform a value into input date format
   * @param value 
   * @returns 
   */
  export function formatToDate(value: string) {
    if (!value) return "----"
    return dayjs(value).format("DD/MM/YYYY")
  }
  