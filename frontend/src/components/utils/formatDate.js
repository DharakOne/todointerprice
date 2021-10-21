export function formDate(date){
    let formatDate = Date.parse(date)
    formatDate = new Date(formatDate)
    formatDate = formatDate.toLocaleString()
    return formatDate
}