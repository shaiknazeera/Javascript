let emp ={
    id:101,
    name :'naaz'
}
let user={
    U_id:101,
    name:"naaz",
    get_details:function(){
        console.log("Display details")
    }

}
console.log(user.U_id)
console.log(user.name)
user.get_details()