import {faker} from "@faker-js/faker";
    const goalsUrl = '/team/9012430910/goal'

export const  getFolders = ()=>{
    return cy.sentRequest('GET', goalsUrl)
}

export const createGoal = ()=>{
    let body = {
        "name": faker.internet.username(),
        "due_date": 1568036964079,
        "description": "Goal Description",
        "multiple_owners": true,
        "owners": [
            152555169
        ],
        "color": "#32a852"
    }
    return cy.sentRequest('POST', goalsUrl, body)
}

export const updateGoal = (id)=>{
    const newBody = {
        "name": "Goal New name",
        "due_date": 1568036964079,
        "description": "Updated Goal Description",
        "color": "#32a852"
    }
    return cy.sentRequest('PUT', `/goal/${id}`, newBody)
}

export const deleteGoal = (goalId)=>{
    return cy.sentRequest('DELETE', `/goal/${goalId}`)
}

export const createKey = (id)=>{
    let keyBody = {
        "name": "New Key Result Name",
        "owners": [
            152555169
        ],
        "type": "number",
        "steps_start": 0,
        "steps_end": 10,
        "unit": "km",
        "task_ids": [],
        "list_ids": []
    }
    return cy.sentRequest('POST', `/goal/${id}/key_result`, keyBody)
}

export const updateKeyResult = (keyid) => {
    const newBodyKey = {
        "steps_current": 7,
        "note": "testnote"
    }
    return cy.sentRequest('PUT', `/key_result/${keyid}`, newBodyKey)
}

export const deleteKeyResult = (keyid)=>{
    return cy.sentRequest('DELETE', `/key_result/${keyid}`)
}