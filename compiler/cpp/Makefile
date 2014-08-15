#
# Copyright (c) 2013 Derrell Lipman
# 
# License:
#   GPL Version 2: http://www.gnu.org/licenses/gpl-2.0.html 
#
SHELL=C:/Windows/System32/cmd.exe
COMMON		= ./cpp.js

all:	common

common:	cpp.jison cpp.lex
	node cli-wrapper.js -m commonjs -t true -o $(COMMON) cpp.jison cpp.lex
	@echo ""
	@echo "------------------------------"
	@echo "For testing, run 'nodejs ./cpp.js FILE.c'."
	@echo "------------------------------"


clean:
	rm -f $(COMMON)
