// [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]

class flattenArray {
    initArray = null
    outArray = null

    /**
     * Instance entry point
     * @param initArray
     */
    constructor(initArray) {
        this.init(initArray)
    }

    /**
     * init (or reinit if required) the class
     * @param initArray The array to flatten
     */
    init(initArray) {
        this.initArray = initArray
    }

    /**
     * Flatten the array
     * @return {[]} The final array
     */
    flatten() {
        function* flatten(arr) {
            if (!Array.isArray(arr)) yield arr;
            else for (let el of arr) yield* flatten(el);
        }
        
        this.outArray = [...flatten(this.initArray)]
        return this.outArray
    }
}

module.exports = flattenArray