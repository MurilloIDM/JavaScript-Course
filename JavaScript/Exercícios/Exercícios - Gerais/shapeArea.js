function shapeArea(n) {

    let areaPolygon = (Math.pow(n, 2)) + (Math.pow(n - 1, 2))
    return areaPolygon

}

console.log(shapeArea(5))