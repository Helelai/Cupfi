import { use } from "react";
import { login, registration } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

export async function handleRegistration(surname, name, patronymic, email, phone_number, username, password) {
    console.log(`handleRegistration: ${surname} ${name} ${patronymic} ${email} ${phone_number} ${username} ${password}`);
    try {
        if (!surname || !name || !patronymic || !email || !phone_number || !username || !password) {
            alert ("Заполните все поля");
            return null;
        }

        const newUser = await registration(surname, name, patronymic, email, phone_number, username, password).catch((error) =>{
            alert("Ошибка: " + error);
            return null;
        });

        if (newUser.ok) {
            window.location.reload();
        }
        else {
            alert("Возникла ошибка при авторизации");
        }

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
            return null;
        }

        console.log("handleLogin: " +username + " " + password);
        const user = await login(username, password).catch(
            () => {
                alert("Возникла ошибка при авторизации. Проверьте корректность данных.");
                return null;
            }
        );
        
        if (!user) {
            return null;   
        }

        window.location.reload();
        return user;
    }
    catch (e) {

    }
}