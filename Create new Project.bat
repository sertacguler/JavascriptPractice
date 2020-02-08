FOR /L %%A IN (1,1,200) DO (
	if not exist "%%A - test" (
	set path=%userprofile%\Documents\JS\JavaScript\JSTEST\"%%A - test"
	GOTO END 
	)
)

:END
mkdir %path%

copy %userprofile%\Documents\JS\JavaScript\JSTEST\"1 - test" %path%\

 