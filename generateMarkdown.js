
function generateMarkdown(data, githubInfo) {
  return `
# ${data.title}

## Description 
================================

${data.description}

## Table of contents
================================

* (#Description)
* (#Installation)
* (#Usage)
* (#License)
* (#Contributors)
* (#Test)

## Installation
=================================

        ${data.installation}

## Usage
================================

${data.usage}


## Contributors
================================

${data.contributors}

## Test
================================

${data.test}


## Repository
=================================

- [Project Repo](${data.repo})

## GitHub
==================================


- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})


`;
}

module.exports = generateMarkdown;
