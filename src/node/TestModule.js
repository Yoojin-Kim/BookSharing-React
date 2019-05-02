module.exports = {
    odd : "홀수입니다",
    even : "짝수입니다",

    square : (n) =>{
        return Math.pow(2, n);
    },

    flipString: (s) =>{
        const revString = s.split("").reverse().join(""); 
        return revString;
    }
}