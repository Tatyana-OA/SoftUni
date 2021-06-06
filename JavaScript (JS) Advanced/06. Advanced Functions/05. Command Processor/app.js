function solution() {
    let begin = ""
    function append(string) {
       begin+=string
    }
    function removeStart(n) {
        begin = begin.slice(n)
    }
    function removeEnd(n) {
         begin = begin.slice(0,-n)
    }
    function print() {
        console.log(begin)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
