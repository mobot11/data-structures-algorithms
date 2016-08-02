// function factorial(number) {
//     if (number ===1) {
//         return number;
//     } else {
//         return number * factorial(number-1);
//     }
// }
//
// console.log(factorial(10));
//
// var arr1 = [1,2,3,4,5];
// var arr2 = [3,4,5,6,7];
//
// // console.log(arr1.concat(arr2));
// //
// // console.log(arr1);
//
// //implement the shift method without using javascript's built in functions
//
// // function unShiftin(array,num) {
// //     //make sure i >= 0 or else first index will not get shifted
// //     for (var i = array.length-1; i >= 0; i--) {
// //         array[i+ 1] = array[i];
// //      }
// //     array[0] = num;
// //     return array;
// // }
//
// // console.log(weShiftin(arr1, 5));
//
// var nums = [1,2,3,4,5];
//
// var newElements = [4,5,6];
//
//
//
//
// function compare(num1, num2) {
//     return num1 - num2;
// }
//
// var newArray = nums.filter(function(el){
//     if (el > 3) {
//         return el;
//     }
// });
//
// console.log(newArray);
//
// var twoDimensional = [[0,1],[2,3],[4,5]];
//
// console.log(twoDimensional[0]);
// console.log(twoDimensional[0][0]);
//
// Array.matrix = function(numrows, numcols, initial) {
//     var arr = [];
//     for (var i = 0; i < numrows; ++i) {
//         var columns = [];
//         for (var j = 0; j < numcols; j ++) {
//             columns[j] = initial;
//         }
//         arr[i] = columns;
//     }
//     return arr;
// };
//
// var nums = Array.matrix(5,5,0);


var Grades = function() {
    this.grades = [];
    this.average = function average() {
        var total =  this.grades.reduce(function(a, b){
            return a + b;
        });
        return total / this.grades.length;
    }.bind(this);
    this.addGrade = function(num) {
        this.grades.push(num);
    };
};

var grades = new Grades();



 grades.grades.push(80,90,100);

 console.log(grades.grades);

 console.log(grades.average());

 grades.addGrade(60);

 // console.log(grades.average());


var wordSet = ['dog', 'cat', 'rat'];

// wordSet.reverse().forEach(function(word) {
//     console.log(word);
// });


//




// function add(temp) {
//     this.dataStore.push(temp);
// }

// function average() {
//     var total = 0;
//     for (var i = 0; i < this.dataStore.length; ++i) {
//         toatl += this.dateStore[i];
//     }
//     return total / this.dataStore.length;
// }

var julyTempsArray = [90,80,70,80,90,60,70,78,68,70,90,80,70,80,90,60,70,78,68,70,90,80,70,80,90,60,70,78,68,70];






var MonthlyTemps = function(tempArray) {
    this.tempArray = tempArray;
    this.monthArray = function() {
        var temps = this.tempArray;
        var days = temps.length;
        var weeks = Math.ceil(days / 7);
        var monthArray = [];
        var counter = 0;

        for (var i = 0; i < weeks; i ++) {
            monthArray.push([]);
        }
        for (var j = 0; j < days; j++) {
            if (monthArray[counter].length > 6) {
                counter++;
            }
            monthArray[counter].push(temps[j]);
        }
        return monthArray;
    };

    this.dataStore = this.monthArray();

};

MonthlyTemps.prototype.average = function() {
    var total = this.tempArray.reduce(function (a, b) {
        return a + b;
    });
    return total / this.tempArray.length;
};

MonthlyTemps.prototype.weeklyAverage = function() {

};

var julyTemps = new MonthlyTemps(julyTempsArray);



console.log(julyTemps.dataStore);

console.log(julyTemps.average());




















//
