function showName(){
    console.log('Fernando');
}

setInterval(showName, 2000) ;
//Do not use brackets to call in the setInterval, otherwise the function will be executed only once.




function hello() {
    console.log('Hello');
}

setTimeout(hello, 5000);
//Timeout will apply a delay to execute the function, you define how much time.