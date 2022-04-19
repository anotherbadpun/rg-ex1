// [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]

class flattenArray {
    initArray = null
    outArray = []

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

    flatten() {
        this.initArray.map((elm => {
            this.outArray.push(this.flattenElement(elm))
        }))
        return this.outArray
    }

    flattenElement(elm) {
        return elm
    }
}

module.exports = flattenArray