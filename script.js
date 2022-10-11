setTimeout(function(){
    console.log(new Date().toLocaleTimeString(), 0)
})

setTimeout(function(){
    console.log(new Date().toLocaleTimeString(), 0)
})
 console.log('Сегодня прекрасный день!')

 const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let result = Math.round(Math.random());
    if (result){
        resolve('All corect');
    }else {
        reject('Somthing wrong!')
    }
    },100)
    
 })
 console.log(promise)

 promise
 .then(function(data){
    console.log('Succes Full - 100%');
 })
 .catch(function(err){
    console.log('Sothing wrong');
 })