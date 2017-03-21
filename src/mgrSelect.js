import $ from 'jquery';

const mgrSelect = (teamMembers, member, onSelectMgr) => {

     teamMembers = teamMembers.filter(teamMate => {
         return teamMate.id !== member.id && teamMate.isMgr === true;
     })

     let selectDD = $(`<select class='form-control'></select>`);
     selectDD.append($(`<option></option>`).attr('value', '').text('select a Manager for this team member.'));

     let optionItems = teamMembers.map(teamMate => {
        let optionItem = $(`<option></option>`).attr('value', teamMate.id).text(teamMate.name);
        if (member.managerId === teamMate.id) optionItem.attr('selected', 'selected');
        selectDD.append(optionItem);
     })

     let formGrp = $(`<form-group></form-group>`);
     formGrp.append(`<label>Managed By: </label>`);
     formGrp.append(selectDD);

     return formGrp;
}

export default mgrSelect;

// console.log(teamMembers, member);
