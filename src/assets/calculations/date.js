
export function getDate (date){
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    date = new Date(date)
    
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()
    return(`${mS[m]} ${d} ${y}`)
}