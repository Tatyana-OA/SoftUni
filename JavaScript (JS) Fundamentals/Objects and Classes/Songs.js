function songs(arr) {
    let numberofSongs=arr.shift();
    let correctTypeList = arr.pop();
     // so it starts from the first song
class Song {
    constructor(typeList,name,time){
        this.typeList=typeList;
        this.name=name;
        this.time=time;
    }
     printSongs() {
        console.log(this.name)
     }
}
for (i=0; i<arr.length; i++) {
   let [typeList,name,time]=arr[i].split("_")
   if (typeList===correctTypeList || correctTypeList==="all"){
    let mySong = new Song(typeList,name,time)
    mySong.printSongs()
   }
   
}
}
