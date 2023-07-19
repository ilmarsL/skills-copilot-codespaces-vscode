function skillsMember() {
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skillsMember');
    var member = document.getElementById('member');
    var memberMember = document.getElementById('memberMember');
    var skillsMember = document.getElementById('skillsMember');
    var skillsMemberMember = document.getElementById('skillsMemberMember');
    var contact = document.getElementById('contact');
    var contactMember = document.getElementById('contactMember');
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skillsMember');
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        skillsMember.style.display = 'none';
        member.style.display = 'none';
        memberMember.style.display = 'block';
        skillsMember.style.display = 'none';
        skillsMemberMember.style.display = 'block';
        contact.style.display = 'none';
        contactMember.style.display = 'block';
    } else {
        skills.style.display = 'none';
        skillsMember.style.display = 'block';
        member.style.display = 'block';
        memberMember.style.display = 'none';
        skillsMember.style.display = 'block';
        skillsMemberMember.style.display = 'none';
        contact.style.display = 'block';
        contactMember.style.display = 'none';
    }
}