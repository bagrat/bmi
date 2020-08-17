.PHONY: init test deploy

init:
	npm install


test:
	sls invoke test

deploy:
	sls deploy
