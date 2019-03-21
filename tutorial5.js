/**
 * Call our functions on window load event
 */
window.onload = function(){
    setupVis1();
    setupVis2('a');
    //v3();

};
var _data;
d3.csv("crimemap.csv").then(function(data) {
    data.forEach(function(d){
        d.a=+d.a;
        d.b=+d.b;
        d.c=+d.c;
        d.d=+d.d;
        d.e=+d.e;
        d.f=+d.f;
        d.x=+d.x;
        d.y=+d.y;

    });
        console.log(data[0]);
        _data=data;
});


const SAMPLE_DATA = [
    { "month" : "Sage Hill:315",  "point" : [410, 10],"sector":"SW", "r" : 315 },
    { "month" : "Hamptons:158",   "point" : [410, 30],"sector":"SW", "r" : 158 },
    { "month" : "Royal Oak:345" , "point" : [300, 30],"sector":"SW", "r" : 345 },
    { "month" : "Arbour lake:993","point" : [350, 40],"sector":"SW", "r" : 993 },
    { "month" : "Ranchlands:406", "point" : [450, 40],"sector":"SW", "r" : 406 },
    { "month" : "Evanston:515",   "point" : [500, 20],"sector":"NW", "r" : 515 },
    { "month" : "Dalhousie:646" , "point" : [410, 50],"sector":"NW", "r" : 646 },
    { "month" : "Silver Springs:382","point" : [350, 70],"sector":"NW", "r" : 382 },
    { "month" : "Capitol Hill:771",  "point" : [480, 90],"sector":"NW", "r" : 771 },
    { "month" : "Bowness:1727",      "point" : [400, 80],"sector":"NW", "r" : 1727 },

];

const WIDTH = 1300;
const HEIGHT = 1200;
const PAD = 15;
const MARGIN = 160;



// code modified from Scott Murray's example
// https://alignedleft.com/tutorials/d3/scales
function setupVis1(){

    let xScale = d3.scaleLinear()
        .domain([0,d3.max(_data, function(d){return d.x;})])
        .range([MARGIN, WIDTH-MARGIN]);

    let yScale = d3.scaleLinear()
        .domain([0,d3.max(_data,function(d){return d.y;})])
        .range([MARGIN, HEIGHT-MARGIN]);

    let svg = d3.select("#vis1")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    svg.selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .attr("cx",function(d){
            return xScale(d.x);
        })
        .attr("cy",function(d){
            return yScale(d.y);
        })
        .attr("r",10)
        .style("fill", "lightblue")
        .style("stroke", "none");

    svg.selectAll("text")
        .data(_data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.C;

        })
        .attr("x", function(d) {
            return xScale(d.x);
        })
        .attr("y", function(d) {
            return yScale(d.y);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "5px")
        .attr("fill", "black")
        .style("text-anchor", "start")
        .style("alignment-baseline", "middle");

    //svg.selectAll("text.v")
      //  .data(_data)
       // .enter()
        //.append("text")
       // .text(function(d) {
            //return d.a;

        //})
        //.attr("x", function(d) {
         //   return xScale(d.x);
        //})
        //.attr("y", function(d) {
          //  return yScale(d.y)+PAD;
        //})
        //.attr("font-family", "sans-serif")
        //.attr("font-size", "11px")
        //.attr("fill", "black")
        //.style("text-anchor", "start")
        //.style("alignment-baseline", "middle");

}

function setupVis2(t){


    let xScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function(d) { return d.x; })])
        .range([MARGIN, WIDTH-MARGIN]);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function(d) { return d.y; })])
        .range([MARGIN, HEIGHT-MARGIN]);

    // Here we create a power scale with an exponent value of 2
    // which we will use to resize the radii of our circle data points
    let sizeScale = d3.scalePow()
        .exponent(2)
        .domain([0, d3.max(_data, function(d) { return d[t]; })])
        .range([5, 50]); // 0 to 50 pixels

    let colorScale = d3.scaleOrdinal(d3["schemeDark2"]);
    //Create SVG element
    let svg = d3.select("#vis2")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    svg.selectAll("*").remove();

    svg.selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return xScale(d.x);
        })
        .attr("cy", function(d) {
            return yScale(d.y);
        })
        .attr("r", function(d){
            return sizeScale(d[t]);  // call our sizeScale function to map values from d.r
        })
        .style("fill", function(d){
            // when passing the month value, D3 will assign a unique
            // colour per unique month value
            // e.g., all "January" values will have a different colour
            // from "February" values, but all "January" values will be
            // of the same colour
            return colorScale(d.s);
        })
        .style("stroke", "none");

    svg.selectAll("text")
        .data(_data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.C;
        })
        .attr("x", function(d) {
            return xScale(d.x) + sizeScale(d[t]) + 2;
        })
        .attr("y", function(d) {
            return yScale(d.y);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "8px")
        .attr("fill", "black")
        .style("text-anchor", "start")
        .style("alignment-baseline", "middle");

    svg.selectAll("text.v")
        .data(_data)
        .enter()
        .append("text")
        .text(function(d) {
            return d[t];

        })
        .attr("x", function(d) {
            return xScale(d.x);
        })
        .attr("y", function(d) {
            return yScale(d.y)+PAD;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black")
        .style("text-anchor", "start")
        .style("alignment-baseline", "middle");
}

function v3(){

    let xScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function(d) { return d.xx; })])
        .range([MARGIN, WIDTH-MARGIN * 2]);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function(d) { return d.yy; })])
        .range([MARGIN, HEIGHT-MARGIN]);

    // Here we create a power scale with an exponent value of 2
    // which we will use to resize the radii of our circle data points
    let sizeScale = d3.scalePow()
        .exponent(2)
        .domain([0, d3.max(_data, function(d) { return d.ch; })])
        .range([5, 50]); // 0 to 50 pixels

    let svg = d3.select("#vis3")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    svg.selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return xScale(d.xx);
        })
        .attr("cy", function(d) {
            return yScale(d.yy);
        })
        .attr("r", function(d){
            return sizeScale(d.ch);  // call our sizeScale function to map values from d.r
        })
        .style("fill", "lightblue")
        .style("stroke", "none");

    svg.selectAll("text")
        .data(_data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.year;
        })
        .attr("x", function(d) {
            return xScale(d.xx)-PAD ;
        })
        .attr("y", function(d) {
            return yScale(d.yy)-PAD*5;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black")
        .style("text-anchor", "start")
        .style("alignment-baseline", "middle");

    svg.selectAll("text.v")
        .data(_data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.ch;

        })
        .attr("x", function(d) {
            return xScale(d.xx)-PAD;
        })
        .attr("y", function(d) {
            return yScale(d.yy);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black")
        .style("text-anchor", "start")
        .style("alignment-baseline", "middle");

}

