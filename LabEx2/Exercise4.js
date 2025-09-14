var values = [1,60,34,30,20,5]

function filterLessThanTwenty(arr){
    return arr.filter(function (num){
        return num < 20;
    });

}

const filterLessThan20 = filterLessThanTwenty(values);
console.log(filterLessThan20)