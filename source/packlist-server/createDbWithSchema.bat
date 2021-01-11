createDb -U postgres packlist

call node_modules/.bin/mikro-orm schema:update --fk-checks -r

