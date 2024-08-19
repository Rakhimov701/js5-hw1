let users = {}

for(let i = 1; i <= 10; i++) {
    let name = prompt(`Введите имя для пользователя ${i}:`)
    let age = prompt(`Введите возраст для пользователя ${i}:`)
    
    users[i] = { Имя: name, Возраст: age}
}
for(let i = 1; i <= 10; i++) {
console.log(`Пользователь - ${i}`)
console.log(`Имя - ${users[i].Имя}`)
console.log(`Возраст - ${users[i].Возраст}`)
console.log('')
}

console.log('Все пользователи')
console.log(users)