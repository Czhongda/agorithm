// 基于对象的栈
class Stack {
  constructor(){
    this.count = 0
    this.items = {}
  }

  push(el){
    this.items[this.count] = el
    this.count++
  }
  
  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const res = this.items[this.count]
    delete this.items[this.count]
    return res
    
  }

  peek(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.count-1]
  }

  isEmpty(){
    return this.count === 0
  }

  size(){
    return this.count
  }

  clear(){
    this.items = {}
    this.count = 0
  }

  toString(){
    if(this.isEmpty()){
      return ''
    }

    let objString = `${this.items[0]}`
    for(let i = 1;i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

module.exports =  Stack
