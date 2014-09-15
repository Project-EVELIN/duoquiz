#
# Copyright (c) 2013 Derrell Lipman
#
# License:
#   GPL Version 2: http://www.gnu.org/licenses/gpl-2.0.html
#
SHELL=C:/Windows/System32/cmd.exe
ANSIC			= ./ansic.js


all:	ansic

ansic:	ansic.jison ansic.lex
	node cli-wrapper.js -m commonjs -t true -o  $(ANSIC) ansic.jison ansic.lex
	@echo ""
	@echo "------------------------------"
	@echo "For testing, run 'nodejs ./ansic.js FILE.c'."
	@echo "------------------------------"

clean:
	rm -f $(ANSIC)
