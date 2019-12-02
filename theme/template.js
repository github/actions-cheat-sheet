
const headerContent = (node) => {
  const roles = node.getRoles()
  if (roles && roles.includes('header-nth')) {
    return `<img class="wordmark" src="./theme/assets/github.png"/>
    <h1>${node.getTitle()}</h1>`
  }
}


module.exports = {
  paragraph: (node) => `<p class="${node.getRoles().join(' ')} paragraph">${node.getContent()}</p>`,
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
<section class="footer">
  <div class="adFootnote">
    <div class="footerHeadline"><img class="wordmark" src="./theme/assets/github.png"/><span>Enterprise</span></div>
    <div class="subNote">Bring GitHub to work, on-premises or in the cloud</div>
    <div class="subNote">https://enterprise.gitub.com</div>
  </div>
  <div class="helpFootnote">
      <br>Find Actions on GitHub Marketplace at github.com/marketplace<br>
      Read about GitHub Actions at help.github.com/actions<br>
      Join a GitHub Learning Lab course at lab.github.com<br>
  </div>
</section>
</body>`
}
