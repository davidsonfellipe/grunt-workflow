setup:
	@if [ ! $$(which node) ]; then echo "✖ installing node..."; brew install node; else echo "node ✔"; fi
	@if [ ! $$(which npm) ]; then echo '✖ installing npm...'; sudo curl -O https://www.npmjs.org/install.sh; sudo sh install.sh;rm -rf install.sh; else echo "npm ✔"; fi
	@if [ ! $$(which grunt) ]; then echo '✖ installing grunt...'; sudo npm install -g grunt-cli; else echo "grunt ✔"; fi
	@npm i --save-dev
