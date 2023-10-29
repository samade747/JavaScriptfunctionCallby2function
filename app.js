//creating 2 functions & getting data by 2 function

function foo(){
    var obj = {
        name: 'samad',
        age:  24,
        desc: 'assdasda',
        position: 'aknlnlsadsa'
    }

    doo(obj).value
}


function doo(e){
   // console.log(e)
    document.write(`Name ${e.name},<br> Age ${e.age} <br> desc ${e.desc} <br> position ${e.position}`)

}


// displaying undefined in result of last
// so mehneh add krdi hai upar doo(obj).value
document.write(foo())

