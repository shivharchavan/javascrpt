var abc =function (marks)
{
    if (marks <= 0 || marks<35)
{
    console.log (`your marks is ${marks}  and you are fail` );
}
    else
{
    if (marks >=35 && marks<60 )
    {
        console.log (`your marks is ${marks} and your grade is c and you are pass`);

    }
    else{
            if (marks>60 && marks<=75)
            {
                console.log(`your marks is ${marks} and your grade is b`);
            }
    }
    if(marks> 75)

    {
        console.log(`your marks is ${marks} and your grade is a`);
    }
}



}

abc (99);

function dayofweak (daynum)
{
switch ( daynum) {
    case 1:
        console.log(`the day number is ${daynum} and day is monday`);
        break;

        case 2:
        console.log(`the day number is ${daynum} and day is tuesaday`);
        break;
        case 3:
        console.log(`the day number is ${daynum} and day is wedensaday`);
        break;
        case 4:
        console.log(`the day number is ${daynum} and day is thursaday`);
        break;
        case 5:
        console.log(`the day number is ${daynum} and day is friday`);
        break;
        case 6:
        console.log(`the day number is ${daynum} and day is saturday`);
        break;
        case 7:
        console.log(`the day number is ${daynum} and day is sunday`);
        break;
        
    default:
        console.log(`enterday daynum in ${daynum} invalid`)    
    break;
}
}
dayofweak(5);
dayofweak(null);