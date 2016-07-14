function area(length,width){
 return length * width;
}
function perimeter(length,width){
   return (length + width) * 2;
}
module.exports = {
    computeArea :area,
    computePerimeter:perimeter
};