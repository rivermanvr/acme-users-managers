import $ from 'jquery';
import renderMgrList from './renderMgrList';

const state = {};

const setupMgrList = () => {
    const containerId = '#managerList';
    const mgrArrCleaned = state.managers.map(manager => {
        const teamMembers = manager.teamMember.map(member => {
            return member.name;
        })
        return { name: manager.name, teamMembers }
    })
    renderMgrList(containerId, mgrArrCleaned);
};

$.get('/api/teams')
    .then( _state => {
        state.managers = _state.managers;
        state.teamMembers = _state.teamMembers;
        setupMgrList();
    });
