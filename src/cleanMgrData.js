const cleanMgrData = (state) => {
    return state.managers.map(manager => {
        const teamMembers = manager.teamMember.map(member => {
            return member.name;
        })
        return { name: manager.name, teamMembers }
    })
}

export default cleanMgrData;
