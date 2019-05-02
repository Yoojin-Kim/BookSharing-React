const testModule = require('./TestModule.js');
const moduleArr = [7,2,"Hello World", 11, "node", "server", 8, 1];

moduleArr.forEach(function(item) {
    if(item % 2 == 1){
        console.log("홀수입니다");
    }
    else if(item % 2 == 0){
        console.log("짝수입니다");
        testModule.square(item);
    }
    else{
        console.log(testModule.flipString(item));
    }
});
