const nodes = [];

const squircle = figma.createRectangle();
squircle.cornerRadius = 15;

figma.currentPage.appendChild(squircle);
nodes.push(squircle);

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);
figma.closePlugin();