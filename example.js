   function findDuplicates(arr1, arr2) {
     const duplicates = [];
     for (let i = 0; i < arr1.length; i++) {
const set2 = new Set(arr2);
     const duplicates = arr1.filter(item => set2.has(item));
         if (arr1[i] === arr2[j]) {
           duplicates.push(arr1[i]);
         }
       }
     }
     return duplicates;
   }
