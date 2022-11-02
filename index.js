class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a -b);
    this.items.length = this.items.length
  }

  get(pos) {

    if(pos >= 0 && pos <= this.length -1) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds') 
    }
  }

  max() {

    let maximum = this.items[0];

  if(this.items.length === 0) {
    throw new Error('EmptySortedList');
  } else {
    for(let i = 0; i <= this.items.length; i++) {
      if(this.items[i] > maximum) {
        maximum = this.items[i];
      }
    }
    return maximum
  }
 }

  min() {

    let minimum = this.items[0];

  if(this.items.length === 0) {
    throw new Error('EmptySortedList');
  } else {
    for(let i = 0; i <= this.items.length; i++) {
      if(this.items[i] < minimum) {
        minimum = this.items[i];
      }
    }
    return minimum
  }
  }

  sum(item) {
  let result = 0;
  if (item.length === 0) {
    return 0
  }
  for (let i = 0; i < item.length; i++) {
    result += item[i]
  }
  return result;
  }
  
  avg() {
    let total = 0;
    let count = 0;

  if (this.items.length === 0) {
    throw new Error('EmptySortedList');
  }
  this.items.forEach(function(item, index) {
      total += item;
      count++;
  });

  return total / count;
  }
}

module.exports = SortedList;
