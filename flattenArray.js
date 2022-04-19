// [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]

class flattenArray {
    initArray = null

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
        console.log(this.initArray)
    }
}

module.exports = flattenArray