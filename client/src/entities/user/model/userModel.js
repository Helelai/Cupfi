
import { API_URL } from "../../../../config";
import { getUsers } from "../api/userAPI";

export async function handleGetUsers() {
    const reviews = await getUsers();
    return reviews;
}