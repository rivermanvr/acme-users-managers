import $ from 'jquery';
import mgrButton from './mgrButton';
import mgrSelect from './mgrSelect';

const renderTeamContainers = (state, onSelectMgr, onMgrStatusChg) => {
    const containerId = '#memberList';
    const container = $(containerId);
    container.empty();
    let memberContainers = state.teamMembers.map(member => {
        let section = $(`<div class="panel panel-default">
            <div class="panel-heading">${member.name}</div></div>`);
        let sectionBody = $(`<div class="panel-body">
            more stuff will be here</div>`);
        sectionBody.append(mgrButton(member, onMgrStatusChg));
        sectionBody.append(mgrSelect(state.teamMembers, member, onSelectMgr));
        section.append(sectionBody);
        return section;
    })
    container.html(memberContainers);
}

export default renderTeamContainers;
