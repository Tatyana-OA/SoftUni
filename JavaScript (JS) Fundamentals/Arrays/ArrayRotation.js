function solve(arr, n) {
  let newArr = arr;
  //Създаване на нов array, в който да се запише отгвор

  for (let i = 0; i < n; i++) {
    let firstPosition = arr[i];
    //Първата стойност е равна на съответният индекс - 0,1,2...
    newArr.splice(arr.length, 0, firstPosition);
    // splce - първата позиция е мястото, където да се сложи стойността от третата позиция
  }
  for (let j = 0; j < n; j++) {
    newArr.shift();
    //shift изтрива първият индекс
  }

  console.log(newArr.join(` `));
}
solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);
