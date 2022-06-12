# polygonPerimeter

Coding Challenge - polygonPerimeter

You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get 

from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It's guaranteed that there is at least one black cell on the table.

Example

For matrix = 

[[false, true,  true ],

[true,  true,  false],

[true,  false, false]]

the output should be

solution(matrix) = 12.

TEST1

[[false,true,true], 

 [true,true,false], 

[true,false,false]]

Expected Output: 12
 
 
 TEST2
 
 [[true,true,true], 
 
 [true,false,true], 
 
 [true,true,true]]
 
 Expected Output: 16
 
 
 TEST3
 
 
 [[true,true,true,true,true], 
 
 [true,true,true,true,true]]
 
 
 Expected Output: 14
 
 
 
 TEST4
 
 [[false,true,true], 
 
 [true,true,false], 
 
 [true,true,false]]
 
 
 Expected Output: 12
 
 
 
 TEST5
 
 [[false,false,true,false], 
 
 [false,true,true,true], 
 
 [true,true,false,true], 
 
 [true,false,true,true]]
 
 
 Expected Output: 22
 
 
 
 TEST6
 
 
 [[false,false,true,false,false], 
 
 [false,true,true,true,true], 
 
 [true,true,false,true,true], 
 
 [true,false,true,true,true]]
 
 
 
 Expected Output: 24
 
 
 TEST7
 
 [[false,false,false,false,false], 
 
 [false,true,true,true,true], 
 
 [true,true,false,false,true], 
 
 [true,false,true,true,true]]
 
 
 
 Expected Output:  24
 
 
 
 TEST8
 
 [[false,false,true,false,false], 
 
 [false,true,true,true,false], 
 
 [true,true,false,true,true], 
 
 [false,false,true,true,false]]
 
 
 Expected Output: 22
 
 
 TEST9
 
 [[false,false,true,true,true], 
 
 [false,true,true,false,true], 
 
 [false,true,false,true,true], 
 
 [true,true,false,true,false], 
 
 [true,false,true,true,false]]
 
 
 Expected Output: 32
 
 
 TEST10
 
 [[false,false,false], 
 
 [false,true,false], 
 
 [false,false,false]]
 
 
 Expected Output: 4
 
 
 TEST11
 
 [[false,false,true], 
 
 [false,false,false], 
 
 [false,false,false]]
 
 
 Expected Output: 4
 
 
 
 TEST12
 
 [[true,false], 
 
 [false,false]]
 
 
 Expected Output: 4
 
 
 
 TEST13
 
 [[true,true], 
 
 [true,true]]
 
 
 Expected Output: 8


 TEST14
 
 [[true,true,false,true,true], 
 
 [false,true,true,true,false]]

 
 Expected Output: 16
 
 
 TEST15
 
 [[true,false], 
 
 [true,false], 
 
 [true,false], 
 
 [true,true], 
 
 [false,false]]
 
 
 Expected Output: 12
 
 
 TEST16
 
 [[true,false], 
 
 [true,true], 
 
 [true,false], 
 
 [true,true], 
 
 [false,false]]
 
 
 Expected Output: 14
 
 TEST17
  
 [[true,false], 
 
 [true,false], 
 
 [true,false], 
 
 [true,false], 
 
 [true,false]]
 
 

 Expected Output: 12



 TEST18
 
 [[true,false], 
 
 [true,true], 
 
 [false,true], 
 
 [true,true], 
 
 [true,false]]
 
 
 
 Expected Output: 16
 
 
 TEST19
 
[[true,false], 

[false,false], 

[false,false]]
 
 
 
 Expected Output: 4
 
 
 
 TEST 20
 
[[true,true,true,true,true], 

[true,false,false,false,true], 

[true,false,false,false,true], 

[true,false,false,false,true], 

[true,true,true,true,true]]
 
 Expected Output: 32
 
