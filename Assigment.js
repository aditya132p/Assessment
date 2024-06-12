// Question 1
//  Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges,
//  awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and
//  difficulty.
//  The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's
//  challenge is the triplet b = (b[0], b[1], b[2]).
//  The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with
//  b[2].
//  ● Ifa[i] > b[i], then Alice is awarded 1 point.
//  ● Ifa[i] < b[i], then Bob is awarded 1 point.
//  ● Ifa[i] = b[i], then neither person receives a point.
//  Comparison points is the total points a person earned.
//  Given a and b, determine their respective comparison points.
//  Example
//  a =[1, 2, 3]
//  b =[3, 2, 1]
//  ● Forelements *0*, Bob is awarded a point because a[0] .
//  ● Forthe equal elements a[1] and b[1], no points are earned.
//  ● Finally, for elements 2, a[2] > b[2] so Alice receives a point.
//  The return array is [1, 1] with Alice's score first and Bob's second.
// Function Description
//  Complete the function compareTriplets in the editor below.
//  compareTriplets has the following parameter(s):
//  ● int a[3]: Alice's challenge rating
//  ● int b[3]: Bob's challenge rating
//  Return
//  ● int[2]: Alice's score is in the first position, and Bob's score is in the second.
//  Example
//  Input
//  17 28 30
//  99 16 8
//  Output
//  2  

function add(a ,b){
// var Alice =[17, 28, 30];
// var bob = [ 99, 16, 8]
var aliceScore = 0 ;
var bobScore = 0;
    for(let i= 0; i < a.length ;i++ ){
    //  console.log(Alice[i])
     if(a[i] > b[i]){
        aliceScore += 1;
    }
    else if (a[i] < b[i]){
        bobScore += 1;
    }
    // else if (a[i]=b[i]){
        
    // }
}
console.log(aliceScore, bobScore)
}


const alice =[17, 28, 30];
const bob = [ 99, 16, 8];

add(alice,bob)


// print a pattern 
var star ="";
for (let j =0; j < 3; j++){
    star +=" *";
    console.log(star)
}