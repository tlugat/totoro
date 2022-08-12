import { getItems } from "../requests";
import { API_ROUTES } from "../routes";

export async function getJobs(query?: any) {
    const response = await getItems(API_ROUTES.JOBS, query);
    return response;
}