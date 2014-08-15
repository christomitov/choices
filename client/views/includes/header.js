Template.header.events({
  'click #askButton': function(e) {
    var idList = [];
    $('li.selected').each(function() {
      idList.push($(this).attr('id'));
    });
    console.log(idList);
  }
});
