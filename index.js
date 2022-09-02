function saturdayFun(task) {
    if (!task) { return "This Saturday, I want to roller-skate!" } else {
        return `This Saturday, I want to ${task}!`
    };



}

function mondayWork(work) {
    if (!work) {
        return "This Monday, I will go to the office."
    } else {
        return "This Monday, I will work from home."
    }

}

function wrapAdjective(wrap) {
    const innerFunction = function (title = '*') {
        return `You are ${wrap}${title}${wrap}!`;
    };
    return innerFunction;
}