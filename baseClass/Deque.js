// 队列
class Deque {
  constructor(){
    this.count = 0
    this.low = 0
    this.items = {}
  }

  addFront(el){
    if(this.count === 0){
      this.addBack(el)
    }else if(this.low >0){
      this.low--
      this.items[this.low] = el
    }else{
      for(let i = this.count;i>0;i++){
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.low = 0
      this.items[0] = el
    }
  }
  addBack(el){
    this.items[this.count] = el
    this.count++
  }
  removeFront(el){
    const res = this.items[this.low]
    delete this.items[this.low]
    this.low++
    return res
  }
  removeBack(el){
    const res = this.items[this.count-1]
    delete this.items[this.count-1]
    this.count--
    return res
  }
  peekFront(el){
    return this.items[this.low]
  }
  peekBack(el){
    return this.items[this.count-1]
  }
  isEmpty(){
    this.count - this.low === 0
  }

  size(){
    return this.count - this.low
  }

  clear(){
    this.items = {}
    this.count = 0
    this.low = 0
  }

  toString(){
    if(this.isEmpty()){
      return ''
    }
    let objString = `${this.items[this.low]}`
    for(let i = this.low+1;i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

module.exports = Deque