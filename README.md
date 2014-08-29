grunt-workflow
==============

##Configure grunt

`make setup`

##package.json

if you're working in a mature project, can be not safe set version as 'latest',
please set one specific version to avoid breaking changes in your dependencies
before upgrading.


`
{
  "private": true,
  "author": "Your Name <you.name@example.org>",
  "devDependencies": {
    "grunt": "latest",
    "load-grunt-config": "latest",
    "grunt-contrib-uglify": "latest",
    "grunt-contrib-concat": "latest",
    "grunt-contrib-watch": "latest"
  }
}
`
