# 2016-8-30-sokoban
## Portland MagicNight - Javascript Coding Challenge
Sokoban puzzle generator and gameplay

The computer game Sokoban, invented by Hiroyuki Imabayashi, was introduced by Thinking Rabbit of
Takarazuka, Japan in 1982. This simple game of logic puzzles was an instant
success. It won awards and spawned sequels. Over the years, Sokoban has been
ported to a huge number of platforms. Fan support remains strong and many of
those fans even produce new levels for the game.

This month's magic night challenge is to implement the game of Sokoban with the
interface of your choosing and any extra features you would like to have.

Sokoban (which translates to "Warehouse Keeper") has simple rules, which basically
amount to push crates into their storage spots in the warehouse. The elements of
the levels are simple: The keeper, crates, walls, open floor, and storage.
Different level designers use various symbols to represent these items in level
data files. Here's one possible mix:

```
@       for the keeper
$       for crates
#       for walls
<space> for open floor
.       for storage
```

Now because a keeper or a crate can also be on a storage space, we need special
conditions to represent those setups:

```
*       for crate on storage
+       for keeper on storage
```

Using this, we can build an extremely simple level:

```
#####
#.$@#
#####
```

This level is completely surrounded by walls, as all Sokoban levels must be.
Walls are, of course, impassable. In the center we have from left to right: A
storage space, a crate (on open floor), and the keeper (also on open floor).

(The original Sokoban levels were 19 x 16, but later levels have varied in
size.)

The game is played by moving the keeper up, down, left and right. When the keeper 
moves towards a crate, she may push it along in front of her as long as there is
no wall or second crate behind the one being pushed. A level is solved when all
crates are on storage spaces.

Given those rules, we can solve our level above with a single move to the left,
yielding:

```
#####
#*@ #
#####
```

That simple system can lead to some surprisingly complicated mind benders, but
please don't take my word for it, we're going to build our own Sokoban game. 

Since the game was introduced, it has become very popular among computer programmers, 
and a language to describe the board has developed.  

Remember that the board is described with these symbols

```
@       for the keeper
$       for crates
#       for walls
<space> for open floor
.       for storage
+       for keeper on storage
*       for crate on storage
```

If we want to describe this board:

```
#######
#.@ # #
#$* $ #
#   $ #
# ..  #
#  *  #
#######
```

We can encode it like this:

```
7#|#.@-#-#|#$*-$-#|#3-$-#|#-..--#|#--*--#|7#
````

Note that:
Rows are delimited by a '|'
Any symbol preceded by a number repeats that symbol the specified times.
Empty spaces a denoted by a '-'


##Famous Sokoban boards
Here are some famous boards to get your team started building your Sokoban game.


"Scrambled Egg" by Takaken
```
 #####
 # @ ###
## #$  #
# *. . #
#  $$ ##
### #.#
  #   #
  #####

-5#2-|-#-@-3#|2#-#$2-#|# *.-.-#|#2#2$-2#|3#-#.#|2-#3-#|2-5# 
```


"Claire", by Lee J Haywood

```
#######
#.@ # #
#$* $ #
#   $ #
# ..  #
#  *  #
#######

7#|#.@-#-#|#$*-$-#|#3-$-#|#-..--#|#--*--#|7#
````

"Microcosmos Level 31", by Aymeric du Peloux
```
  #####
###   #
#  *# ##
# #  * #
# *  # #
## #+  #
 #   $##
 ###  #
   #### 

--#####|###---#|#--*#-##|#-#--*-#|#-*--#-#|##-#+--#|-#---$##|-###--#|---####
````


More about Sokoban board encoding  here http://sokobano.de/wiki/index.php?title=Level_format
More boards to Code http://www.ic-net.or.jp/home/takaken/e/soko/level/index.html

(Note: Most of these Sokoban levels are Copyrighted. You may play them but not profit from them in any way.)



##About Portland MagicNight

MagicNight is hosted at Notch8workspace coworking space in inner NE

```
2117 NE Oregon St. #504
```

Much thanks to Bright Night and San Diego Magic Night for dreaming up the idea.

Questions or comments?

magicnight at notch8workspace.com


