const deepFlatten = array => {
  for(let i = 0; i < array.length; i++) {
    while (typeof(array[i]) === "object") {
      array = array.flat(1);
    };
  }
  return array;
}

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.keys(collection).forEach(key => callback(key, collection[key], collection));
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      Object.keys(collection).forEach(key => newCollection.push(callback(collection[key], key, collection)));
      return newCollection;      
    },

    reduce: function(collection, callback, acc) {
      Object.keys(collection).forEach(key => {
        acc = acc ? callback(acc, collection[key], collection) : collection[key];
      });
      return acc;
    },

    find: function(collection, predicate) {
      let foundValue;
      Object.keys(collection).every(key => {
        if (predicate(collection[key])) {
          foundValue = collection[key]; 
          return false;
        }
        return true;
      });
      return foundValue;
    },
    
    filter: function(collection, predicate) {
      let tempArray = [];
      Object.keys(collection).forEach(key => predicate(collection[key]) && tempArray.push(collection[key]));
      return tempArray;
    },
    
    size: function(collection) {
      return Object.keys(collection).length;
    },
    
    first: function(array, n = 0) {
      return n ? array.slice(0, n) : array[0];
    },
    
    last: function(array, n = 0) {
      return n ? array.slice(-1 * n) : array.slice(-1)[0];
    },
    
    compact: function(array) {
      return this.filter(array, currElement => Boolean(currElement));
    },
    
    sortBy: function(array, callback) {
      let sortedArray = [array[0]];
      for (let i = 1; i < array.length; i++) {
        let sortedArrayLength = sortedArray.length;
        for (let j = 0; j < sortedArray.length; j++) {
          if (callback(array[i]) < callback(sortedArray[j])) {
            sortedArray.splice(j, 0, array[i]);
            break;  
          }
        }
        (sortedArray.length === sortedArrayLength) &&  sortedArray.push(array[i]);
      }
      return sortedArray;
    },
    
    flatten: function(array, shallow = false) {
      if (shallow) return array.flat(1);

      return deepFlatten(array);
    },
    
    uniq: function(array, sorted = false, callback) {
      let newArray = [];
      let arrayToReturn = [];
      let callbackArray = [];
      
      for (let i = 0; i < array.length; i++) {
        let found = false;
        
        if (callback && !callbackArray.includes(callback(array[i]))) {
          callbackArray.push(callback(array[i]));
          arrayToReturn.push(array[i]);
        }

        for (let j = 0; j < i; j++) {
          if (array[i] === array[j]) {
            found = true;
            break; 
          }
        }
        if (!found) newArray.push(array[i]);
      }

      return callback ? arrayToReturn : newArray;
    },

    keys: function(object) {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      let values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      let functions = [];
      for (const key in object) {
        (typeof object[key] === "function") && functions.push(key) 
      }
      return this.sortBy(functions, val => val);
    }
  }
})();

fi.libraryMethod();