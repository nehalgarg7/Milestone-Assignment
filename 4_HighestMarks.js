function HighestMarks(marks)
{
    let HighMark = 0;
    for(i=0; i<marks.length; i++)
    {
        HighMark > marks[i] ? HighMark = HighMark : HighMark = marks[i];
    }
    return HighMark;
}

const marks = [45, 78, 10, 97, 83];
console.log(HighestMarks(marks));