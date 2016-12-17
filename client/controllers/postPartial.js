Template.postPartial.events({
  "click .delete-post": function () {
    var postId = event.target.dataset.id
    Meteor.call('deletePost', postId);
  }
});