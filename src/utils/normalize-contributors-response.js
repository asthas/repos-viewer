const normalizeContributorsRepsonse = contributors =>
  contributors.map(contributor => ({
    name: contributor.login,
    id: contributor.id,
    avatar: contributor.avatar_url
  }));

export default normalizeContributorsRepsonse;
