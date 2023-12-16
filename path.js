export const paths = {
  root() {
    return '/';
  },
  topicShow(topicSlug) {
    return `/topics/${topicSlug}`;
  },
  noteCreation(topicSlug) {
    return `/topics/${topicSlug}/notes/new`;
  },
  noteDetails(topicSlug, noteId) {
    return `/topics/${topicSlug}/notes/noteId`;
  },
};
