document.getElementById('checkButton').onclick = function() {
    let correctAnswer = "apple";
    let selectedAnswer = document.querySelector('input[name="food"]:checked');
    
    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            alert("Правильно! Яблуко можна їсти.");
        } else {
            alert("Неправильно. Спробуйте ще раз.");
        }
    } else {
        alert("Будь ласка, виберіть відповідь.");
    }
};
