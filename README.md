1- Factory

sb say pehlay hum na updateCounter ka function bnaya with start parameter taa k user value de sakay apni starting value
phir uss mei count ka variable bna kr uss k andar hi start ko initailize krwa dia 
phir 2 inner function bnaye increment and decrement , aik mei counter ko increment krwa kr print krwaya and dusray mei decrement krwa kr
phir dono ko return krwa dia 
then aik updateCounter ko as a factory function use krtay huay aik naye variable ko uss ka worker bnaya 
ab wo variable increment b kr skta h decrement b kr skta h 

2- Class

sb say pehlay hum nay aik class bnai phir uss mei constructor bnaya or count ko start say initialize krwa dia 
phir 2 function bnaye increment and decrement ka , jiss mein count ko ++ or -- kia 
phir class ka object bna kr un ko call kr lia dono functions ko 

3- Generator

iss mei hum yield ka use krtay hein jo k function ko pause kr deta h kush der k liye , jo k return ki jagah pr b use hota h
increment ka function bnaya or uss mei while (true) lga kr yield ko ++ kr dia
then decrement ka function lga kr while(true) say yeild ko -- krdia 
phir inrement k function ko call kia .next.value lga kr 
and then decrement k function ko call kia .next().value() lga kr

