function Course(id,title,duration,isForBeginners,cost){
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.isForBeginners = isForBeginners;
    this.cost = cost;
    /*
    this.showTitle = function(){
        console.log(`Il titolo di questo bellissimo corso è ${this.title}`);
    };*/
    
};
Course.prototype.showTitle = function(){
    console.log(`Il titolo di questo bellissimo corso è ${this.title}`);
};
let c1 = new Course(1,"Java for dummies",200,true,20);
let c2 = new Course(1,"SQL for dummies",100,true,30);
c1.showTitle();
let p1 = c1.__proto__;
console.log(p1);
let pp1 = c1.constructor.prototype;
console.log(p1 == pp1);
/*
let o1 = {
    name: "Ciccio"
};
o1.name = "Pippo";
o1.job = "Developer";
let o2 = {
    ...o1,
    age: 27
};*/