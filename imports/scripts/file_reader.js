
export default fileRead = {
    md: '.md',
    html: '.html',
    getExt: function(str){
        let rev_str = str.split('').reverse()
                    .join('')
        return rev_str.slice(0, rev_str.indexOf('.') + 1)
                        .split('').reverse().join('')
    }
}