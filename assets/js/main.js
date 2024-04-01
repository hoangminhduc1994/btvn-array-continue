// bai 1

let sortStudents = (students) => {
    return students.sort((a, b) => {
        return b.localeCompare(a);
    });
}

let students = ['Nam', 'Hoa', 'Tuấn'];
console.log(sortStudents(students)); 

// bai 2

let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}
console.log(shuffle([1, 2, 3, 4, 5]));


// bai 3

function symmetricDifference(arr1, arr2) {
    let result = [];

    function isInArray(value, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!isInArray(arr1[i], arr2) && !isInArray(arr1[i], result)) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!isInArray(arr2[i], arr1) && !isInArray(arr2[i], result)) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(symmetricDifference([1, 2, 3, 5], [1, 2, 4]));


// bai 4

function union(arr1, arr2) {
    let result = [];
    let seen = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!seen[arr1[i]]) {
            result.push(arr1[i]);
            seen[arr1[i]] = true;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!seen[arr2[i]]) {
            result.push(arr2[i]);
            seen[arr2[i]] = true;
        }
    }

    return result;
}

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));