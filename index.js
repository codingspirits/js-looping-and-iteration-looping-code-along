function writeCards(names, occasion) {
    let message = []
    for (let i=0; i<names.length; i++){
        message.push(`Thankyou, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    console.log(message)
}

writeCards(["Ada", "Brendan", "Ali"], "birthday")

function countDown(num){
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10)