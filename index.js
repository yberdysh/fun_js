// what happens when the below snippets are run?

var demo = "Hello";
function getDemo(demo){
  var test = function(){
    return demo + ' my friend'
  }
  demo = demo + ' how are you'

  return test();
}

demo = "Hey"
console.log(getDemo('Hi'))

var myObject = {
  genius: "Alvaro",
  test: function(){
    console.log("external: ", this.genius)
    (function demo(){
      console.log("internal: ", this.genius)
    }())
  },
  demo: function(){
    console.log("demo: ", this.genius)
  }
}

myObject.test();
new myObject.demo()

(function(){
  console.log(1)
  setTimeout(function(){console.log(2)}, 1000)
  setTimeout(function(){console.log(3)}, 0)
  console.log(4)
})()

(function(){
  var a = b = 3
})()
console.log("a defined? ", typeof a !== 'undefined')
console.log("b defined? ", typeof b !== 'undefined')

function demo(a, b){
  if (arguments.length === 1){
    console.log("B is not being passed")
  } else {
    console.log("Done")
  }
}

demo("a", undefined)
demo("a")

const arr = [10, 12, 15, 21]
for (var i = 0; i < arr.length; i++){
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i])
  }, 3000)
}
