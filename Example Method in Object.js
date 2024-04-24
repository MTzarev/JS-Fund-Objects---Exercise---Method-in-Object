function humanInfo(firstName, lastName, age){
let human={
    sayHi: function(){
        return `Hi to all!`;
    }
};
human.firstName=firstName;
human.lastName=lastName; 
human.age = age;
console.log(human.sayHi());
}
humanInfo("Mrioslav", "Petrov","35");
