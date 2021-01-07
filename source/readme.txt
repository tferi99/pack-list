======================
How to build projects?
======================
NOTE: 
	Client (Angular) project contains lib which is used by server project (NestJS).
	This library contains common model types.

- NPM packages:
	- server:

		cd server
		npm i
		
	- app:
		
		cd client
		npm i
	
- library:
		
	cd client
	npm run build-lib
	
		OR 
		
	npm run build-lib-watch	
	

- softlinks to library (ONLY ONCE) :
	- check if softlinks are consistent:
	
		cd HOME\AppData\Roaming\npm\node_modules
		
	- if 'packlist-lib' exists, try to open
	
		If it doesn't exist or you cannot open it it's inconsistent.
		If it exists remove it. Create it again.

	cd client\dist\packlist-lib
	npm link
	
	cd server
	npm link packlist-lib

- build:

	cd server
	npm run build
	
- run:

	- Pre-requisites:
	
		- PostgreSQL database:	packlist 
			
		Create database with:	createDbWithSchema.bat
		
		
	- run server:
	
		cd server
		npm run start
		
			OR
			
		npm run start:dev
		
	- run app:
	
		cd client
		npm run start
		