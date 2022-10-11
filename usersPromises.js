const DB ={
    users: [
        {
            name: 'Leonid',
            age: 25,
            id: new Date().getTime()
        }
    ]
}

const getDelay = ()=> Math.floor(Math.random() * 1000)

const getAllUsers = (cb) =>{
    setTimeout(() => {
        cb(DB.users);

    }, getDelay())
}

const setNewUser = (newUser, cb) => {
    setTimeout(() => {
        const user ={
            id: new Date().getTime(), 
            ...newUser
        };
        DB.users.push(user);
        cb(user);
    }, getDelay())
}

const updateUser = (id, fields, cb) => {
    setTimeout(() =>{
        let update;
        DB.users = DB.users.map(user => {
            if(user.id === id){
                update = {
                    ...user,
                    ...fields
                }
                return update;
            }
            return user;
        });
        cb(update);
    }, getDelay())
} 
// console.log(DB.users);

// getAllUsers(function(data){
//     console.log(data);
// })

// let leon = DB.users[0];
// updateUser(leon.id, {age: ++ leon.age}, function(data){
//     console.log('Новый Леонилд', data)
// })

const newUser = {
    name:'Alex',
    age: 31
}
setNewUser(newUser, function(newData) {
    console.log('Новый пользователь добавлен', newData);
    updateUser(newData.id,{name: 'Alexander'}, function(updData) {
        console.log('Пользователь изменен', updData);
        getAllUsers(function (allData){
            allData.forEach(function(user, i) {
                console.log(`Пользователь ${++i}`, user);
            })
        })
    })
})