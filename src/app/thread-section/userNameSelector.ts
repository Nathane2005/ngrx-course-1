import {ApplicationState} from "../store/application-state";

export function userNameSelector(state: ApplicationState): string {

    const currentUserId = state.uiState.userId,
        currentParticipant = state.storeData.participants[currentUserId];

    if (!currentParticipant) {
        return "";
    }

    return currentParticipant.name;
}


export function weatherSelector(state: ApplicationState): string {

    const currentUserId = state.uiState.userId
    const currentParticipant = state.storeData.participants[currentUserId];

    if (!currentParticipant) {
        return "";
    }

    return currentParticipant.name;
}