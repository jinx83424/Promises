const posts=[{id:0,pName:"POST0"},{id:1,pName:"POST1"},{id:2,pName:"POST2"}]
console.log("Before Creating/Deleting post" ,new Date().toLocaleString().replace(',',''));

function lastActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(new Date().toLocaleString().replace(',',''))

        },1000)
    })
}
function createPost(obj){
    return new Promise((resolve,reject)=>{
        posts.push(obj);

        resolve(`After Creating ${obj["pname"]}`);
    })
}
function getPosts(){
    return new Promise((resolve,reject)=>{
        resolve(posts)
    })
}

function deletePost(id,pname){
    return new Promise((resolve,reject)=>{
        let popped=posts.pop();
        resolve(`After Creating ${popped}`)
    })
}
Promise.all([createPost({id:3,pname:"POST3"}),getPosts(),lastActivity()]).then(val=>{
    for(let i=0;i<val.length;i++){
        console.log(val[i])
    }
})
