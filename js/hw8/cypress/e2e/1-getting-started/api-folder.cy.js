const { faker, id_ID} = require('@faker-js/faker');
const {getFolders, createFolder, createGoal, updateGoal, deleteGoal, createKey, updateKey, updateKeyResult,
    deleteKeyResult} = require("../../services/folderMethods");



describe('check folder functionality on clickUp', () => {

    it('get goals', () => {
        getFolders().then((response) => {
            cy.log(response.status)
            expect(response.status).to.eq(200)
        })
    })
    //
    //   it('create goal', () => {
    //       createGoal().then((response) => {
    //           cy.log(response.status)
    //           expect(response.status).to.eq(200)
    //       })
    //
    //   })
    //
    // it('get goal by id', () => {
    //     createGoal().then((response) => {
    //         let goalId = response.body.goal.id
    //         cy.sentRequest('GET', `/goal/${goalId}`)
    //         cy.log(response.status)
    //         expect(response.status).to.eq(200)
    //     })
    //
    // })
    //
    // it('update goal', () => {
    //     createGoal().then((response) => {
    //         const id = response.body.goal.id
    //         updateGoal(id).then((response) => {
    //             cy.log(response.status)
    //             expect(response.status).to.eq(200)
    //         })
    //     })
    //
    // })
    // it('delete goal', () => {
    //     createGoal().then((response) => {
    //         let goalId = response.body.goal.id
    //         deleteGoal(goalId).then((response) => {
    //             cy.log(response.status)
    //             expect(response.status).to.eq(200)
    //         })
    //     })
    // })
    //
    // it('create key result', () => {
    //     createGoal().then((response) => {
    //         const id = response.body.goal.id
    //         createKey(id)
    //         cy.log(response.status)
    //         expect(response.status).to.eq(200)
    //     })
    // })
    // it('update key result', () => {
    //     createGoal().then((response) => {
    //         const id = response.body.goal.id
    //         createKey(id).then((response) => {
    //             const keyid = response.body.key_result.id
    //             updateKeyResult(keyid).then((response)=>{
    //                 cy.log(response.status)
    //                 expect(response.status).to.eq(200)
    //             })
    //         })
    //     })
    // })
    // it('delete key result', () => {
    //     createGoal().then((response) => {
    //         const id = response.body.goal.id
    //         createKey(id).then((response) => {
    //             const keyid = response.body.key_result.id
    //             deleteKeyResult(keyid).then((response)=>{
    //                 cy.log(response.status)
    //                 expect(response.status).to.eq(200)
    //             })
    //         })
    //     })
    // })

})


