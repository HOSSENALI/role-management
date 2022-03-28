import getUserData from "../users/userData";

export default function checkLogin(state) {
    const userData = getUserData();

    let isMatched = false;
    userData.forEach((user) => {
        if (user.username === state.username && user.password === state.password) {
            isMatched = true;
        }
    });
    return isMatched;
}