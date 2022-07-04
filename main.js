async function getSum(arr){
    if(arr instanceof Array){
        let sum = 0;
        for(let number of arr){
            sum += number
        }
        return sum
    }
    throw new Error('Nhập sai giá trị mảng')
}

async function doIt(){
    try{
        let ketqua = await getSum(1);
        console.log(ketqua);
    } catch(err) {
        console.log(err)
    }    
}
doIt();

async function doIt1(){
    try{
        let ketqua = await getSum([12,5,7]);
        console.log(ketqua);
    } catch (err) {
        console.log(err)
    }
}
doIt1();