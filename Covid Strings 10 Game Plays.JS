doc.type.html 
html lang en
script
header=document create.element (header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings10’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=game plays overview
heading2=covid strings calculator 
heading3=covid strings calculator user input 
heading4=thought box 
subheading1=calculator interface 
subheading2=calculator functionality
subheading3=yellow thought box
subheading4=purple thought box
subheading5=magenta thought box
subheading6=red thought box
subheading7=blue thought box
subheading8=pink thought box
subheading9= indigo thought box
subheading10=teal thought box
filename=covid string10 game plays.js
<header.html>
game plays overview
an overview of covid string game plays
string unit=style for non-concatenated strings 
string array=style for concatenated strings 
blank=part of string that user must answer
user answer=individual users answer
team answer=teams answer
user in select string category
if category==non-concatenated
user.fill blank in string unit
else:
remain
if category==concatenated
user.fill blank in string array
else:
remain
if selected question==multiple choice
user in select a,b,c,d
else:
remain
if hyperlink from meta==reference
user in.select hyperlink
else 
remain 
if selected question ==math problem
open covid strings calculator 
else:
remain
<header.html>
calculator 
the calculator used for players to calculate math problems in covid strings10
covid strings calculator=calculator for math problems
operations=addition,subtraction,multiplication,division
if operation==addition:
return addition
else:
remain
if operation==subtraction:
return subtraction
else:
remain
if operation==multiplication:
return multiplication
else:
remain
if operation==division
return division
else:
remain
<header.html>
covid strings calculator user input 
the user input for the covid strings calculator 
<doctype.html>
<html>
<body>
label for user actions in covid strings 
input type=”text” id=”name”
<script>
document.getelementbyid(name)add.eventlistener(input,event)
console.log(current input +event.target.value)
<script>
<body>
<html>
user in select covid strings calculator
<subheading.html>
calculator interface
the user interface of the covid strings calculator 
<doc type.html>
html lang en
<head>
utf8
“viewport” content=width device-width initial scale 1.0
<title> simple calculator /<title>
<style>
body{
font family arial sans serif
display:flex
justify content:center
align  items:center
height 100vh;
background-color:f0f0f0
calculator
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display
width 100%
height 40px
margin-bottom: 10px;
text-align:right;
padding:10px;
font-size: 1.5em;
border:1px solid ccc
border-radius 5px
buttons 
display:grid;
grid-template-columns:repeat (4,1fr)
gap:10px;
.button 
padding 20px
font size 1.2em
border:none
border radius:5px 
cursor:pointer;
background color f9f9f9
box shadow 0 2px 5pxrgba(0,0,0,0.1);
button operator
background color ff9500
color:fff
button equal
background color 34c759
color fff
grid column span 2
button clear
background color ff3b30
color fff
grid column span 2
<style>
<head>
<body>
<div class= “calculator”
<input type=”text” class=”display” id “display”=disabled>
<div class buttons”>
<button class “button” on click=”appendnumber(‘0’)>0<button
<button class “button” on click=”appendnumber(‘1’)>1<button
<button class “button” on click=”appendnumber(‘2’)>2<button
<button class “button” on click=”appendnumber(‘3’)>3<button
<button class “button” on click=”appendnumber(‘4)>4<button
<button class “button” on click=”appendnumber(‘5’)>5<button
<button class “button” on click=”appendnumber(‘6’)>6<button
<button class “button” on click=”appendnumber(‘7’)>7<button
<button class “button” on click=”appendnumber(‘8’)>8<button
<button class “button” on click=”appendnumber(‘9’)>9<button
<button class “button” on click=”appendnumber(‘.’)>.<button
button class operator on click=choose operation (addition) button
button class operator on click=choose operation (subtraction) button
button class operator on click=choose operation (multiplication) button
button class operator on click =choose operation (division) button
button class =”button equal on click compute()=</button>
button class = “button clear” on click =clear display button >c< /button>
div
src= “calculator.js”>
<script>
</body>
</html>
<subheading.html>
calculator functionality
the operation organization for practical use of the covid strings calculator
let display=document get element by id (‘display)
let currentoperand=’’
let previous operand=’’
let operation=undefined
append number
if (number ===’.’& currentoperand.includes(‘.’)return;
currentoperand=currentoperand.tostring()+number.tostring();
updatedisplay();
choseoperation(Op)
if(currentoperand===’’)
if(previousoperand!==’’)
compute
let computation
prev=parsefloat(previousoperand)
current=parsefloat(currentoperand)
<header.html>
thought box
a place to type your thoughts on what the answer is 
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width initial scale 1.0
<title> thought box /<title>
<style>
body{
font family arial sans serif
display:flex
justify content:center
align items:center
height  100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width 80%
padding: 10px;
margin-bottom:10px;
border: 1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
baxkground color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought >submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought input) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
</body>
</html>
covid strings team thought box =feature for teams to discuss what category to take and what each person thinks the correct answer to a question is 
prompt covid strings team thought box 
if user prompt covid strings team thought box ==correct answer
return answer 
else
check answer
<SUBHEADING.HTML>
YELLOW THOUGHT BOX
THOUGHT BOX FOR YELLOW MOXIE
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
PURPLE THOUGHT BOX
THOUGHT BOX FOR PURPLE BRAVE HEARTS
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
MAGENTA BOX
THOUGHT BOX FOR MAGENTA MAGNETIZERS 
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
RED THOUGHT BOX
THOUGHT BOX FOR RED PROTEIN SPIKERS
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
BLUE THOUGHT BOX
THOUGHT BOX FOR BLUE CURVE CRUSHERS
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
Pink BOX
THOUGHT BOX FOR Pink Covid Disease Fighters
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
INDIGO THOUGHT BOX
THOUGHT BOX FOR INDIGO ISOS
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOGUHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
BACKGROUND COLOR 007BFF
Color: Fff
Cursor: Pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
MARGIN-TOP 20PX;
FONT-SIZE 1.2EM
COLOR 333
<STYLE/>
</HEAD>
<BODY>
<DIV CLASS= “THOUGHT BOX”
INPUT TYPE= “TEXT” ID=”THOUGHT INPUT” 
CLICK ON BUTTON DISPLAY THOUGHT> SUBMIT</ BUTTON>
DIV CLASS THOUGHT DISPLAY  ID=”THOUGHT DISPLAY
</DIV>
<SCRIPT>
DISPLAY THOUGHT
THOUGHT INPUT=DOCUMENT.GETELEMENT BY ID (‘THOUGHT INPUT) .VALUE
THOUGHT DISPLAY =DOCUMENT.GETELEMENT BY ID(‘THOUGHT DISPLAY’)
THOUGHT DISPLAY. TEXT CONTENT= THOUGHT INPUT 
<SCRIPT>
</BODY>
</HTML>
<SUBHEADING.HTML>
TEAL THOUGHT BOX
THOUGHT BOX FOR TEAL TERMINATORS 
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“viewport” content =width device-width initial scale 1.0
<title> thought box /<title>
<style>
body{
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input
width  80%
padding:10px;
margin-bottom:10px;
border: 1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought id=”thought display
</div>
<script>
display thought
thought input=document get element by id (‘thought input).value
thought display=document get element by id(‘thought display’)
thought display.text content= thought input
<script>
</body>
</html>
return filename
