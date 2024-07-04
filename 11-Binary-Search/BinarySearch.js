class BinarySearch {
    constructor(array, target) {
        this.array = array;
        this.target = target;
    }

    binarySearch() {
        let start = 0;
        let end = this.array.length - 1;

        while (start <= end) {
            const middle = Math.floor((start + end) / 2);

            if (this.array[middle] === this.target) {
                return middle;
            } else if (this.array[middle] < this.target) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }

        return -1;
    }
}

// Exemple d'utilisation
const arr = [
    12, 14, 16, 20, 22,
    24, 32, 35, 41, 45,
    53, 54, 63, 67, 71,
    78, 87, 88, 91, 99
];

const target = 88;
const binarySearch = new BinarySearch(arr, target);
console.log(binarySearch.binarySearch()); // Output: 5]