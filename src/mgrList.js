import $ from 'jquery';
import cleanMgrData from './cleanMgrData';

const mgrList = (state) => {
    const containerId = '#managerList';
    const container = $(containerId);
    container.empty();
    const mgrDataCleaned = cleanMgrData(state);
    let mgrContainers = mgrDataCleaned.map(manager => {
        const team = manager.teamMembers.join(', ');
        return `<div class="panel panel-default">
            <div class="panel-heading">${manager.name}</div>
            <div class="panel-body"><em>manages...</em><br/>${team}</div>
            </div>`
    })
    container.html(mgrContainers);
}

export default mgrList;
