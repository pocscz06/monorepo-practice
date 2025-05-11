const expandBtns = document.querySelectorAll('.expand-icon');
const minusIcon = './assets/images/icon-minus.svg';
const plusIcon = './assets/images/icon-plus.svg';

expandBtns.forEach((expandBtn) => {
    expandBtn.addEventListener('click', () => {
        const btnDataId = expandBtn.getAttribute('data-id');
        // const answers = document.querySelectorAll('.answer');
        // answers.forEach((answer) => {
        //     const answerDataId = answer.getAttribute('data-id');
        //     if (answerDataId === btnDataId) {
        //         answer.classList.toggle('hide');
        //     }
        // })
        const answer = document.querySelector(`.answer[data-id="${btnDataId}"]`);

        if (answer) {
            answer.classList.toggle('hide');

            if (answer.classList.contains('hide')) {
                expandBtn.src = plusIcon;
            } else {
                expandBtn.src = minusIcon;
            }
        }
    });
});

// Instead of querying all answer elements on every click,
// could optimize w/ more specific selectors, i.e.,

// const answer = document.querySelector(`.answer[data-id="${btnDataId}"]`);

// SHOULD add aria attribute for keyboard-only users

// const isExpanded = !answer.classList.contains('hide');
// expandBtn.setAttribute('aria-expanded', isExpanded);