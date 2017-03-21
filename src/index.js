import $ from 'jquery';
import renderMgrList from './renderMgrList';
import renderTeamContainers from './renderTeamContainers';

const state = {};

$.get('/api/teams')
    .then( _state => {
        state.managers = _state.managers;
        state.teamMembers = _state.teamMembers;
        renderMgrList(state);
        renderTeamContainers(state);
    });
