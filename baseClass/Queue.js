// 队列
class Queue {
  constructor(){
    this.count = 0
    this.low = 0
    this.items = {}
  }

  enqueue(el){
    this.items[this.count] = el
    this.count++
  }

  dequeue(){
    if(this.isEmpty()){
      return undefined
    }
    const res = this.items[this.low]
    delete this.items[this.low]
    this.low++
    return res
  }

  peek(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.low]
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

module.exports = Queue