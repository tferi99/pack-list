pg_dump -U postgres packlist > db-before.sql
call node_modules/.bin/mikro-orm schema:update --fk-checks -d
call node_modules/.bin/mikro-orm schema:update --fk-checks -r

pg_dump -U postgres packlist > db.sql

ediff db-before.sql db.sql

rem diff db-before.sql db.sql
rem pause

