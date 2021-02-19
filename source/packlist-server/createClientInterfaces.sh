DIR=src/entities

cat $DIR/*.ts | awk '
BEGIN {
	inTarget=0
}

{
#	printf "                    ### [%d] %s\n", inTarget, $0
}

/@Entity/ {
	inTarget=1
	next
}
/^\s*[@]/ {
#	printf "+(%s)\n", $0
	next
}

/export class BaseEntity/ {
#	printf "##[%s]\n", $0
	next
}

/export class/ {
#	printf "###[%s]\n", $0
	split($0, a, "[ \t]*")
	printf "export class %s {\n", $3
}

/^}$/ {
	inTarget=0
	printf "%s\n\n", $0
}

/^\s*[a-zA-Z0-9_]+\s*[?!]\s*:.*;\s*$/{
#	printf "### %s\n", $0
	if (inTarget == 1) {
		found = match($0, "^\\s*([a-zA-Z0-9_]+\\s*[?!][ \t]*:)\\s*(Collection[<])([a-zA-Z0-9_]+)(>).*", m)
#		printf ">>>>> found:%d\n", found
		if (found > 0) {
			printf "  %s %s[];\n", m[1], m[3]
		}
		else {
			print
		}
	}
}
' > ../packlist-client/projects/packlist/src/app/common/entities.ts
