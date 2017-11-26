
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)

  }

   yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1
   }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDistance = this.beginningLocation['vertical'] - this.endingLocation['vertical'];
    let beginningHorizontalLocation = this.beginningLocation['horizontal'];
    let endingHorizontalLocation = this.endingLocation['horizontal'];
    let beginningHorizontalIndex = eastWest.indexOf(`${beginningHorizontalLocation}`);
    let endingHorizontalIndex = eastWest.indexOf(`${endingHorizontalLocation}`);
    let horizontalDistance = beginningHorizontalIndex - endingHorizontalIndex;
    return Math.abs(verticalDistance + horizontalDistance);
  }

  estimatedTime(peak = false){
    let blocksTravelled = this.blocksTravelled()
    if (peak===true){
      return blocksTravelled / 2
    } else {
      return blocksTravelled / 3
    }
  }


}
