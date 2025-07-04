import { AppState } from '../../../app/store';
export function selectRequestById(id: string) {
    return (state: AppState) => {
        return state.requestsPage.requests.find((el) => el.id === id)
    }
}

export function allRequests() {
    return (state: AppState) => state.requestsPage.requests
}