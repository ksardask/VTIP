// logic.js
function processNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
                .sort();
}
module.exports = { processNames };
