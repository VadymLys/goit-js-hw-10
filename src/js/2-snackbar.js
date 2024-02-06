import iziToast from "izitoast";
import 'iziToast/dist/iziToast.min.css';

const form = document.querySelector('.form');


function createPromise(event) {
    event.preventDefaut();
    const delay = form.delay.value;
    const state = form.state.value;
    const promise = new Promise(resolve, reject)
    if (state === 'fullfield') {
        setTimeout(() => resolve(delay), delay);
    } else if (state === 'rejected') {
        setTimeout(() => reject(delay), delay);
    }



    promise.then((delay) => {
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'bottomCenter',
        });
    })
        .catch((delay) => {
            iziToast.error({
                message: `❌Rejected promise in ${delay}ms`,
                position: 'bottomCenter',
            })
        })
}
form.addEventListener('submit', createPromise);