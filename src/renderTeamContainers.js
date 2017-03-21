import $ from 'jquery';
import mgrButton from './mgrButton';
import mgrSelect from './mgrSelect';

const renderTeamContainers = (state) => {
    console.log(state);
    const containerId = '#memberList';
    const container = $(containerId);
    container.empty();
    let memberContainers = state.teamMembers.map(member => {
        return `<div class="panel panel-default">
            <div class="panel-heading">${member.name}</div>
            <div class="panel-body">more stuff will be here</div>
            </div>`
    })
    container.html(memberContainers);
}

export default renderTeamContainers;
