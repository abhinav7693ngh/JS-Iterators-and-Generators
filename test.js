// console.log('Connected successfully');

// ==================== Iterators ==================== //

// ========== Below I have defined my own iterator

function myIterator(start, finish){
    let index = start;
    let count = 0;

    return{
        next(){
            let result;
            if(index < finish){
                result = {value : index,done : false};
                index += 1;
                count++;
                return result;
            }
            return {
                value : count,
                done : true
            }
        }
    }
}

// let it = myIterator(0,10);
// let res = it.next();
// res = it.next();

// while(res.done !== true){
//     console.log(res.value);
//     res = it.next();
// }


// ====================== Using build in iterables to create iterators

// ============== 1. Using Array iterable

const arr = [0,2,4,6];

// const it = arr[Symbol.iterator]();

// let res = it.next();

// while(!res.done){
//     console.log(res.value);
//     res = it.next();
// }

// =============== 2. Using Map Iterable

const myMap = new Map();
myMap.set('key1','value1');
myMap.set('key2','value2');

// const it = myMap[Symbol.iterator]();

// let res = it.next();

// while(!res.done){
//     console.log(res.value);
//     res = it.next();
// }



// ================== Generators ================== //



function *mygen(){
    var ts = Date.now();
    console.log('Original ts: ',ts);
    yield ts;
    console.log('Waiting');
    var additionalTime = yield;
    console.log('Additional Time: ', additionalTime);
    if(additionalTime){
        ts = ts + additionalTime;
    }
    console.log(ts);
}

// const it = mygen();
// let originalTs = it.next();
// console.log(originalTs);
// it.next();
// it.next(1000);



// ============== Yield Delegation


// function *gen1(){
//     yield 1;
//     yield 2;
//     console.log('Gen1 finished');
// }

function gen1(){
    return ['three','two','one'];
}

function *gen2(){
    yield* gen1();
    console.log('Gen2 finished');
}

const it = gen2();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// it.next();


// ============== Using throw in generator



function* errorHandling(){
    try{
        yield 1;
        yield 2;
        yield 3;
    }
    catch(error){
        console.log(error);
    }
}

const my = errorHandling();
// console.log(my.next());
// it.throw('Error thrown');
// console.log(my.next());


// ============= Using return in generator



function* willReturn(){
    yield 1;
    yield 2;
    yield 3;
}

const yo = willReturn();
console.log(yo.next());
yo.return();
console.log(yo.next());