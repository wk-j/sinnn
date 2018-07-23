
function removeSpace(input: string) {
    var lines = input.split('\n')
    var space = lines.map(x => x.match(/^\s+/g)).filter(x => x !== null).map(x => x[0].length)
    var min = Math.min(...space)
    var regex = new RegExp(`^\\s{${min}}`, "g");
    var clean = lines.map(x => x.replace(regex, ''))
    return clean.reduce((a, b) => a + b)
}

var inputs = "  A\n            B\n    c"
var result = removeSpace(inputs)

console.log(result)
