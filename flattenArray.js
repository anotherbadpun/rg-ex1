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

    /**
     * Flatten the array
     * @return {[]} The final array
     */
    flatten() {
        this.initArray.map((elm => {
            this.flattenElement(elm)
        }))
        return this.outArray
    }

    /**
     * Determine how to handle an array element
     * @param elm
     * @return {*}
     */
    flattenElement(elm) {
        const self = this

        if (Array.isArray(elm)) {
            setTimeout(function() {
                self.outArray.push(self.flattenElement(elm))
            })
        } else {
            self.outArray.push(elm)
        }
    }
}

module.exports = flattenArray