VERSION=0.1

JSFILES=src/main.js
JSFILES=src/orientation.js

all:
	cat src/webapp/install.js | uglifyjs > install.js
	cat ${JSFILES} | uglifyjs > pancake.js

dist:
	git clone . pancakejs-${VERSION}
	rm -rf pancakejs-${VERSION}/.git
	tar czvf pancakejs-${VERSION}.tar.gz pancakejs-${VERSION}
	rm -rf pancakejs-${VERSION}
