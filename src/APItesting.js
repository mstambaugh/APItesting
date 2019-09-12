export class Cats {
  getCatPic(catSearch){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.thecatapi.com/v1/images/search?key=${process.env.API_Key}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
