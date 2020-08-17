.PHONY: init test deploy

init:
	npm install


test:
	eslint .
	sls invoke test

deploy:
	sls deploy
