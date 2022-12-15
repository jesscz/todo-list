import emptyStar from '../pictures/emptyStar.svg';
import filledStar from '../pictures/filledStar.svg';

const starClick = (star, toDoList, i) => {
    if (toDoList[i]['newPriority'] == 'No'){
        star.src = emptyStar;
    }
    else if (toDoList[i]['newPriority'] == 'Yes'){
        star.src = filledStar;
    }
    star.addEventListener('click', function(){
        if (star.src == emptyStar){
            star.src = filledStar;
            toDoList[i]['newPriority'] = 'Yes';
        }
        else if (star.src == filledStar){
            star.src = emptyStar;
            toDoList[i]['newPriority'] = 'No';
        }
    });
}

export { starClick }