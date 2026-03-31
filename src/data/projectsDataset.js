const projects = Array.from({ length: 1500 }, (_, index) => ({
    id: index + 1,
    name: `Project ${index + 1}`,
    description: `Description for project ${index + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
}));

module.exports = projects;