var x=100;//Global
function varDemo()
{
    console.log("x bên trong hàm:",x);
}
//
console.log("x bên trong hàm:",x)
//Thực thi hàm
varDemo();


//Local
function fnDemo()
{
    var y=200;
    console.log("y bên trong hàm:",y)
}
fnDemo();
console.log("y bên ngoài hàm",y);// ==error ReferenceError: y is not defined 