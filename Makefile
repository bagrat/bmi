.PHONY: test deploy

test:
	sls invoke test

deploy:
	sls deploy
