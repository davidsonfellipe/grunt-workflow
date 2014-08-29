grunt-workflow
==============
This is a DEMO for you start your project using Grunt, and currently watching and compiling Sass to CSS, watching/linting JS code and some other amazing things.


##Configure grunt

`make setup`

##package.json

if you're working in a mature project, can be not safe set version as 'latest',
please set one specific version to avoid breaking changes in your dependencies
before upgrading.


```javascript
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
```

Structure:

```bash
.
|── build/
|── src/
|   └── img/ (all imgs files)
|   └── js/ (all js files)
|   └── scss/ (all scss files)
└── .csslintrc
└── .editorconfig
└── .gitignore
└── .jshintrc
└── Gruntfile.js
└── package.json
└── README.md
```
