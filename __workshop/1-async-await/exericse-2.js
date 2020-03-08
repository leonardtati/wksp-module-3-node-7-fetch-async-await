// Exercise 2
// ----------

function doublesLater(num){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(num*2)
        },2000);
    })
};

const doubleDown = async(num)=>{
    const first = await doublesLater(10)
    const second = await doublesLater(20)
    const third = await doublesLater(30)
    return (num + first + second + third)
}

doubleDown(30).then((sum) =>{
    console.log(sum)
});