const all = []

class Instructor{
  constructor(name, role){
    this.name = name
    this.role = role
    all.push(this)
  }

  introduce(){
    return `My name is ${this.name}`
  }

  static count(){
    return all.length
  }
}

let jane = new Instructor("Jane", "TCF")
