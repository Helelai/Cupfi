import { login, registration } from "../api/authAPI";

export async function handleRegistration(surname, name, patronymic, email, phone_number, username, password) {
    try {
        if (!surname || !name || !patronymic || !email || !phone_number || !username || !password) {
            return("Заполните все поля");
        }
        const newUser = await registration(surname, name, patronymic, email, phone_number, username, password);

        return newUser;
    }
    catch (e) {
        return("Возникла ошибка при авторизации");
    }
}

export async function handleLogin(username, password) {
    try {
        if (!username || !password) {
            alert("Заполните все поля");
        }

        const user = await login(username, password);

        return user;
    }
    catch (e) {

    }
}