let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
  // Використовуємо sort() шоб посортувати
  return arr.sort(function () {
    // генерує випадкове число в діапазоні від-0.5 до 0.5, що треба для визначення порядку елементів у випадковому порядку
    return Math.random() - 0.5;
  });
}

arr = myBlend(arr);
console.log(arr);
