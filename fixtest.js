function hasCommonElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
const set2 = new Set(arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (set2.has(arr1[i])) {
      return true;
    }
  }
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
