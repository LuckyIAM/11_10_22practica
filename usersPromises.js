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

const getAllUsers = () =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(DB.users);
    
        }, getDelay());
    })
    
}

const setNewUser = (newUser, cb) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const user ={
                id: new Date().getTime(), 
                ...newUser
            };
            DB.users.push(user);
            resolve(user);
        }, getDelay())
    })  
}

const updateUser = (id, fields) => {
    return new Promise(resolve =>{
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
            resolve(update);
        }, getDelay())
    })
    
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
setNewUser(newUser)
    .then(newData => {
        console.log('Новый пользователь добавлен', newData);
        return updateUser(newData.id,{name: 'Alexander'});
    })
    .then(updData => {
        console.log('Пользователь изменен', updData);
        return getAllUsers();
    })
        
    .then(allData => {
        allData.forEach(function(user, i) {
            console.log(`Пользователь ${++i}`, user);
        });
    })