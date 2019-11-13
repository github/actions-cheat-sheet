
const headerContent = (node) => {
  const roles = node.getRoles()
  if (roles && roles.includes('header-nth')) {
    return `<img class="wordmark" src="./theme/assets/github.png"/>
    <h1>${node.getTitle()}</h1>`
  }
}


module.exports = {
  paragraph: (node) => `<p class="${node.getRoles().join(' ')}">${node.getContent()}</p>`,
  document: (node) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link href="./theme/assets/style.css" rel="stylesheet">
</head>
<body>
<header>
  <img class="wordmark" src="./theme/assets/github.png"/>
  <h1>${node.getHeader().getTitle()}</h1>
  <img class="logo" src="./theme/assets/logo.png"/>
</header>
<section class="byline">
  <div>${node.getAttribute('byline')}</div>
</section>
<section class="content">
${node.getContent()}
</section>
<section class="footer"></section>
</body>`
}
