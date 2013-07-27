VERSION=0.1

JSFILES=src/main.js
JSFILES=src/orientation.js
UF=$(shell npm bin)/uglifyjs

all:
	cat src/webapp/install.js | ${UF} > install.js
	cat ${JSFILES} | ${UF} > pancake.js

npm:
	mkdir -p node_modules
	npm install uglify-js

dist:
	git clone . pancakejs-${VERSION}
	rm -rf pancakejs-${VERSION}/.git
	tar czvf pancakejs-${VERSION}.tar.gz pancakejs-${VERSION}
	rm -rf pancakejs-${VERSION}
