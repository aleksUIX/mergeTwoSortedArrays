
function MergeTwoArrays() {

  // This function will merge both pre-sorted arrays
  // I used quite a bit of container variables to decrease array access in the loop
  // using pointers lets us avoid nested for/while loops

  return function mergeTwoArrays(a, b) {
    var i = 0,
        j = 0, // i is a pointer for a, j is a pointer for b
        n = 0, // iterator for while
        alen = a.length,
        blen = b.length, // referencing lengths will speed things up
        ca,
        cb, // ca and cb are containers for array values - speed things up even more
        result = []; // this will be our merged array

    while (n < alen + blen) {
      ca = a[i];
      cb = b[j]; // taking accessing arrays to the minimum

      if (ca < cb) {
        if (ca) {
          result.push(ca)
          i++;
        }
      }
      else {
        if (cb) {
          result.push(cb)
          j++
        }
      }
      n++;
    }

    return result.concat(a.slice(i, alen)).concat(b.slice(j, blen)); // add remaining part of the longer array
  }
}
